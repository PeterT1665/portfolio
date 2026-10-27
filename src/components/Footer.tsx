import { credits, nav, person } from '../content'
import { Photo } from './Photo'

export function Footer() {
  return (
    <footer className="footer">
      <Photo className="footer__photo" label="Cheer photo" note="photos/cheer-2.jpg" src="/img/cheer-2" alt="Legacy team with the 2025 Grand Champion banner" />
      <div className="footer__side">
        <p className="footer__mark">{person.name}</p>
        <nav aria-label="Footer">
          <ul className="footer__menu">
            {[{ label: 'Top', href: '/' }, ...nav, { label: 'All projects', href: '/projects' }].map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__blocks">
          <p>
            <a className="link" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <br />
            {person.city}
          </p>
          <p>
            <a className="link" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <br />
            <a className="link" href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <p className="footer__legal">
          © 2026 {person.name}. Built with React, Vite and GSAP. Pictures:{' '}
          {credits.map((c, i) => (
            <span key={c.url}>
              <a className="link" href={c.url} target="_blank" rel="noreferrer">
                {c.title}
              </a>{' '}
              by {c.by}, {c.licence}
              {i < credits.length - 1 ? '; ' : '.'}
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}
