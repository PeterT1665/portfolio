import { featured, library } from '../content'
import { LiveLine } from './LiveLine'

// Every project at one type size, in four fixed columns; the column starts do the
// organising, not lines or boxes. On its own page it opens with the four demos
// that are running right now.
export function Library({ page = false }: { page?: boolean }) {
  const Title = page ? 'h1' : 'h2'
  return (
    <section className="library" id="library" aria-labelledby="library-title">
      <Title className="library__title" id="library-title" data-rise>
        Everything I've built
      </Title>
      {page && (
        <div className="library__intro" data-rise-group>
          <p data-rise>
            Four live demos you can open right now, then every other project I've built, from hackathons to side projects.
          </p>
          <a className="button" href="/#work" data-rise>
            Back to the live projects
          </a>
        </div>
      )}

      {page && (
        <>
          <h2 className="library__sub" data-rise>
            Live now
          </h2>
          <ul className="library__live" data-rise-group>
            {featured.map((f) => (
              <li key={f.name} data-rise>
                <a href={f.url} target="_blank" rel="noreferrer">
                  <img src={`${f.shot.src}-800.webp`} alt={f.shot.alt} width={f.shot.width} height={f.shot.height} loading="lazy" />
                  <span className="library__live-name">{f.name}</span>
                  <LiveLine id={f.name} />
                </a>
              </li>
            ))}
          </ul>
          <h2 className="library__sub" data-rise>
            All of it
          </h2>
        </>
      )}

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
