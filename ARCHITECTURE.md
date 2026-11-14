# ARCHITECTURE — Website Portofolio Zia Zackia Rahma

## 1. Pendekatan
Website **single-page** berbasis **React + Vite**, tanpa backend. Semua konten disimpan di satu file data. Desain mengacu pada landing page "PrimeCX" (putih, grid, judul serif miring berwarna, foto dengan kartu melayang) dan halaman kontak "CLEO", dengan warna almamater (biru, hitam, putih).

## 2. Teknologi
| Lapisan | Pilihan |
|---|---|
| Framework | React 19 + Vite |
| Gaya | Tailwind CSS 4 (plugin Vite) |
| Animasi | GSAP + ScrollTrigger (reveal, parallax, tirai loading) |
| Komponen animasi | React Bits (disalin ke `src/components/reactbits/`): SplitText, GradientASCII, ProfileCard, ScrollReveal, Crosshair, StaggeredMenu |
| Paket tambahan | `@gsap/react`, `@hugeicons/react`, `@hugeicons/core-free-icons` (dibutuhkan komponen React Bits), `lucide-react` (ikon) |
| Font | Plus Jakarta Sans (isi) dan Instrument Serif miring (aksen), Google Fonts |
| Hosting | Vercel (otomatis deploy dari GitHub) |

Three.js sempat dipakai lalu dihapus saat desain berganti.

## 3. Struktur Folder
```
Portofolio-Ziazakia/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── CV.pdf                  # unduhan CV
│   ├── logo-zia.svg            # logo untuk menu mobile
│   └── img/                    # profile.png, logo-sman1.webp, logo-ubsi.png
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # susunan halaman + layar loading
│   ├── index.css               # Tailwind, tema, kelas .card, kursor mengetik, penyesuaian menu
│   ├── data/content.js         # SEMUA isi konten
│   └── components/
│       ├── Preloader.jsx       # layar loading + tirai
│       ├── Navbar.jsx          # navbar desktop + StaggeredMenu di HP
│       ├── Hero.jsx            # efek mengetik, foto, kartu, crosshair, latar ASCII
│       ├── Reveal.jsx          # pembungkus section (reveal + parallax)
│       ├── Sections.jsx        # About, Skills, Education, Projects, Certificates, Contact, Footer
│       └── reactbits/          # komponen React Bits yang dipakai
├── README.md
├── PRD.md
├── ARCHITECTURE.md
├── FORM-ISI-PORTOFOLIO.md
└── CV.pdf
```

## 4. Alur Data
Semua teks dan link ada di `src/data/content.js`. Komponen membaca data itu, jadi mengubah nomor telepon, menambah proyek, atau menyembunyikan sertifikat cukup lewat satu file.

```js
export const content = {
  name, title, intro, about, photo, cv,
  contact: { phone, whatsapp, email },
  socials: { instagram, tiktok, linkedin, github, youtube }, // kosong = disembunyikan
  skills: [{ name, desc, icon }],
  education: [{ school, detail, year, logo }],
  projects: [{ icon, title, desc, tools }],
  certificates: [],   // kosong = bagian sertifikat disembunyikan
}
```

## 5. Alur Halaman
`Preloader` tampil lebih dulu. Saat selesai (atau setelah pengaman 9 detik), `ready` bernilai true, lalu `Hero` memulai efek mengetik dan animasi masuk. Urutan bagian: Hero → Tentang → Keahlian → Pendidikan → Proyek → Sertifikat (opsional) → Kontak → Footer.

## 6. Desain dan Efek
- **Warna:** biru `#1f5fd1` (aksen), hitam `#0b0f19` (teks), putih (latar). Variabel di `@theme` pada `index.css`.
- **Kartu:** kelas `.card` (putih semi-transparan, `backdrop-filter: blur(12px)`, bayangan lembut).
- **Hero:** judul dan kalimat diketik dengan hook `useTyped` (bukan React Bits, karena ada bagian berwarna dan bergaya beda). Foto tanpa background dan kartu melayang bergerak parallax saat scroll dan mengikuti mouse.
- **Crosshair** berada di dalam hero, jadi hilang saat scroll ke bawah. Hanya aktif di perangkat dengan mouse.
- **Tentang:** ProfileCard dan teks ScrollReveal (samar lalu makin jelas saat scroll).
- **Mobile:** foto dan kartu hero disembunyikan; menu memakai StaggeredMenu dengan Unduh CV di dalamnya.
- **Kontak:** tipografi besar tanpa kartu, bagian hitam di bawah.

## 7. Performa, Aksesibilitas, SEO
- Latar ASCII baru dipasang setelah layar loading selesai.
- Menghormati `prefers-reduced-motion`: animasi dikurangi dan teks langsung tampil.
- `backdrop-filter` punya fallback bila tidak didukung browser.
- Gambar diberi `alt` dan `loading="lazy"` bila perlu; ada meta description dan Open Graph.

## 8. Keamanan dan Privasi
- Tanpa server dan database.
- Hanya data yang disetujui Zia yang ditampilkan (nomor telepon dan email bersifat publik).
- Tautan eksternal memakai `rel="noopener noreferrer"`.
- Commit memakai alamat noreply GitHub, bukan email pribadi.

## 9. Build dan Deployment
```bash
npm install
npm run dev      # pengembangan
npm run build    # hasil di folder dist/
```
Vercel membaca repo GitHub (preset Vite, root `./`); setiap push ke `main` otomatis ter-deploy.

## 10. Prasyarat
Node.js LTS dan Git.
