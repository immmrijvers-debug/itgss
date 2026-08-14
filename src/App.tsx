import { useEffect, useId, useRef, useState } from 'react'
import { courseMeta, weekSummaries, type WeekSummary } from './data/summaries'
import { generateSummary, type GeneratedSummary } from './lib/summarize'
import './App.css'

function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) obs.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  return { ref, visible }
}

function WeekPanel({ week }: { week: WeekSummary }) {
  return (
    <article className="week-panel" aria-labelledby={`week-${week.id}-title`}>
      <header className="week-panel__header">
        <p className="week-panel__kicker">Week {week.week}</p>
        <h3 id={`week-${week.id}-title`}>{week.title}</h3>
        <p className="week-panel__subtitle">{week.subtitle}</p>
      </header>

      <p className="week-panel__overview">{week.overview}</p>

      <div className="week-panel__grid">
        <section>
          <h4>Key points</h4>
          <ul>
            {week.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4>Frameworks</h4>
          <ul className="framework-list">
            {week.frameworks.map((fw) => (
              <li key={fw.name}>
                <strong>{fw.name}</strong>
                <span>{fw.takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="exam-hints">
        <h4>Exam focus</h4>
        <ul>
          {week.examHints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function SummaryWorkspace() {
  const [activeId, setActiveId] = useState(weekSummaries[0]?.id ?? '')
  const active = weekSummaries.find((w) => w.id === activeId) ?? weekSummaries[0]
  const tablistId = useId()

  return (
    <div className="summary-workspace">
      <div
        className="week-tabs"
        role="tablist"
        aria-label="Lecture weeks"
        id={tablistId}
      >
        {weekSummaries.map((week) => {
          const selected = week.id === active?.id
          return (
            <button
              key={week.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? 'week-tab is-active' : 'week-tab'}
              onClick={() => setActiveId(week.id)}
            >
              <span className="week-tab__num">W{week.week}</span>
              <span className="week-tab__label">{week.title}</span>
            </button>
          )
        })}
      </div>
      {active ? <WeekPanel week={active} /> : null}
    </div>
  )
}

function NoteSummarizer() {
  const [notes, setNotes] = useState('')
  const [result, setResult] = useState<GeneratedSummary | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSummarize() {
    const summary = generateSummary(notes)
    if (!summary) {
      setResult(null)
      setError('Paste at least a short paragraph of lecture notes (about 80+ characters).')
      return
    }
    setError(null)
    setResult(summary)
  }

  return (
    <div className="summarizer">
      <label className="summarizer__label" htmlFor="lecture-notes">
        Paste lecture notes or slide text
      </label>
      <textarea
        id="lecture-notes"
        className="summarizer__input"
        rows={10}
        placeholder="Paste Week 2 notes, guest-lecture takeaways, or reading highlights…"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <div className="summarizer__actions">
        <button type="button" className="btn btn--primary" onClick={handleSummarize}>
          Build summary
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setNotes('')
            setResult(null)
            setError(null)
          }}
        >
          Clear
        </button>
      </div>
      {error ? <p className="summarizer__error" role="alert">{error}</p> : null}
      {result ? (
        <div className="summarizer__result" aria-live="polite">
          <h3>Your summary</h3>
          <p className="summarizer__overview">{result.overview}</p>
          <ul>
            {result.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {result.keywords.length > 0 ? (
            <p className="summarizer__keywords">
              <span>Keywords</span>
              {result.keywords.join(' · ')}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default function App() {
  const summariesSection = useInView<HTMLElement>()
  const createSection = useInView<HTMLElement>()

  return (
    <div className="app">
      <a className="skip-link" href="#summaries">
        Skip to summaries
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top">
            <span className="brand__mark">ITGSS</span>
            <span className="brand__meta">{courseMeta.code}</span>
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#summaries">Summaries</a>
            <a href="#create">Create</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__brand">ITGSS</p>
            <h1 id="hero-title">Lecture summaries, built for the exam.</h1>
            <p className="hero__lede">
              Distill {courseMeta.name} into week-by-week takeaways—decision rights,
              operating models, and the arguments you need on paper.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#summaries">
                Open summaries
              </a>
              <a className="btn btn--ghost" href="#create">
                Summarize your notes
              </a>
            </div>
          </div>
        </section>

        <section
          id="summaries"
          className={summariesSection.visible ? 'section is-visible' : 'section'}
          ref={summariesSection.ref}
          aria-labelledby="summaries-title"
        >
          <div className="section__intro">
            <h2 id="summaries-title">Weekly summaries</h2>
            <p>
              Structured overviews of each lecture—key points, frameworks, and exam
              focus. Assessment: {courseMeta.assessment}.
            </p>
          </div>
          <SummaryWorkspace />
        </section>

        <section
          id="create"
          className={createSection.visible ? 'section section--create is-visible' : 'section section--create'}
          ref={createSection.ref}
          aria-labelledby="create-title"
        >
          <div className="section__intro">
            <h2 id="create-title">Create a summary</h2>
            <p>
              Paste raw notes or slide text. ITGSS extracts a short overview, ranked
              bullets, and keywords—offline, in your browser.
            </p>
          </div>
          <NoteSummarizer />
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <strong>ITGSS</strong> · {courseMeta.code} · {courseMeta.name}
        </p>
      </footer>
    </div>
  )
}
