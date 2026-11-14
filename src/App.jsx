import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import { About, Skills, Education, Projects, Certificates, Contact, Footer } from './components/Sections'

export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready && <Preloader onDone={onDone} />}
      <Navbar />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
