import { useState, useEffect, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import ContentViewer from './components/ContentViewer'
import SearchBar from './components/SearchBar'
import Landing from './components/Landing'
import { getSubject, getLectures } from './subjects'
import './styles/App.css'

// Hash routes: #/ (landing), #/<subject>, #/<subject>/<lectureId>
// Legacy "#<lectureId>" links from the single-subject site map to financial-crisis.
function parseHash() {
  const raw = window.location.hash.slice(1)
  if (!raw || raw === '/') return { subject: null, lecture: null }
  if (!raw.startsWith('/')) return { subject: 'financial-crisis', lecture: raw }
  const [subject, lecture] = raw.slice(1).split('/')
  return { subject, lecture: lecture || null }
}

function App() {
  const [route, setRoute] = useState(parseHash)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const subject = route.subject ? getSubject(route.subject) : null
  const lectures = useMemo(() => (subject ? getLectures(subject) : []), [subject])

  // Reset search when switching subject
  useEffect(() => setSearchQuery(''), [route.subject])

  if (!subject) return <Landing />

  const go = (id) => { window.location.hash = `/${subject.id}/${id}` }
  const selectedId = route.lecture || lectures[0]?.id
  const isCheatSheet = subject.extras && selectedId === 'cheat-sheet'
  const isPrepGuide = subject.extras && selectedId === 'prep-guide'

  const q = searchQuery.trim().toLowerCase()
  const filtered = q
    ? lectures.filter((l) => l.title.toLowerCase().includes(q) || l.category.toLowerCase().includes(q))
    : lectures

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>
            <a href="#/" className="home-link" title="All subjects">←</a> {subject.name}
          </h1>
          {subject.extras && (
            <div className="header-buttons">
              <a href="./plan.txt" target="_blank" rel="noopener noreferrer" className="special-btn" title="Personal study plan">
                📝 Plan for me
              </a>
              <button className={`special-btn ${isPrepGuide ? 'active' : ''}`} onClick={() => go('prep-guide')}>
                🎯 Prep Guide
              </button>
              <button className={`special-btn ${isCheatSheet ? 'active' : ''}`} onClick={() => go('cheat-sheet')}>
                📋 Cheat Sheet
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="app-container">
        <aside className="app-sidebar">
          <SearchBar query={searchQuery} onChange={setSearchQuery} resultCount={filtered.length} />
          <Sidebar lectures={filtered} selectedId={selectedId} onSelectLecture={go} grouped={!q} />
        </aside>

        <main className="app-content">
          <ContentViewer
            subjectId={subject.id}
            lectures={lectures}
            selectedId={selectedId}
            isCheatSheet={isCheatSheet}
            isPrepGuide={isPrepGuide}
          />
        </main>
      </div>
    </div>
  )
}

export default App
