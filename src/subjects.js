import { lectures as fcLectures } from './data'

// Lazy-loaded raw markdown for every subject (summary/, markdown/ or top-level extras)
const files = import.meta.glob(['../content/*/{summary/*.md,markdown/*.md,*.md}', '!../content/financial-crisis/markdown/*.md'], {
  query: '?raw',
  import: 'default',
})

// Optional curated lecture list per subject: content/<id>/index.json
const indexes = import.meta.glob('../content/*/index.json', { eager: true, import: 'default' })

export const subjects = [
  {
    id: 'financial-crisis',
    name: 'Financial Crisis',
    description: 'Monetary policy, crises from the 1920s to COVID, early-warning indicators.',
    icon: '📉',
    lectures: fcLectures,
    extras: true,
  },
  { id: 'sdm', name: 'Sales & Distribution Mgmt', description: 'Selling, negotiation, channel and salesforce management.', icon: '🤝' },
  { id: 'ecommerce', name: 'E-Commerce', description: 'Infrastructure, strategy, analytics and UX.', icon: '🛒' },
  { id: 'imc', name: 'Integrated Marketing Comms', description: 'Media, creative strategy, paid search, sponsorship.', icon: '📣' },
  { id: 'behavioural-strategy', name: 'Behavioural Strategy', description: 'Bounded rationality, inertia, learning and simulations.', icon: '🧠' },
  { id: 'consumer-behaviour', name: 'Consumer Behaviour', description: 'Perception, personality, culture, emotion, neuromarketing.', icon: '🛍️' },
]

export const getSubject = (id) => subjects.find((s) => s.id === id)

const clean = (name) =>
  name.replace(/\.md$/, '').replace(/_[0-9a-f]{32}/, '').replace(/_+/g, ' ').replace(/\s+/g, ' ').trim()

// Curated subjects provide their own list; others are auto-built from summary/ (preferred) or markdown/
export function getLectures(subject) {
  if (subject.lectures) return subject.lectures
  const curated = indexes[`../content/${subject.id}/index.json`]
  if (curated) {
    return curated.map((l) => ({
      id: l.id || l.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      number: null,
      ...l,
    }))
  }
  const prefix = `../content/${subject.id}/`
  const collect = (dir) =>
    Object.keys(files).filter((k) => k.startsWith(`${prefix}${dir}/`)).map((k) => k.slice(prefix.length))
  let paths = collect('summary')
  if (paths.length === 0) paths = collect('markdown')
  return paths
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const title = clean(file.split('/').pop())
      return { id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'), number: null, title, file, category: 'Lectures' }
    })
}

export async function loadMarkdown(subjectId, file) {
  const loader = files[`../content/${subjectId}/${file}`]
  return loader ? loader() : null
}
