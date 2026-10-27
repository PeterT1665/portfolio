import { useEffect } from 'react'
import { featured } from './content'
import { startPing } from './lib/serverStatus'
import { useMotion } from './lib/motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Library } from './components/Library'
import { About } from './components/About'
import { Cheer } from './components/Cheer'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Three pages: home, /projects with every project, and /journey with Peter's story.
// No router needed.
export function App() {
  const path = location.pathname.replace(/\/+$/, '')
  if (path === '/projects') return <LibraryPage />
  if (path === '/journey') return <JourneyPage />
  return <Home />
}

function Home() {
  // Wake every demo server as soon as the page opens.
  useEffect(() => {
    featured.forEach((p) => startPing(p.name, p.status))
  }, [])
  useMotion(true)

  return (
    <>
      <a className="skip" href="#main">
        Skip to the projects
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Cheer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function LibraryPage() {
  useEffect(() => {
    document.title = "Everything I've built · Peter Trieu"
    featured.forEach((p) => startPing(p.name, p.status))
  }, [])
  useMotion(false)

  return (
    <>
      <a className="skip" href="#main">
        Skip to the list
      </a>
      <Header />
      <main id="main" className="libpage">
        <Library page />
      </main>
      <Footer />
    </>
  )
}

function JourneyPage() {
  useEffect(() => {
    document.title = 'My story · Peter Trieu'
  }, [])
  useMotion(false)

  return (
    <>
      <a className="skip" href="#main">
        Skip to the story
      </a>
      <Header />
      <main id="main" className="journey">
        <About />
      </main>
      <Footer />
    </>
  )
}
