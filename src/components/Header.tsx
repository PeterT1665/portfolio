import { useEffect, useState } from 'react'
import { nav, person } from '../content'

const Sun = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
  </svg>
)
const Moon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
  </svg>
)

export function Header() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode: the switch still works for this visit */
    }
  }, [theme])

  const dark = theme === 'dark'

  return (
    <header className="bar">
      <a className="bar__mark" href="/">
        {person.name}
      </a>
      <nav className="bar__nav" aria-label="Sections">
        {nav.map((n) => (
          <a key={n.href} className="link" href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="bar__end">
        <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode" className="switch" onClick={() => setTheme(dark ? 'light' : 'dark')}>
          <span className="switch__knob">{dark ? <Moon /> : <Sun />}</span>
        </button>
        <a className="button button--small" href={`mailto:${person.email}`}>
          Email me
        </a>
      </div>
    </header>
  )
}
