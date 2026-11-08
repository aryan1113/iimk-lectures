import { subjects, getLectures } from '../subjects'
import '../styles/Landing.css'

function Landing() {
  return (
    <div className="landing">
      <h1>Study Notes</h1>
      <p className="landing-sub">PGP29 course notes, one place</p>
      <div className="subject-grid">
        {subjects.map((s) => (
          <a key={s.id} className="subject-card" href={`#/${s.id}`}>
            <span className="subject-icon">{s.icon}</span>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
            <span className="subject-count">{getLectures(s).length} notes</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Landing
