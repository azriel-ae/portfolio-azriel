# 👨‍💻 Portfolio — Azriel Aurizal Ednisia

Website portofolio pribadi dengan tampilan **terminal SQL interaktif**, mode gelap/terang, dan dukungan dwibahasa (ID/EN). Dibangun clean dengan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build step.

🔗 **Demo Live:** [azrielaurizal.vercel.app](https://azrielaurizal.vercel.app/)

---

## ✨ Fitur

- 🖥️ **Terminal SQL animasi** — hero section bergaya query database yang mengetik otomatis, sekarang dua kolom di desktop
- 🌗 **Dark / Light mode** — beralih tema dengan satu klik, preferensi warna disesuaikan lewat CSS variables
- 🌐 **Dwibahasa (ID/EN)** — seluruh teks bisa diterjemahkan secara instan lewat atribut `data-i18n`
- 🧩 **Skills dalam 3 kategori** — Languages, Databases, Tools berdampingan tanpa progress bar
- 🎠 **Carousel horizontal** — Project dan Sertifikat masing-masing bisa digeser (drag/swipe/tombol panah/keyboard)
- 🖼️ **Lightbox sertifikat** — klik gambar sertifikat untuk melihat versi penuh
- 📱 **Navigasi mobile** — menu hamburger untuk layar kecil
- ♿ **Aksesibel** — skip link, fokus terlihat, carousel bisa dioperasikan dengan keyboard, menghormati `prefers-reduced-motion`
- ⚡ **Vanilla JS** — tanpa dependency frontend, ringan dan cepat dimuat

---

## 🗂️ Struktur Folder

```
portofolio-azriel/
├── public/
│   ├── index.html       # Struktur halaman (markup saja, tanpa CSS/JS inline)
│   ├── style.css         # Seluruh styling: tema, layout, animasi, responsive
│   ├── script.js          # Seluruh logika: tema, i18n, terminal typing, carousel, lightbox
│   ├── azriel.png         # Foto profil
│   └── sertifikat1.png    # Sertifikat HackerRank SQL (Basic)
├── server.js              # Server Express sederhana untuk menyajikan folder public/
├── LICENSE
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

### Opsi 1 — Tanpa server (paling cepat)
Cukup buka `public/index.html` langsung di browser.

### Opsi 2 — Dengan server Express
```bash
npm install express
node server.js
```
Lalu buka [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Teknologi

| Bagian    | Teknologi                                    |
|-----------|-----------------------------------------------|
| Struktur  | HTML5                                          |
| Gaya      | CSS3 (custom properties, animasi)              |
| Interaksi | JavaScript (vanilla, ES6+)                     |
| Font      | Plus Jakarta Sans & Fira Code (Google Fonts)   |
| Server    | Node.js + Express                              |

---

## 📬 Kontak

- ✉️ Email: azrielaurizal27@gmail.com
- 📸 Instagram: [@azrieledn](https://instagram.com/azrieledn)
- 💻 GitHub: [azriel-ae](https://github.com/azriel-ae)
- 💬 WhatsApp: [Chat via WhatsApp](https://wa.me/6281227596045)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi yang tercantum di [LICENSE](./LICENSE).
