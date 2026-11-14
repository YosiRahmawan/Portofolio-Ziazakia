# PRD — Website Portofolio Zia Zackia Rahma

## 1. Ringkasan
Website portofolio pribadi satu halaman (single page) untuk **Zia Zackia Rahma**, mahasiswa D3/S1 Sistem Informasi, untuk memperkenalkan diri, keahlian, dan proyek kepada calon pemberi kerja, pihak magang, dan relasi.

## 2. Tujuan
- Menampilkan profil dan keahlian secara profesional.
- Memudahkan orang menghubungi (WhatsApp, email) dan membuka media sosial.
- Menyediakan CV yang bisa diunduh.

## 3. Target Pengguna
- Rekruter / HR dan perusahaan untuk magang atau kerja.
- Dosen dan teman kuliah.
- Klien freelance (jika ada).

## 4. Data Konten

### Sudah ada (dari CV dan form)
| Bagian | Isi |
|---|---|
| Nama | Zia Zackia Rahma |
| Title | Mahasiswa D3/S1 Sistem Informasi |
| Profil | Mahasiswa S1 Sistem Informasi yang tertarik dengan dunia teknologi dan pengembangan sistem. Senang belajar hal baru, mudah beradaptasi, dan mampu bekerja sama dalam tim. Terus mengembangkan kemampuan di bidang sistem informasi melalui proyek selama kuliah. |
| Telepon / WA | +62 821-1515-2927 |
| Email | zackiarahmaz@gmail.com |
| Instagram | @ziazackiaa |
| TikTok | ziazackyaa |
| Pendidikan | Universitas Bina Sarana Informatika — D3/S1 Sistem Informasi, 2024–sekarang. SMAN 1 Cikatomas — Jurusan IPA, lulus 2023 |
| Keahlian | Data Analysis, Microsoft Office, MySQL Database, kerja sama dalam tim |
| Bahasa | Bahasa Indonesia |
| Proyek | Sistem perpustakaan; perancangan database dengan SQL; pembuatan ERD, LRS, dan relasi antar tabel |

### Belum ada (menunggu dari Zia)
- Foto profil (dikirim via WhatsApp; sementara memakai placeholder).
- Tanggal lahir (opsional) dan kota/domisili.
- LinkedIn, GitHub, YouTube (kosong = tidak ditampilkan).
- Kegiatan SMK / organisasi (jika ada).
- Sertifikat: ditampilkan atau tidak? Jika ya, file dan detailnya.
- Tema warna, gaya, bahasa website, contoh referensi.
- Detail tiap proyek (deskripsi, screenshot, link).

## 5. Fitur (MVP)
1. **Navbar** tetap di atas dengan tautan ke tiap bagian.
2. **Hero**: nama, title, tagline, foto, tombol "Hubungi Saya" dan "Unduh CV".
3. **Tentang Saya**: cerita profil.
4. **Keahlian**: daftar skill.
5. **Pendidikan**: timeline.
6. **Proyek**: kartu proyek (judul, deskripsi, tools).
7. **Sertifikat** (opsional, tampil hanya jika ada datanya).
8. **Kontak**: WhatsApp, email, Instagram, TikTok.
9. **Footer**.

## 6. Kebutuhan Non-Fungsional
- Responsif (HP, tablet, desktop), diutamakan mobile-first.
- Cepat dimuat (tanpa framework berat, gambar dikompres).
- Aksesibel: kontras warna cukup, teks alternatif untuk gambar, bisa dinavigasi dengan keyboard.
- Bahasa Indonesia (bisa ditambah Inggris sesuai pilihan Zia).
- Gratis di-hosting (GitHub Pages / Netlify / Vercel).

## 7. Arah Desain
Mengacu pada desain referensi "Blue Bird" yang dikirim Zia:
- Gradasi **biru langit**, kartu **glassmorphism** (kaca buram transparan), teks watermark besar di latar.
- Animasi **GSAP**, efek **parallax**, dan elemen 3D ringan dengan **Three.js**.
- Komponen animasi dari **React Bits**.
- Font: Playfair Display (judul) dan Inter (isi).
- Hero: nama sebagai watermark besar, foto/objek utama di tengah, kartu kaca berisi ringkasan (skill, proyek, kontak).
- Referensi lengkap: tautan Pinterest https://pin.it/1LH0yFWWi dan kode HTML contoh dari Zia.

## 8. Kriteria Selesai
- Semua bagian MVP tampil dan datanya sesuai CV.
- Tombol WhatsApp, email, Instagram, TikTok, dan unduh CV berfungsi.
- Tampilan rapi di layar 360px sampai 1440px.
- Skor Lighthouse (performa, aksesibilitas) minimal 90.

## 9. Di Luar Cakupan
Backend, login, CMS, blog, form kirim pesan berbasis server.

## 10. Pertanyaan Terbuka
Lihat bagian "Belum ada" di atas.
