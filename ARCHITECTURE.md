# ARCHITECTURE — Website Portofolio Zia Zackia Rahma

## 1. Pendekatan
Website **single-page** berbasis **React + Vite**, tanpa backend. Tampilan mengacu pada desain referensi "Blue Bird": gradasi biru langit, kartu **glassmorphism**, teks watermark raksasa di latar, dan elemen utama di tengah. Ditambah animasi **GSAP**, efek **parallax**, dan elemen 3D ringan dengan **Three.js**.

## 2. Teknologi
| Lapisan | Pilihan |
|---|---|
| Framework | React 18 + Vite |
| Gaya | Tailwind CSS (plugin Vite) |
| Animasi | GSAP + ScrollTrigger (reveal, parallax, pin) |
| Komponen animasi | React Bits (disalin ke `src/components/reactbits/`) |
| 3D | Tidak dipakai lagi (desain baru bergaya PrimeCX: foto tanpa background + kartu melayang) |
| Font | Plus Jakarta Sans (isi) dan Instrument Serif italic (aksen), Google Fonts |
| Ikon | Font Awesome atau `lucide-react` |
| Hosting | GitHub Pages / Netlify / Vercel (hasil `npm run build`) |

Catatan: React Bits bukan paket npm biasa. Komponennya disalin ke proyek lewat CLI (`npx shadcn@latest add @react-bits/<Nama>`) atau salin manual dari reactbits.dev. Komponen yang dipertimbangkan: SplitText, BlurText, CountUp, Aurora/Orb (latar), TiltedCard, SpotlightCard.

## 3. Struktur Folder
```
Portofolio-Ziazakia/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── CV.pdf                 # unduhan CV
│   └── img/                   # foto profil, gambar proyek, sertifikat
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # Tailwind + variabel tema + kelas .glass
│   ├── data/content.js        # SEMUA isi konten (nama, kontak, skill, proyek)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx           # watermark + objek 3D + kartu kaca
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx   # tampil hanya jika data ada
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── GlassCard.jsx
│   │   ├── Scene3D.jsx        # Three.js (lazy-loaded)
│   │   └── reactbits/         # komponen React Bits yang dipakai
│   └── hooks/useParallax.js   # GSAP ScrollTrigger + gerak mouse
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
  name: "Zia Zackia Rahma",
  title: "Mahasiswa D3/S1 Sistem Informasi",
  contact: { phone: "+6282115152927", email: "zackiarahmaz@gmail.com" },
  socials: { instagram: "ziazackiaa", tiktok: "ziazackyaa" },
  skills: ["Data Analysis", "Microsoft Office", "MySQL Database", "Kerja sama tim"],
  projects: [],
  certificates: [],   // kosong = bagian sertifikat disembunyikan
};
```

## 5. Desain dan Efek
- **Referensi:** landing page "PrimeCX" (latar putih, grid, judul besar dengan kata italic berwarna, foto di tengah dengan kartu melayang).
- **Warna:** putih, biru almamater `#1f5fd1` (aksen), dan hitam `#0b0f19` (teks).
- **Kartu kaca:** kelas `.card` (putih semi-transparan, `backdrop-filter: blur(12px)`, bayangan lembut).
- **Foto:** `public/img/profile.png` (background merah sudah dihapus; asli di `profile-original.png`).
- **Parallax:** GSAP ScrollTrigger (`scrub`) per lapisan, ditambah gerak halus mengikuti kursor di hero.
- **Reveal:** judul dan kartu muncul saat scroll (SplitText/BlurText dan `gsap.from`).
- **3D:** satu objek Three.js (mis. bentuk kaca melayang) yang bergerak mengikuti scroll dan mouse. Dimuat dengan `React.lazy` agar halaman awal tetap cepat.
- Warna biru menggantikan usulan navy-kuning dari CV, mengikuti referensi.

## 6. Performa, Aksesibilitas, SEO
- Scene 3D di-lazy-load, DPR dibatasi, dan dimatikan di perangkat lemah.
- Hormati `prefers-reduced-motion`: animasi GSAP, parallax, dan 3D dikurangi atau dimatikan.
- Teks putih di atas biru muda berisiko kontras rendah; pakai bayangan teks atau lapisan gelap tipis agar memenuhi WCAG AA.
- `backdrop-filter` berat di HP lama; sediakan fallback latar solid.
- Gambar dikompres, `alt` diisi, meta description dan Open Graph ditambahkan.

## 7. Keamanan dan Privasi
- Tanpa server dan database.
- Hanya data yang disetujui Zia yang ditampilkan (nomor telepon dan email bersifat publik).
- Tautan eksternal memakai `rel="noopener noreferrer"`.

## 8. Build dan Deployment
```bash
npm install
npm run dev      # pengembangan
npm run build    # hasil di folder dist/
```
Unggah `dist/` ke Netlify/Vercel, atau pakai GitHub Pages.

## 9. Prasyarat
Node.js LTS (belum terpasang di komputer ini saat dokumen ini ditulis).
