import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { content } from '../data/content'

const WORDS = ['Database', 'Data Analysis', 'MySQL', 'ERD & LRS', 'Sistem Informasi']

const Corner = ({ pos }) => (
  <span
    aria-hidden="true"
    className={`absolute h-6 w-6 border-slate-300 ${
      {
        tl: 'left-6 top-6 border-l border-t',
        tr: 'right-6 top-6 border-r border-t',
        bl: 'bottom-6 left-6 border-b border-l',
        br: 'bottom-6 right-6 border-b border-r',
      }[pos]
    }`}
  />
)

// Layar loading sebelum masuk website: logo, progres, kata berganti, bingkai & dekorasi di tepi,
// lalu tirai biru dan putih naik membuka halaman utama.
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const curtain = useRef(null)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Selalu mulai dari atas (jangan pulihkan posisi scroll lama)
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const counter = { v: 0 }
    const dur = reduce ? 0.4 : 2.6
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          onDone()
        },
      })
      tl.from('.pl-edge', { opacity: 0, duration: 0.6, stagger: 0.06 })
        .from('.pl-logo', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.pl-label', { opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.pl-track', { opacity: 0, duration: 0.4 }, '-=0.3')
        .to(counter, { v: 100, duration: dur, ease: 'power2.inOut', onUpdate: () => setPct(Math.round(counter.v)) })
        .to('.pl-bar', { scaleX: 1, duration: dur, ease: 'power2.inOut' }, '<')
        .to('.pl-orb', { scale: 1.25, duration: dur, ease: 'sine.inOut' }, '<')
        .to('.pl-content, .pl-edge', { opacity: 0, duration: 0.45, ease: 'power2.in' }, '+=0.2')
        // tirai: lapisan biru dulu, lalu lapisan putih menyusul
        .to(curtain.current, { yPercent: -100, duration: reduce ? 0.2 : 0.9, ease: 'power4.inOut' }, '-=0.1')
        .to(root.current, { yPercent: -100, duration: reduce ? 0.2 : 0.9, ease: 'power4.inOut' }, '-=0.72')
    }, root)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [onDone])

  const word = WORDS[Math.min(WORDS.length - 1, Math.floor((pct / 100) * WORDS.length))]

  return (
    <>
      {/* Lapisan biru di belakang tirai putih */}
      <div ref={curtain} className="fixed inset-0 z-[99] bg-accent" aria-hidden="true" />

      <div ref={root} className="fixed inset-0 z-[100] overflow-hidden bg-white" role="status" aria-live="polite" aria-label="Memuat portofolio">
        {/* Latar: grid halus + cahaya biru */}
        <div
          aria-hidden="true"
          className="pl-edge absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(circle at center, #000 25%, transparent 78%)',
            maskImage: 'radial-gradient(circle at center, #000 25%, transparent 78%)',
          }}
        />
        <div aria-hidden="true" className="pl-orb absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

        {/* Bingkai sudut */}
        <div className="pl-edge"><Corner pos="tl" /></div>
        <div className="pl-edge"><Corner pos="tr" /></div>
        <div className="pl-edge"><Corner pos="bl" /></div>
        <div className="pl-edge"><Corner pos="br" /></div>

        {/* Teks tepi */}
        <p className="pl-edge absolute left-14 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          {content.name}
        </p>
        <p className="pl-edge absolute right-14 top-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Portofolio © {new Date().getFullYear()}
        </p>
        <p className="pl-edge absolute bottom-6 left-14 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Sistem Informasi
        </p>
        <p className="pl-edge absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-300 sm:block">
          Scroll to explore
        </p>
        <p className="pl-edge absolute right-6 top-1/2 hidden translate-y-1/2 rotate-90 origin-right text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-300 sm:block">
          {word}
        </p>

        {/* Angka persen besar di pojok */}
        <div className="pl-edge absolute bottom-10 right-14 text-right">
          <span className="serif text-7xl tabular-nums leading-none sm:text-9xl">{String(pct).padStart(2, '0')}</span>
          <span className="serif text-2xl text-slate-400 sm:text-4xl">%</span>
        </div>

        {/* Tengah */}
        <div className="pl-content absolute inset-0 flex flex-col items-center justify-center">
          <div className="pl-logo text-6xl font-extrabold tracking-tight text-ink sm:text-7xl">
            Zia<span className="text-accent">.</span>
          </div>
          <p className="pl-label mt-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-500">Portofolio loading</p>
          <div className="pl-track mt-6 h-px w-48 bg-slate-200">
            <div className="pl-bar h-px origin-left bg-accent" style={{ transform: 'scaleX(0)' }} />
          </div>
          <p className="mt-4 h-4 text-xs font-medium text-accent">{word}</p>
        </div>
      </div>
    </>
  )
}
