import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Pic } from '../content'

gsap.registerPlugin(ScrollTrigger)

// Two sides held on screen with one picture between them; as the page scrolls, each
// picture fades into the next, like the Live projects frame. Used by the self intro
// and the cheer record. On a phone the hold is dropped and the pictures become a
// strip to swipe.
export function Stage({ left, right, pics, className = '', eager = false }: { left: ReactNode; right: ReactNode; pics: Pic[]; className?: string; eager?: boolean }) {
  const root = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  // The picture shown follows how far through the stage the page has scrolled.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 769px)', () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => setCurrent(Math.min(pics.length - 1, Math.floor(self.progress * pics.length))),
      })
    })
    return () => mm.revert()
  }, [pics.length])

  return (
    <div className={`stage ${className}`} ref={root} style={{ '--n': pics.length } as CSSProperties}>
      <div className="stage__pin">
        <div className="stage__side stage__side--left">{left}</div>
        <div className="stage__window" data-enter={eager ? 'open' : undefined}>
          <div className="stage__reel">
            {pics.map((p, i) => (
              <figure key={p.src} className={`stage__frame${i === current ? ' is-current' : ''}${p.whole ? ' stage__frame--whole' : ''}`}>
                <img
                  src={`${p.src}-800.webp`}
                  srcSet={`${p.src}-800.webp 800w, ${p.src}-1600.webp 1600w`}
                  sizes="(max-width: 768px) 72vw, 30vw"
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading={eager || i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={eager && i === 0 ? 'high' : 'auto'}
                />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="stage__side stage__side--right">{right}</div>
      </div>
    </div>
  )
}
