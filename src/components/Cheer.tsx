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
