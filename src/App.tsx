import { useEffect, useRef, useState } from 'react'
import LessonPagination from './components/LessonPagination'
import { lessons, references } from './data/content.json'
import './App.css'
import './components/Sidebar.css'
import './components/LessonCard.css'

type Page = typeof lessons[number]
function Content({ html }: { html: string }) { return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} /> }
function LessonDetail({ lesson }: { lesson: Page }) {
  const [page, setPage] = useState(0)
  const heading = useRef<HTMLHeadingElement>(null)
  const section = lesson.sections[page]!
  function changePage(next: number) { setPage(next); window.scrollTo(0, 0); heading.current?.focus() }
  return <section className="lesson-detail"><a className="back-link" href="#/lessons">← All lessons</a><header className="lesson-heading"><p className="unit-level">Lesson {lessons.indexOf(lesson) + 1}: {lesson.title}</p><p className="page-position">Page {page + 1} of {lesson.sections.length}</p><h1 ref={heading} tabIndex={-1}>{section.title}</h1></header><Content html={section.html} />{page === 0 && <p className="booklet-note">Read one page at a time. Use Next to continue, or choose a page from the menu below. Use your workbook for the practical tasks.</p>}<LessonPagination titles={lesson.sections.map(s => s.title)} current={page} onChange={changePage} onReturn={() => { window.location.hash = '/lessons' }} /></section>
}
function Listing({ practical = false }: { practical?: boolean }) {
  const entries = practical ? references : lessons
  return <><header className="unit-heading"><p className="unit-level">Computing Science · MakeCode Blocks</p><h1>{practical ? 'Practical references' : 'Lessons'}</h1><p>{practical ? 'Step-by-step project guides to use alongside your workbook. Project numbers keep their original order; follow the links in each teaching lesson.' : 'Choose a lesson to learn the programming concept. Read one idea at a time, then apply it in your workbook.'}</p></header><section aria-label={practical ? 'Projects' : 'Teaching sequence'}>{entries.map((entry, i) => <a className="lesson-card" href={`#/${practical ? 'reference' : 'lesson'}/${entry.slug}`} key={entry.slug}><span className="lesson-number">{String(i + 1).padStart(2, '0')}</span><span className="lesson-title">{entry.title}<small>{practical ? 'Build, test and improve' : 'Concept · micro:bit example · predict and discuss'}</small></span><span className="lesson-arrow" aria-hidden="true">→</span></a>)}</section></>
}
export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  const main = useRef<HTMLElement>(null)
  useEffect(() => { const sync = () => { setHash(window.location.hash); window.scrollTo(0, 0); main.current?.focus() }; window.addEventListener('hashchange', sync); return () => window.removeEventListener('hashchange', sync) }, [])
  const path = hash.replace(/^#\/?/, '').split('/')
  const lesson = path[0] === 'lesson' ? lessons.find(l => l.slug === path[1] || String(lessons.indexOf(l) + 1) === path[1]) : undefined
  const reference = path[0] === 'reference' ? references.find(l => l.slug === path[1]) : undefined
  const view = path[0] === 'lesson' ? 'lessons' : path[0] === 'reference' ? 'references' : path[0] || 'home'
  return <><a className="skip-link" href="#main-content" onClick={e => { e.preventDefault(); main.current?.focus() }}>Skip to content</a><header className="site-header"><div className="site-header-inner"><a className="brand" href="#/">Microbit Missions</a><nav aria-label="Main navigation">{[['home', 'Home'], ['lessons', 'Lessons'], ['references', 'Practical references']].map(([id, label]) => <a key={id} href={id === 'home' ? '#/' : `#/${id}`} className={view === id ? 'active' : ''} aria-current={view === id ? 'page' : undefined}>{label}</a>)}</nav></div></header><main ref={main} id="main-content" className="page-content" tabIndex={-1}>
  {view === 'home' && <><header className="landing-introduction"><p className="unit-level">Computing Science · Physical computing</p><h1>Small board. Big ideas.</h1><p>Turn a BBC micro:bit into a pocket character, a dice, a treasure alarm and a wireless messaging system. Across ten lessons, learn how inputs, events, variables, decisions and loops work together.</p><p>Each lesson explains one idea at a time, with diagrams and worked examples in MakeCode Blocks. Use the lessons alongside the practical tasks in your workbook.</p><a className="button primary" href="#/lessons">Go to lessons →</a></header><section className="home-section"><h2>What you will learn</h2><div className="curriculum-grid"><section><h3>Control a program</h3><p>Use events, sequence, selection and iteration to decide what happens and when.</p></section><section><h3>Work with information</h3><p>Store values, use sensors and coordinates, and organise code with functions and lists.</p></section><section><h3>Connect and create</h3><p>Send radio messages, test your ideas and build a classroom help system.</p></section></div></section><section className="home-section"><h2>Before you begin</h2><p>You will need <a href="https://makecode.microbit.org/" target="_blank" rel="noopener noreferrer">Microsoft MakeCode for micro:bit</a>, a BBC micro:bit, a USB data cable and your workbook. Radio tasks need a partner and two powered boards.</p><p>Use the Blocks editor. Predict what will happen, try the simulator, test on your board and record what you find. Save each project and download a .hex backup.</p></section></>}
  {view === 'lessons' && (lesson ? <LessonDetail key={lesson.slug} lesson={lesson} /> : <Listing />)}
  {view === 'references' && (reference ? <article><a className="back-link" href="#/references">← All practical references</a><header className="lesson-heading"><p className="unit-level">Practical reference {references.indexOf(reference) + 1}</p><h1>{reference.title}</h1></header><Content html={reference.html} /></article> : <Listing practical />)}
  {!['home', 'lessons', 'references'].includes(view) && <><h1>Page not found</h1><a href="#/lessons">Browse the lessons</a></>}
  <footer>Microbit Missions <span>Computing Science · MakeCode Blocks</span></footer></main></>
}
