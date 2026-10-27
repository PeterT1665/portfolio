import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featured, hero } from '../content'
import { LiveLine } from './LiveLine'

gsap.registerPlugin(ScrollTrigger)

// The name is split to the two edges of the screen and held there; a reel of the
// live projects runs through the frame between the halves as the page scrolls.
export function Hero() {
  const root = useRef<HTMLElement>(null)
  const reel = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
      const frames = reel.current!.children
      const step = () => (frames[1] as HTMLElement).offsetTop - (frames[0] as HTMLElement).offsetTop
      gsap.to(reel.current, {
        y: () => -step() * (frames.length - 1),
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={root} aria-labelledby="hero-title">
      <div className="hero__stage">
        <h1 className="hero__title" id="hero-title">
          <span className="hero__start" data-enter="left">
            {hero.titleStart.map((l) => (
              <span key={l} className="hero__line">
                {l}{' '}
              </span>
            ))}
          </span>
          <span className="hero__end" data-enter="right">
            {hero.titleEnd.map((l) => (
              <span key={l} className="hero__line">
                {l}{' '}
              </span>
            ))}
          </span>
        </h1>

        <div className="hero__window" data-enter="open">
          <div className="hero__reel" ref={reel}>
            {featured.map((p, i) => (
              <a key={p.name} className="hero__frame" href={p.url} target="_blank" rel="noreferrer">
                <img
                  src={`${p.shot.src}-1600.webp`}
                  srcSet={`${p.shot.src}-800.webp 800w, ${p.shot.src}-1600.webp 1600w`}
                  sizes="(max-width: 768px) 92vw, 36vw"
                  alt={p.shot.alt}
                  width={p.shot.width}
                  height={p.shot.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
                <span className="hero__caption">
                  <span>{p.name}</span>
                  <LiveLine id={p.name} />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero__foot" data-enter="rise">
          <p className="hero__lead">{hero.lead}</p>
          <a className="button" href={hero.action.href}>
            {hero.action.label}
          </a>
        </div>
      </div>
    </section>
  )
}
