import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Layar loading sebelum masuk website: logo, tulisan "PORTOFOLIO LOADING", garis progres,
// lalu tirai naik membuka halaman utama.
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Selalu mulai dari atas (jangan pulihkan posisi scroll lama)
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const counter = { v: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          onDone()
        },
      })
      tl.from('.pl-logo', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' })
        .from('.pl-label', { opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.pl-track', { opacity: 0, duration: 0.4 }, '-=0.3')
        .to(counter, { v: 100, duration: reduce ? 0.4 : 2.2, ease: 'power2.inOut', onUpdate: () => setPct(Math.round(counter.v)) })
        .to('.pl-bar', { scaleX: 1, duration: reduce ? 0.4 : 2.2, ease: 'power2.inOut' }, '<')
        .to('.pl-content', { opacity: 0, y: -12, duration: 0.45, ease: 'power2.in' }, '+=0.2')
        .to(root.current, { yPercent: -100, duration: reduce ? 0.2 : 0.9, ease: 'power4.inOut' }, '-=0.1')
    }, root)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [onDone])

  return (
    <div ref={root} className="fixed inset-0 z-[100] flex items-center justify-center bg-white" role="status" aria-live="polite" aria-label="Memuat portofolio">
      <div className="pl-content flex flex-col items-center">
        <div className="pl-logo text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
          Zia<span className="text-accent">.</span>
        </div>
        <p className="pl-label mt-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-500">Portofolio loading</p>
        <div className="pl-track mt-5 h-px w-40 bg-slate-200">
          <div className="pl-bar h-px origin-left bg-ink" style={{ transform: 'scaleX(0)' }} />
        </div>
        <p className="mt-3 text-[11px] font-medium tabular-nums text-slate-400">{pct}%</p>
      </div>
    </div>
  )
}
