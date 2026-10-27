import { cheer } from '../content'
import { Photo } from './Photo'

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
              <dt>{m.figure}</dt>
              <dd>{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="record" data-rise-group>
        {cheer.record.map((g) => (
          <div key={g.place} className="record__group">
            <h3 data-rise>{g.place}</h3>
            <ul>
              {g.rows.map((r) => (
                <li key={r.year + r.event} className="record__row" data-rise>
                  <span className="record__year">{r.year}</span>
                  <span className="record__event">{r.event}</span>
                  <span className="record__result">{r.result}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {cheer.photos.some((p) => p.src) && (
        <div className="cheer__photos" data-rise-group>
          {cheer.photos.map((p) => (
            <div key={p.label} data-rise>
              <Photo className="cheer__photo" label={p.label} note={p.note} src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
