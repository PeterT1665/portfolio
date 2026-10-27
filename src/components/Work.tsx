import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featured, workIntro } from '../content'
import { LiveLine } from './LiveLine'

gsap.registerPlugin(ScrollTrigger)

// Names passing a held frame: the project names scroll past in very large type
// while one frame holds the top of the screen and shows the project whose name is
// in view. Each name fades in as it rises toward the frame and is gone before it
// touches it, and comes back the same way when scrolling up. On a phone the hold
// is dropped and each name carries its own picture and lines.
export function Work() {
  const [current, setCurrent] = useState(0)
  const root = useRef<HTMLElement>(null)
  const list = useRef<HTMLOListElement>(null)

  // Which project the frame shows: the name closest to a line low on the screen.
  useLayoutEffect(() => {
    const items = Array.from(list.current!.querySelectorAll<HTMLElement>('[data-index] .work__name'))
    const pick = () => {
      const target = innerHeight * 0.88
      let best = 0
      let dist = Infinity
      items.forEach((el, i) => {
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - target)
        if (d < dist) {
          dist = d
          best = i
        }
      })
      setCurrent(best)
    }
    pick()
    addEventListener('scroll', pick, { passive: true })
    addEventListener('resize', pick)
    return () => {
      removeEventListener('scroll', pick)
      removeEventListener('resize', pick)
    }
  }, [])

  // Each name's opacity is tied to its scroll position: in over the first part of
  // its rise, held, then out before it reaches the bottom edge of the frame.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
      const frame = root.current!.querySelector<HTMLElement>('.work__frame')!
      const frameBottom = () => 64 + 0.04 * innerHeight + frame.offsetHeight + 56 // bar + gap + frame + the phone's overhang
      list.current!.querySelectorAll<HTMLElement>('.work__name').forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 98%',
            end: () => `top ${frameBottom()}px`,
            scrub: 0.25,
            invalidateOnRefresh: true,
            onUpdate: () => {
              el.style.pointerEvents = Number(gsap.getProperty(el, 'opacity')) > 0.3 ? 'auto' : 'none'
            },
          },
        })
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'none' })
          .to(el, { opacity: 1, duration: 0.25 })
          .to(el, { opacity: 0, duration: 0.45, ease: 'none' })
      })
    })
    return () => mm.revert()
  }, [])

  const p = featured[current]

  return (
    <section className="work" id="work" ref={root} aria-labelledby="work-title">
      <div className="work__head" data-rise-group>
        <h2 className="work__title" id="work-title" data-rise>
          Live projects
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
      <p className="work__all">
        <a className="button" href="/projects">
          See everything I've built
        </a>
      </p>
    </section>
  )
}
