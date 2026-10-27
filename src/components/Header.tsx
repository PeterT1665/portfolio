import { useEffect, useState } from 'react'
import { nav, person } from '../content'

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

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="bar">
      <a className="bar__mark" href="#top">
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
        <button type="button" className="link theme" onClick={() => setTheme(next)} aria-label={`Switch to ${next} mode`}>
          {next === 'dark' ? 'Dark' : 'Light'}
        </button>
        <a className="button button--small" href={`mailto:${person.email}`}>
          Email me
        </a>
      </div>
    </header>
  )
}
