// SEMUA isi website ada di file ini. Edit di sini saja.
export const content = {
  name: 'Zia Zackia Rahma',
  firstName: 'Zia',
  title: 'Mahasiswa S1 Sistem Informasi',
  tagline: 'Database & Data',
  tagline2: 'yang tertata rapi',
  intro:
    'Tertarik pada teknologi dan pengembangan sistem. Senang belajar hal baru, mudah beradaptasi, dan bekerja sama dengan baik dalam tim.',
  about:
    'Saya adalah mahasiswa S1 Sistem Informasi yang tertarik dengan dunia teknologi dan pengembangan sistem. Saya senang belajar hal baru, mudah beradaptasi, dan mampu bekerja sama dalam tim. Melalui pengalaman mengerjakan berbagai proyek selama kuliah, saya terus mengembangkan kemampuan di bidang sistem informasi dan siap memberikan kontribusi terbaik di lingkungan kerja.',
  photo: '/img/profile.png', // foto tanpa background (public/img/profile.png)
  cv: '/CV.pdf',
  city: '', // isi kota/domisili kalau mau ditampilkan

  contact: {
    phone: '+62 821-1515-2927',
    whatsapp: '6282115152927',
    email: 'zackiarahmaz@gmail.com',
  },

  // Kosongkan (string kosong) = tidak ditampilkan
  socials: {
    instagram: 'ziazackiaa',
    tiktok: 'ziazackyaa',
    linkedin: '',
    github: '',
    youtube: '',
  },

  skills: [
    // icon: nama ikon (lihat skillIcons di Sections.jsx)
    { name: 'Data Analysis', desc: 'Mengolah dan membaca data', icon: 'chart' },
    { name: 'Microsoft Office', desc: 'Word, Excel, PowerPoint', icon: 'office' },
    { name: 'MySQL Database', desc: 'Perancangan & query SQL', icon: 'database' },
    { name: 'Kerja Sama Tim', desc: 'Komunikatif dan adaptif', icon: 'team' },
  ],

  languages: ['Bahasa Indonesia'],

  education: [
    {
      school: 'Universitas Bina Sarana Informatika',
      detail: 'S1 Sistem Informasi',
      year: '2024 – Sekarang',
      logo: '/img/logo-ubsi.png',
    },
    {
      school: 'SMAN 1 Cikatomas',
      detail: 'Jurusan IPA',
      year: 'Lulus 2023',
      logo: '/img/logo-sman1.webp',
    },
  ],

  projects: [
    {
      icon: 'library',
      title: 'Sistem Perpustakaan',
      desc: 'Membuat sistem perpustakaan untuk mengelola data buku, anggota, dan peminjaman.',
      tools: ['MySQL', 'SQL'],
    },
    {
      icon: 'database',
      title: 'Perancangan Database SQL',
      desc: 'Merancang database menggunakan SQL, lengkap dengan struktur tabel dan relasinya.',
      tools: ['SQL', 'MySQL'],
    },
    {
      icon: 'network',
      title: 'ERD, LRS & Relasi Tabel',
      desc: 'Membuat ERD, LRS, dan relasi antar tabel sebagai dasar rancangan basis data.',
      tools: ['ERD', 'LRS'],
    },
  ],

  // Isi kalau mau menampilkan sertifikat. Kosong = bagian disembunyikan.
  // { title: 'Nama sertifikat', issuer: 'Penerbit', date: '2025', image: '/img/cert1.jpg', link: '' }
  certificates: [],
}
