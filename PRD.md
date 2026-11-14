# PRD — Website Portofolio Zia Zackia Rahma

## 1. Ringkasan
Website portofolio pribadi satu halaman (single page) untuk **Zia Zackia Rahma**, mahasiswa S1 Sistem Informasi, untuk memperkenalkan diri, keahlian, dan proyek kepada calon pemberi kerja, pihak magang, dan relasi.

Status: **sudah dibangun dan di-deploy lewat Vercel.** Kode ada di https://github.com/YosiRahmawan/Portofolio-Ziazakia.

## 2. Tujuan
- Menampilkan profil dan keahlian secara profesional.
- Memudahkan orang menghubungi (WhatsApp, email) dan membuka media sosial.
- Menyediakan CV yang bisa diunduh.

## 3. Target Pengguna
- Rekruter / HR dan perusahaan untuk magang atau kerja.
- Dosen dan teman kuliah.
- Klien freelance (jika ada).

## 4. Data Konten

### Sudah terisi
| Bagian | Isi |
|---|---|
| Nama | Zia Zackia Rahma |
| Title | Mahasiswa S1 Sistem Informasi |
| Profil | Mahasiswa S1 Sistem Informasi yang tertarik dengan dunia teknologi dan pengembangan sistem. Senang belajar hal baru, mudah beradaptasi, dan mampu bekerja sama dalam tim. |
| Telepon / WA | +62 821-1515-2927 |
| Email | zackiarahmaz@gmail.com |
| Instagram | @ziazackiaa |
| TikTok | ziazackyaa |
| Pendidikan | Universitas Bina Sarana Informatika, S1 Sistem Informasi, 2024–sekarang. SMAN 1 Cikatomas, Jurusan IPA, lulus 2023 (lengkap dengan logo) |
| Keahlian | Data Analysis, Microsoft Office, MySQL Database, Kerja Sama Tim |
| Proyek | Sistem Perpustakaan; Perancangan Database SQL; ERD, LRS & Relasi Tabel |
| Foto | Foto profil tanpa background (`public/img/profile.png`) |
| CV | `public/CV.pdf` |

### Belum ada (menunggu dari Zia)
- Kota/domisili dan tanggal lahir (opsional).
- LinkedIn, GitHub, YouTube (kosong = tidak ditampilkan).
- Kegiatan SMK / organisasi (jika ada).
- Sertifikat: ditampilkan atau tidak? Jika ya, file dan detailnya.
- Detail proyek yang lebih lengkap (screenshot, link).
- Gambar background kiriman Zia (latar ASCII di hero sementara dipakai sebagai pengganti).

## 5. Fitur
1. **Layar loading** sebelum masuk: logo "Zia.", progres, kata berganti, bingkai dekoratif, lalu tirai biru-putih naik.
2. **Navbar** tetap di atas (desktop). Di HP memakai menu samping **StaggeredMenu** dengan tombol Unduh CV di dalam menu.
3. **Hero** dengan efek mengetik pada judul dan kalimat pengantar, foto tanpa background, kartu melayang, dan garis bidik (crosshair) yang hanya aktif di hero. Di HP foto dan kartu disembunyikan agar tidak menutupi teks.
4. **Tentang Saya**: ProfileCard dan teks yang muncul perlahan saat di-scroll.
5. **Keahlian**: kartu dengan ikon.
6. **Pendidikan**: kartu dengan logo sekolah dan kampus.
7. **Proyek**: kartu proyek dengan ikon berbeda untuk tiap proyek.
8. **Sertifikat** (opsional, tampil hanya jika ada datanya).
9. **Kontak** bergaya "CLEO": tanpa kartu, email besar, tombol WhatsApp dan Unduh CV, ikon media sosial, dan bagian hitam "Ayo bekerja sama".
10. **Footer**.

## 6. Kebutuhan Non-Fungsional
- Responsif (HP, tablet, desktop).
- Cepat dimuat; gambar dikompres.
- Aksesibel: kontras warna cukup, teks alternatif gambar, navigasi keyboard, dan menghormati pengaturan "kurangi gerakan" di perangkat.
- Bahasa Indonesia.
- Hosting gratis (Vercel).

## 7. Arah Desain
- Referensi: landing page "PrimeCX" (latar putih, grid, judul besar dengan kata serif miring berwarna, foto di tengah dengan kartu melayang) dan halaman kontak "CLEO".
- Warna diambil dari almamater: **biru `#1f5fd1`** (aksen), **hitam** (teks), **putih** (latar).
- Font: Plus Jakarta Sans (isi) dan Instrument Serif miring (aksen).
- Animasi: GSAP (parallax dan reveal) dan komponen React Bits (SplitText, GradientASCII, ProfileCard, ScrollReveal, Crosshair, StaggeredMenu). Three.js tidak dipakai lagi.

## 8. Kriteria Selesai
- Semua bagian tampil dan datanya sesuai CV.
- Tombol WhatsApp, email, Instagram, TikTok, dan unduh CV berfungsi.
- Tampilan rapi dari 360px sampai 1440px.
- Skor Lighthouse (performa, aksesibilitas) minimal 90 (belum diukur).

## 9. Di Luar Cakupan
Backend, login, CMS, blog, form kirim pesan berbasis server.

## 10. Pertanyaan Terbuka
Lihat bagian "Belum ada" di atas.
