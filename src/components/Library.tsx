import { library } from '../content'

// Every project at one type size, in four fixed columns; the column starts do the
// organising, not lines or boxes.
export function Library() {
  return (
    <section className="library" id="library" aria-labelledby="library-title">
      <h2 className="library__title" id="library-title" data-rise>
        Everything I've built
      </h2>
      <ul className="library__rows" data-rise-group>
        {library.map((r) => {
          const cells = (
            <>
              <span className="library__name">{r.name}</span>
              <span className="library__what">{r.what}</span>
              <span className="library__stack">{r.stack}</span>
              <span className="library__note">{r.note}</span>
            </>
          )
          return (
            <li key={r.name} data-rise>
              {r.url ? (
                <a className="library__row" href={r.url} target="_blank" rel="noreferrer">
                  {cells}
                </a>
              ) : (
                <span className="library__row">{cells}</span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
