import { useRef } from 'react'
import { Download } from 'lucide-react'
import { content } from '../data/content'
import StaggeredMenu from './reactbits/StaggeredMenu'

const socialUrl = {
  instagram: (u) => `https://instagram.com/${u}`,
  tiktok: (u) => `https://tiktok.com/@${u}`,
  linkedin: (u) => (u.startsWith('http') ? u : `https://linkedin.com/in/${u}`),
  github: (u) => `https://github.com/${u}`,
  youtube: (u) => (u.startsWith('http') ? u : `https://youtube.com/@${u}`),
}
const socialName = { instagram: 'Instagram', tiktok: 'TikTok', linkedin: 'LinkedIn', github: 'GitHub', youtube: 'YouTube' }

export default function Navbar() {
  const mobileRef = useRef(null)

  const links = [
    ['home', 'Beranda'],
    ['about', 'Tentang'],
    ['skills', 'Keahlian'],
    ['education', 'Pendidikan'],
    ['projects', 'Proyek'],
    ...(content.certificates.length ? [['certificates', 'Sertifikat']] : []),
    ['contact', 'Kontak'],
  ]

  // Menu mobile: semua tautan + Unduh CV (dipindah ke menu kanan)
  const menuItems = [
    ...links.map(([id, label]) => ({ label, ariaLabel: `Ke bagian ${label}`, link: `#${id}` })),
    { label: 'Unduh CV', ariaLabel: 'Unduh CV', link: content.cv },
  ]
  const socialItems = Object.entries(content.socials)
    .filter(([, v]) => v)
    .map(([k, v]) => ({ label: socialName[k], link: socialUrl[k](v) }))

  // Tutup panel otomatis setelah salah satu menu diklik
  const onMenuClick = (e) => {
    if (e.target.closest('.sm-panel-item')) mobileRef.current?.querySelector('.sm-toggle')?.click()
  }

  return (
    <>
      {/* Desktop */}
      <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-slate-100 bg-white/80 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight" aria-label="Beranda">
            Zia<span className="text-accent">.</span>
          </a>

          <nav className="flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Navigasi utama">
            {links.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={`transition-colors hover:text-accent ${i === 0 ? 'text-ink' : ''}`}>
                {label}
              </a>
            ))}
          </nav>

          <a
            href={content.cv}
            download
            className="flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            <Download size={13} /> Unduh CV
          </a>
        </div>
      </header>

      {/* Mobile: React Bits StaggeredMenu */}
      <div ref={mobileRef} onClick={onMenuClick} className="mobile-menu md:hidden">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-16 border-b border-slate-100 bg-white/85 backdrop-blur-md" aria-hidden="true" />
        <StaggeredMenu
          isFixed
          position="right"
          colors={['#0b0f19', '#1f5fd1']}
          accentColor="#1f5fd1"
          logoUrl="/logo-zia.svg"
          menuButtonColor="#0b0f19"
          openMenuButtonColor="#0b0f19"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
        />
      </div>
    </>
  )
}
