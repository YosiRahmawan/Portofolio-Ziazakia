import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { content } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['home', 'Beranda'],
    ['about', 'Tentang'],
    ['skills', 'Keahlian'],
    ['education', 'Pendidikan'],
    ['projects', 'Proyek'],
    ...(content.certificates.length ? [['certificates', 'Sertifikat']] : []),
    ['contact', 'Kontak'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight" aria-label="Beranda">
          Zia<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex" aria-label="Navigasi utama">
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} className={`transition-colors hover:text-accent ${i === 0 ? 'text-ink' : ''}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={content.cv}
            download
            className="flex items-center gap-2 rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            <Download size={13} /> Unduh CV
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-slate-100 bg-white px-6 py-3 md:hidden" aria-label="Navigasi seluler">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-2 py-3 text-sm font-medium text-slate-700 hover:text-accent">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
