import { useState, useEffect } from 'react'
import { marked } from 'marked'
import { cheatSheet, prepGuide } from '../data'
import { loadMarkdown, getNotesFile } from '../subjects'
import '../styles/ContentViewer.css'

function ContentViewer({ subjectId, lectures, selectedId, isCheatSheet, isPrepGuide }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('notes')

  const lectureFile = (!isCheatSheet && !isPrepGuide) ? lectures.find(l => l.id === selectedId)?.file : null
  const notesFile = getNotesFile(subjectId, lectureFile)

  // Reading notes are the default view whenever a lecture has them
  useEffect(() => { setTab('notes') }, [subjectId, selectedId])

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true)
      try {
        let file
        if (isCheatSheet) {
          file = cheatSheet.file
        } else if (isPrepGuide) {
          file = prepGuide.file
        } else {
          file = lectures.find(l => l.id === selectedId)?.file
          if (notesFile && tab === 'notes') file = notesFile
        }

        if (!file) {
          setContent('<p>Content not found</p>')
          setLoading(false)
          return
        }

        const text = await loadMarkdown(subjectId, file)
        if (text === null) {
          setContent('<p>Content not found</p>')
          return
        }

        const html = marked(text)
        setContent(html)
      } catch (error) {
        console.error('Error loading content:', error)
        setContent('<p>Error loading content</p>')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [subjectId, selectedId, isCheatSheet, isPrepGuide, tab, notesFile])

  const getLectureTitle = () => {
    if (isCheatSheet) return cheatSheet.title
    if (isPrepGuide) return prepGuide.title
    return lectures.find(l => l.id === selectedId)?.title || 'Select a lecture'
  }

  return (
    <div className="content-viewer">
      <div className="content-header">
        <h2>{getLectureTitle()}</h2>
        {notesFile && (
          <div className="content-tabs" role="tablist">
            <button role="tab" aria-selected={tab === 'notes'} className={tab === 'notes' ? 'active' : ''} onClick={() => setTab('notes')}>
              Reading notes
            </button>
            <button role="tab" aria-selected={tab === 'quick'} className={tab === 'quick' ? 'active' : ''} onClick={() => setTab('quick')}>
              Quick revision
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  )
}

export default ContentViewer
