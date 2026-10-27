import { useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featured } from './content'
import { startPing } from './lib/serverStatus'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Library } from './components/Library'
import { About } from './components/About'
import { Cheer } from './components/Cheer'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export function App() {
  // Wake every demo server as soon as the page opens.
  useEffect(() => {
    featured.forEach((p) => startPing(p.name, p.status))
  }, [])

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Arrival: the two halves of the name slide in from their own edges, the
      // window opens, the sentence rises. Settled by about 1.2 s.
      const t = gsap.timeline({ defaults: { duration: 0.9, ease: 'expo.out' } })
      t.from('[data-enter="left"]', { xPercent: -30, opacity: 0 }, 0.1)
        .from('[data-enter="right"]', { xPercent: 30, opacity: 0 }, 0.18)
        .from('[data-enter="open"]', { clipPath: 'inset(50% 0 50% 0)', duration: 1, ease: 'power4.inOut' }, 0.15)
        .from('[data-enter="rise"]', { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' }, 0.45)

      // Each section's parts rise in turn as it comes into view, once.
      gsap.utils.toArray<HTMLElement>('[data-rise-group]').forEach((group) => {
        gsap.from(group.querySelectorAll('[data-rise]'), {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.07,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })
      gsap.utils.toArray<HTMLElement>('[data-rise]').forEach((el) => {
        if (el.closest('[data-rise-group]')) return
        gsap.from(el, { y: 28, opacity: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })

      // Pictures drift slowly as they pass.
      gsap.utils.toArray<HTMLElement>('.photo').forEach((el) => {
        gsap.fromTo(el, { yPercent: 4 }, { yPercent: -4, ease: 'none', scrollTrigger: { trigger: el, scrub: true } })
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <>
      <a className="skip" href="#work">
        Skip to the projects
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Library />
        <About />
        <Cheer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
