import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Pic } from '../content'

gsap.registerPlugin(ScrollTrigger)

// Two sides held on screen while a reel of pictures runs up through the middle as
// the page scrolls. Used by the self intro and the cheer record. On a phone the
// hold is dropped and the pictures become a strip to swipe.
export function Stage({ left, right, pics, className = '', eager = false }: { left: ReactNode; right: ReactNode; pics: Pic[]; className?: string; eager?: boolean }) {
  const root = useRef<HTMLDivElement>(null)
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
    <div className={`stage ${className}`} ref={root}>
      <div className="stage__pin">
        <div className="stage__side stage__side--left">{left}</div>
        <div className="stage__window" data-enter={eager ? 'open' : undefined}>
          <div className="stage__reel" ref={reel}>
            {pics.map((p, i) => (
              <figure key={p.src} className="stage__frame">
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
