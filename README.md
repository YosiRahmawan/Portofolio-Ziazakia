# Portofolio — Zia Zackia Rahma

Website portofolio pribadi Zia Zackia Rahma, mahasiswa S1 Sistem Informasi (Universitas Bina Sarana Informatika).

Repo: https://github.com/YosiRahmawan/Portofolio-Ziazakia

## Dokumen Proyek
| File | Isi |
|---|---|
| [PRD.md](PRD.md) | Tujuan, data konten, fitur, dan kriteria selesai |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Teknologi, struktur folder, alur data |
| [FORM-ISI-PORTOFOLIO.md](FORM-ISI-PORTOFOLIO.md) | Form pengumpulan data awal |
| [CV.pdf](CV.pdf) | CV sebagai sumber data |

## Teknologi
React 19, Vite, Tailwind CSS 4, GSAP (animasi dan parallax), dan komponen [React Bits](https://reactbits.dev) (SplitText, GradientASCII, ProfileCard, ScrollReveal, Crosshair, StaggeredMenu). Hosting di Vercel.

## Menjalankan di Komputer
Butuh Node.js LTS.

```bash
npm install
npm run dev
```

Buka http://localhost:5173.

```bash
npm run build     # hasil di folder dist/
npm run preview   # coba hasil build
```

## Mengubah Konten
Semua teks, kontak, skill, pendidikan, dan proyek ada di [src/data/content.js](src/data/content.js). Edit file itu saja.

- Foto profil: `public/img/profile.png`
- Logo sekolah dan kampus: `public/img/logo-sman1.webp`, `public/img/logo-ubsi.png`
- CV: `public/CV.pdf`
- Sertifikat: isi `certificates` di `content.js`; kalau kosong, bagiannya otomatis disembunyikan.
- Media sosial: kosongkan nilainya kalau tidak mau ditampilkan.

## Deploy
Setiap `git push` ke cabang `main` otomatis ter-deploy ulang oleh Vercel (preset Vite, root `./`).

## Yang Masih Ditunggu
- Kota/domisili dan keputusan soal sertifikat
- Detail proyek (screenshot, link)
- Gambar background dari Zia (sementara memakai latar ASCII)

## Kontak
- WhatsApp: +62 821-1515-2927
- Email: zackiarahmaz@gmail.com
- Instagram: [@ziazackiaa](https://instagram.com/ziazackiaa)
- TikTok: [ziazackyaa](https://tiktok.com/@ziazackyaa)
