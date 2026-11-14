import { useState } from 'react'
import { ArrowRight, ArrowUpRight, GraduationCap, FolderOpen, Download, BarChart3, FileSpreadsheet, Database, Users, Library, Network } from 'lucide-react'
import Reveal from './Reveal'
import { content } from '../data/content'
import SplitText from './reactbits/SplitText'
import ProfileCard from './reactbits/ProfileCard'
import ScrollReveal from './reactbits/ScrollReveal'

const Title = ({ kicker, children }) => (
  <div className="reveal mb-10">
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">{kicker}</p>
    <SplitText
      text={children}
      tag="h2"
      className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
      textAlign="left"
      splitType="words"
      effect="blur"
      delay={70}
      rootMargin="0px"
      threshold={0.3}
    />
  </div>
)

const Orb = ({ className }) => (
  <div className={`drift pointer-events-none absolute rounded-full bg-blue-100/60 blur-3xl ${className}`} />
)

const skillIcons = { chart: BarChart3, office: FileSpreadsheet, database: Database, team: Users }
// Ikon proyek: tiap proyek beda
const projectIcons = { library: Library, database: Database, network: Network }

// Logo institusi; kalau file logo belum ada, tampil ikon topi wisuda
function Logo({ src, alt }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-accent">
        <GraduationCap size={26} />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
      className="h-16 w-16 shrink-0 rounded-2xl object-contain"
    />
  )
}

const wrap = 'relative z-10 mx-auto max-w-6xl px-6 py-24'
const iconBox = 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-accent'

export function About() {
  return (
    <Reveal id="about" className="bg-slate-50/70">
      <Orb className="-left-20 top-10 h-72 w-72" />
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-5`}>
        <div className="reveal lg:col-span-2">
          <div className="mx-auto flex max-w-xs justify-center">
            <ProfileCard
              avatarUrl={content.photo}
              miniAvatarUrl={content.photo}
              name={content.name}
              title={content.title}
              handle={content.socials.instagram}
              status="Online"
              statusColor="#1f5fd1"
              contactText="Hubungi"
              theme="light"
              backdropColor="#1f5fd1"
              holo={0.3}
              glare={0.35}
              onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <Title kicker="Tentang saya">
            Cerita singkat
          </Title>
          {/* Teks sudah ada sejak awal, tapi samar; makin jelas saat di-scroll (React Bits ScrollReveal) */}
          <ScrollReveal
            baseOpacity={0.14}
            enableBlur
            blurStrength={2}
            baseRotation={0}
            stagger={0.04}
            smoothing={0.8}
            wordAnimationEnd="bottom 55%"
            containerClassName="!my-0"
            textClassName="text-xl! sm:text-2xl! font-semibold! leading-relaxed! text-ink"
          >
            {content.about}
          </ScrollReveal>
          {content.city && <p className="mt-4 text-sm text-slate-600">📍 {content.city}</p>}
        </div>
      </div>
    </Reveal>
  )
}

export function Skills() {
  return (
    <Reveal id="skills">
      <Orb className="-right-20 top-20 h-80 w-80" />
      <div className={wrap}>
        <Title kicker="Keahlian">Yang saya kuasai</Title>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.skills.map((s, i) => (
            <div key={s.name} className="reveal card card-hover rounded-3xl p-6">
              <div className="flex items-start justify-between">
                <span className="serif text-5xl">0{i + 1}</span>
                {(() => {
                  const Icon = skillIcons[s.icon] || BarChart3
                  return (
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                      <Icon size={22} />
                    </span>
                  )
                })()}
              </div>
              <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Education() {
  return (
    <Reveal id="education" className="bg-slate-50/70">
      <div className={wrap}>
        <Title kicker="Pendidikan">Perjalanan belajar</Title>
        <div className="grid gap-5 md:grid-cols-2">
          {content.education.map((e) => (
            <div key={e.school} className="reveal card card-hover flex gap-5 rounded-3xl p-7">
              <Logo src={e.logo} alt={`Logo ${e.school}`} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{e.year}</p>
                <h3 className="mt-1 text-lg font-bold">{e.school}</h3>
                <p className="text-sm text-slate-500">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <Reveal id="projects">
      <Orb className="left-1/3 top-10 h-72 w-72" />
      <div className={wrap}>
        <Title kicker="Proyek">Karya & pengalaman</Title>
        <div className="grid gap-5 md:grid-cols-3">
          {content.projects.map((p) => (
            <article key={p.title} className="reveal card card-hover flex flex-col rounded-3xl p-7">
              <div className={`${iconBox} mb-5`}>
                {(() => {
                  const Icon = projectIcons[p.icon] || FolderOpen
                  return <Icon size={22} />
                })()}
              </div>
              <h3 className="text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-accent">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Lihat <ArrowUpRight size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Certificates() {
  if (!content.certificates.length) return null
  return (
    <Reveal id="certificates" className="bg-slate-50/70">
      <div className={wrap}>
        <Title kicker="Sertifikat">Pencapaian</Title>
        <div className="grid gap-5 md:grid-cols-3">
          {content.certificates.map((c) => (
            <article key={c.title} className="reveal card card-hover overflow-hidden rounded-3xl">
              {c.image && <img src={c.image} alt={c.title} loading="lazy" className="h-44 w-full object-cover" />}
              <div className="p-6">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-sm text-slate-500">
                  {c.issuer} · {c.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

const socialUrl = {
  instagram: (u) => `https://instagram.com/${u}`,
  tiktok: (u) => `https://tiktok.com/@${u}`,
  linkedin: (u) => (u.startsWith('http') ? u : `https://linkedin.com/in/${u}`),
  github: (u) => `https://github.com/${u}`,
  youtube: (u) => (u.startsWith('http') ? u : `https://youtube.com/@${u}`),
}
const socialName = { instagram: 'Instagram', tiktok: 'TikTok', linkedin: 'LinkedIn', github: 'GitHub', youtube: 'YouTube' }


const socialShort = { instagram: 'IG', tiktok: 'TT', linkedin: 'in', github: 'GH', youtube: 'YT' }

// Kontak bergaya "CLEO": tanpa card, tipografi besar, bagian hitam di bawah.
export function Contact() {
  const { contact, socials } = content
  const active = Object.entries(socials).filter(([, v]) => v)
  const heading = 'text-sm font-extrabold uppercase tracking-wide text-ink'
  return (
    <Reveal id="contact">
      {/* Atas: judul */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-24">
        <Title kicker="Kontak">Hubungi saya</Title>
        <p className="reveal max-w-md text-slate-600">
          Punya proyek atau peluang magang? Jangan ragu untuk menghubungi, mari mulai percakapan.
        </p>
      </div>

      {/* Tengah: abu-abu muda */}
      <div className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr_auto]">
          <div className="reveal">
            <h3 className={heading}>Hubungi langsung</h3>
            <p className="mt-2 max-w-xs text-sm text-slate-600">
              Ingin terhubung atau punya pertanyaan? Kirim email, saya akan membalas secepatnya.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 block break-words text-2xl font-extrabold leading-tight tracking-tight transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
          </div>

          <div className="reveal">
            <h3 className={heading}>Kirim pesan</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Lebih cepat lewat WhatsApp. Ceritakan kebutuhanmu dan kita bahas bersama.
            </p>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              WhatsApp <ArrowRight size={15} />
            </a>

            <h3 className={`${heading} mt-10`}>Curriculum Vitae</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600">Unduh CV untuk melihat profil lengkap saya.</p>
            <a
              href={content.cv}
              download
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Unduh CV <Download size={15} />
            </a>
          </div>

          <div className="reveal flex gap-3 md:flex-col">
            {active.map(([key, val]) => (
              <a
                key={key}
                href={socialUrl[key](val)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialName[key]}
                title={socialName[key]}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xs font-bold transition hover:bg-accent hover:text-white"
              >
                {socialShort[key]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bawah: hitam */}
      <div className="bg-ink text-center">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
          <h2 className="reveal text-[13vw] font-extrabold uppercase leading-[0.95] tracking-tight text-slate-200 sm:text-8xl lg:text-9xl">
            Ayo bekerja
            <br />
            sama.
          </h2>
          <div className="reveal mx-auto mt-14 flex max-w-2xl items-center gap-5 text-slate-300">
            <span className="whitespace-nowrap text-sm sm:text-base">Punya proyek?</span>
            <span className="h-px flex-1 bg-slate-500" />
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold hover:text-white sm:text-base">
              Say hello <ArrowRight size={16} />
            </a>
          </div>
          <nav className="reveal mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-300" aria-label="Tautan kontak">
            <a href={`mailto:${contact.email}`} className="hover:text-white">E-mail</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            {active.map(([key, val]) => (
              <a key={key} href={socialUrl[key](val)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {socialName[key]}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </Reveal>
  )
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink py-8 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} {content.name}. All rights reserved.
    </footer>
  )
}
