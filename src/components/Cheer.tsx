import { cheer } from '../content'
import { Stage } from './Stage'

// Small drawings beside each figure: a gold medal, the Australian flag, a globe.
const icons = {
  medal: (
    <svg viewBox="0 0 32 40" aria-hidden="true">
      <path d="M8 0h7l5 14h-7zM24 0h-7l-5 14h7z" fill="#1550d6" />
      <circle cx="16" cy="26" r="13" fill="#e2b33c" />
      <circle cx="16" cy="26" r="9" fill="none" stroke="#b8861b" strokeWidth="2" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l30 15M30 0L0 15" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l30 15M30 0L0 15" stroke="#e4002b" strokeWidth="1.2" />
      <path d="M15 0v15M0 7.5h30" stroke="#fff" strokeWidth="5" />
      <path d="M15 0v15M0 7.5h30" stroke="#e4002b" strokeWidth="3" />
      <g fill="#fff">
        <circle cx="15" cy="22.5" r="3" />
        <circle cx="45" cy="6" r="1.6" />
        <circle cx="38" cy="13" r="1.6" />
        <circle cx="52" cy="11" r="1.6" />
        <circle cx="45" cy="25" r="1.8" />
        <circle cx="48.5" cy="16.5" r="0.9" />
      </g>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <circle cx="20" cy="20" r="17" />
      <ellipse cx="20" cy="20" rx="7.5" ry="17" />
      <path d="M3 20h34M6 11h28M6 29h28" />
    </svg>
  ),
}

function Record({ g }: { g: (typeof cheer.record)[number] }) {
  return (
    <div className="record__group">
      <h3>{g.place}</h3>
      <ul>
        {g.rows.map((r) => (
          <li key={r.year + r.event} className="record__row">
            <span className="record__year">{r.year}</span>
            <span className="record__event">{r.event}</span>
            <span className="record__result">{r.result}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Cheer() {
  return (
    <section className="cheer" id="cheer" aria-labelledby="cheer-title">
      <div className="cheer__intro" data-rise-group>
        <h2 className="cheer__title" id="cheer-title" data-rise>
          {cheer.heading}
        </h2>
        <p className="cheer__body" data-rise>
          {cheer.body}
        </p>
        <dl className="cheer__medals">
          {cheer.medals.map((m) => (
            <div key={m.label} data-rise>
              <dt>
                <span className={`cheer__icon cheer__icon--${m.icon}`}>{icons[m.icon]}</span>
                {m.figure}
              </dt>
              <dd>{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Stage className="stage--cheer" pics={cheer.photos} left={<Record g={cheer.record[0]} />} right={<Record g={cheer.record[1]} />} />
    </section>
  )
}
