import { useEffect, useRef, useState } from 'react'
import { featured, workIntro } from '../content'
import { LiveLine } from './LiveLine'

// Names passing a held square: the project names scroll past in very large type
// while one square frame holds the centre of the screen and shows whichever
// project is crossing it. Either side of the frame: what it is and how it placed
// on the left; whether its server is awake and where to open it on the right.
// On a phone the hold is dropped and each name carries its own picture and lines.
export function Work() {
  const [current, setCurrent] = useState(0)
  const list = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const rows = list.current!.querySelectorAll<HTMLElement>('[data-index]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index))
      },
      { rootMargin: '-79% 0px -20% 0px' }, // a thin line just under the frame, so the current name sits clear of it
    )
    rows.forEach((r) => io.observe(r))
    return () => io.disconnect()
  }, [])

  const p = featured[current]

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="work__head" data-rise-group>
        <h2 className="work__title" id="work-title" data-rise>
          Live work
        </h2>
        <p className="work__intro" data-rise>
          {workIntro}
        </p>
      </div>

      <div className="work__stage">
        <div className="work__hold">
          <div className="work__fact work__fact--left" aria-hidden="true">
            <p>{p.what}</p>
            <p className="work__result">{p.result}</p>
          </div>
          <div className="work__frame" aria-hidden="true">
            {featured.map((f, i) => (
              <div key={f.name} className={`work__shot${i === current ? ' is-current' : ''}`}>
                <img src={`${f.shot.src}-1600.webp`} alt="" width={f.shot.width} height={f.shot.height} loading="lazy" />
                {f.phone && (
                  <span className="work__phone">
                    <img src={`${f.phone.src}-800.webp`} alt="" width={f.phone.width} height={f.phone.height} loading="lazy" />
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="work__fact work__fact--right">
            <LiveLine id={p.name} />
            <p className="work__links">
              <a className="link" href={p.url} target="_blank" rel="noreferrer">
                Open {p.name}
              </a>
              {p.repo && (
                <a className="link" href={p.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </p>
          </div>
        </div>

        <ol className="work__names" ref={list}>
          {featured.map((f, i) => (
            <li key={f.name} data-index={i} className={i === current ? 'is-current' : undefined}>
              <a className="work__name" href={f.url} target="_blank" rel="noreferrer">
                {f.name}
              </a>
              <div className="work__row">
                <p>{f.what}</p>
                <p className="work__result">{f.result}</p>
                <p className="work__status">
                  <LiveLine id={f.name} />
                  {f.repo && (
                    <a className="link" href={f.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </p>
                <div className="work__pics">
                  <img src={`${f.shot.src}-800.webp`} alt={f.shot.alt} width={f.shot.width} height={f.shot.height} loading="lazy" />
                  {f.phone && (
                    <span className="work__phone">
                      <img src={`${f.phone.src}-800.webp`} alt={f.phone.alt} width={f.phone.width} height={f.phone.height} loading="lazy" />
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
