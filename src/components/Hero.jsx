import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Database, Mail, FolderOpen, ArrowRight } from 'lucide-react'
import { content } from '../data/content'
import GradientASCII from './reactbits/GradientASCII'
import Crosshair from './reactbits/Crosshair'

gsap.registerPlugin(ScrollTrigger)

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const H_A = 'Halo, saya '
const H_B = 'Zia Zackia'
const H_C = ' Rahma'
const H_LEN = H_A.length + H_B.length + H_C.trimStart().length + 1 // +1 untuk spasi sebelum "Rahma"

// Hitungan huruf yang sudah "diketik"
function useTyped(total, speed, delay, start) {
  const [n, setN] = useState(() => (reduced() ? total : 0))
  useEffect(() => {
    if (!start || n >= total) return
    const id = setTimeout(() => setN((v) => v + 1), n === 0 ? delay : speed + Math.random() * 25)
    return () => clearTimeout(id)
  }, [n, start, total, speed, delay])
  return n
}

// Menampilkan potongan teks yang sudah diketik; sisanya tetap memakan tempat (tak terlihat)
function Typed({ text, offset, count, cursor, className = '' }) {
  const shown = Math.max(0, Math.min(text.length, count - offset))
  const active = cursor && count >= offset && count <= offset + text.length && (shown < text.length || count - offset === text.length)
  return (
    <span className={className}>
      {text.slice(0, shown)}
      {active && <span className="type-cursor" />}
      <span className="invisible">{text.slice(shown)}</span>
    </span>
  )
}

export default function Hero({ ready = true }) {
  const root = useRef(null)
  const intro = useRef(null)
  const n1 = useTyped(H_LEN, 70, 500, ready)
  const n2 = useTyped(content.intro.length, 16, 250, ready && n1 >= H_LEN)

  useLayoutEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      // Mulai tersembunyi; baru diputar setelah layar loading selesai
      intro.current = gsap
        .timeline({ paused: true, defaults: { ease: 'power3.out' } })
        .from('.h-fade', { y: 22, opacity: 0, duration: 0.7, delay: 0.6 })
        .from('.h-photo', { y: 80, opacity: 0, duration: 1.1 }, '-=0.6')
        .from('.h-card', { scale: 0.85, opacity: 0, duration: 0.7, stagger: 0.15 }, '-=0.6')

      // Parallax saat scroll: tiap lapisan beda kecepatan
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.p-grid', { yPercent: 25, scrollTrigger: st })
      gsap.to('.p-text', { yPercent: -10, scrollTrigger: st })
      gsap.to('.p-photo', { yPercent: -8, scrollTrigger: st })
      gsap.to('.p-card-a', { yPercent: -60, scrollTrigger: st })
      gsap.to('.p-card-b', { yPercent: -35, scrollTrigger: st })
      gsap.to('.p-card-c', { yPercent: -80, scrollTrigger: st })

      // Parallax mengikuti mouse
      const onMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        gsap.to('.m-photo', { x: x * 10, y: y * 6, duration: 1, ease: 'power2.out' })
        gsap.to('.m-card-a', { x: x * -22, y: y * -10, duration: 1.2, ease: 'power2.out' })
        gsap.to('.m-card-b', { x: x * 26, y: y * -14, duration: 1.2, ease: 'power2.out' })
        gsap.to('.m-card-c', { x: x * -16, y: y * 12, duration: 1.2, ease: 'power2.out' })
      }
      window.addEventListener('mousemove', onMove)
      return () => window.removeEventListener('mousemove', onMove)
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (ready) intro.current?.play()
  }, [ready])

  return (
    <section id="home" ref={root} className="relative overflow-hidden pb-0 pt-28">
      {/* Latar grid + glow */}
      {/* Garis bidik hanya di layar utama (hilang saat di-scroll ke bawah) */}
      {window.matchMedia('(pointer: fine)').matches && (
        <Crosshair containerRef={root} color="#1f5fd1" opacity={0.45} thickness={1} lineStyle="dashed" showCoordinates={false} targetEffect="lock" smoothing={0.25} />
      )}

      {/* Latar ASCII (React Bits). Bisa diganti dengan background kiriman Zia. */}
      <div
        className="p-grid absolute inset-0 opacity-25"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, #000 35%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, #000 35%, transparent 90%)',
        }}
        aria-hidden="true"
      >
        {ready && <GradientASCII lightMode shape="horizon" cellSize={20} glyphOpacity={0.5} gradientOpacity={0.5} flicker={0.1} grain={0} speed={0.6} mouseInteraction={false} />}
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[640px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="p-text">
          {/* Efek menulis: judul diketik dulu, lalu kalimat pengantar */}
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-7xl"
            aria-label={`${H_A}${H_B}${H_C}`}
          >
            <span aria-hidden="true">
              <Typed text={H_A} offset={0} count={n1} cursor={n1 < H_LEN} />
              <Typed text={H_B} offset={H_A.length} count={n1} cursor={n1 < H_LEN} className="serif px-1 text-5xl sm:text-7xl md:text-8xl" />
              <br className="hidden sm:inline" />
              <Typed text={H_C.trimStart()} offset={H_A.length + H_B.length + 1} count={n1} cursor={n1 < H_LEN} />
            </span>
          </h1>

          <p className="mx-auto mb-10 mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg" aria-label={content.intro}>
            <span aria-hidden="true">
              <Typed text={content.intro} offset={0} count={n2} cursor={n1 >= H_LEN && n2 < content.intro.length} />
            </span>
          </p>

          <div className="h-fade mb-16 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-accent-dark"
            >
              Lihat Proyek
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Hubungi saya
            </a>
          </div>
        </div>

        {/* Foto + kartu melayang */}
        <div className="relative mx-auto flex h-[170px] w-full max-w-3xl items-end justify-center sm:h-[500px]">
          {/* Kartu 1 */}
          <div className="p-card-a absolute left-0 top-10 z-30 hidden sm:left-4 sm:block">
            <div className="m-card-a h-card">
              <div className="card float-slow w-60 rounded-2xl p-4 text-left">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-bold">
                    <Database size={14} className="text-accent" /> MySQL Database
                  </span>
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-accent">SQL</span>
                </div>
                <p className="mb-2.5 text-[11px] text-slate-500">ERD, LRS & relasi tabel</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Kartu 2 */}
          <div className="p-card-b absolute left-0 right-0 top-2 z-30 mx-auto w-fit sm:left-auto sm:right-2 sm:top-20 sm:mx-0">
            <div className="m-card-b h-card">
              <div className="card float-fast w-60 rounded-2xl p-4 text-left sm:w-72">
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    Z
                  </div>
                  <div>
                    <span className="block text-xs font-bold">{content.firstName} · Mahasiswa SI</span>
                    <span className="text-[10px] text-slate-400">Siap berkolaborasi</span>
                  </div>
                </div>
                <p className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs leading-snug text-slate-600">
                  "Senang belajar hal baru dan bekerja sama dalam tim."
                </p>
              </div>
            </div>
          </div>

          {/* Kartu 3 */}
          <div className="p-card-c absolute bottom-24 left-2 z-30 hidden sm:left-12 sm:block">
            <div className="m-card-c h-card">
              <div className="card float-slow flex w-56 items-center gap-3 rounded-2xl p-3.5 text-left">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <FolderOpen size={16} />
                </span>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-500">Pengalaman proyek</span>
                  <span className="flex items-center gap-2 text-lg font-extrabold">
                    {content.projects.length} proyek
                    <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Foto tanpa background */}
          {/* Foto disembunyikan di HP supaya tidak menutupi teks */}
          <div className="p-photo relative z-20 hidden sm:block">
            <div className="h-photo m-photo">
              <img
                src={content.photo}
                alt={`Foto ${content.name}`}
                className="h-[390px] w-auto select-none object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)] sm:h-[480px]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, #000 80%, transparent 100%)',
                }}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
