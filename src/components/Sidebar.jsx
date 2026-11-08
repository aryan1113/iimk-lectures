import '../styles/Sidebar.css'

function Sidebar({ lectures, selectedId, onSelectLecture, grouped }) {
  // Group by category if we're showing all lectures
  let groupedLectures = {}

  if (grouped) {
    lectures.forEach(lecture => {
      if (!groupedLectures[lecture.category]) {
        groupedLectures[lecture.category] = []
      }
      groupedLectures[lecture.category].push(lecture)
    })
  } else {
    // When filtered, show all results flat
    groupedLectures['Search Results'] = lectures
  }

  return (
    <nav className="sidebar">
      {Object.entries(groupedLectures).map(([category, lectureGroup]) => (
        <div key={category} className="lecture-category">
          <h3 className="category-title">{category}</h3>
          <ul className="lecture-list">
            {lectureGroup
              .map(lecture => (
                <li key={lecture.id}>
                  <button
                    className={`lecture-btn ${selectedId === lecture.id ? 'active' : ''}`}
                    onClick={() => onSelectLecture(lecture.id)}
                  >
                    <span className="lecture-number">
                      {lecture.label ?? (lecture.number ? `Lec ${lecture.number}` : '📚')}
                    </span>
                    <span className="lecture-title">{lecture.title}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default Sidebar
