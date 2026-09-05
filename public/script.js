// ==================== Theme Toggle ====================
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggle');

const sunIcon = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
const moonIcon = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  themeToggleBtn.innerHTML = theme === 'light' ? moonIcon : sunIcon;
  themeToggleBtn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
}

const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(prefersLight ? 'light' : 'dark');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// ==================== Dynamic Year ====================
document.getElementById('year').textContent = new Date().getFullYear();

// ==================== Mobile Nav Toggle ====================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

// ==================== Language Translations ====================
const translations = {
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_projects: "Project",
    nav_certificates: "Sertifikat",
    nav_contact: "Kontak",
    hero_eyebrow: "Siswa TKJ",
    hero_role_short: "Siswa TKJ & Web Developer",
    hero_role: "Siswa TKJ yang membangun aplikasi web nyata — mulai dari website kelas, platform pemesanan custom design, sampai tools edit foto & konversi PDF.",
    btn_view_project: "Lihat Project →",
    btn_contact_me: "Hubungi Saya",
    about_kicker: "Tentang",
    about_title: "Tentang Saya",
    about_text: "Saya Azriel Aurizal Ednisia, seorang siswa jurusan Teknik Komputer dan Jaringan (TKJ) di Indonesia. Saya berfokus untuk terus mengasah kemampuan dalam pengembangan web dan jaringan melalui berbagai project nyata.",
    chip_webdev: "Web Development",
    skills_kicker: "Keahlian",
    skills_title: "Keahlian & Stack",
    skills_cat_languages: "Languages",
    skills_cat_databases: "Databases",
    skills_cat_tools: "Tools",
    projects_kicker: "Project",
    projects_title: "Project Saya",
    project_desc_1: "Project web kelas untuk berbagi informasi, materi, dan dokumentasi kegiatan TKJ 1.",
    project_desc_2: "Platform web untuk pemesanan dan penjualan produk desain kustom (custom design) sesuai kebutuhan pelanggan.",
    project_desc_3: "Aplikasi web photo studio interaktif dan alat konversi dokumen PDF.",
    certs_kicker: "Sertifikat",
    certs_title: "Sertifikat",
    cert_empty: "Sertifikat lainnya menyusul.",
    contact_kicker: "Kontak",
    contact_title: "Hubungi Saya",
    contact_label_email: "Email",
    contact_whatsapp_cta: "Chat via WhatsApp",
    footer_text: "Dibuat dengan dedikasi."
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_contact: "Contact",
    hero_eyebrow: "TKJ Student",
    hero_role_short: "TKJ Student & Web Developer",
    hero_role: "A TKJ student building real web applications — from class websites to a custom-order platform and photo/PDF tools.",
    btn_view_project: "View Projects →",
    btn_contact_me: "Contact Me",
    about_kicker: "About",
    about_title: "About Me",
    about_text: "I'm Azriel Aurizal Ednisia, a student majoring in Computer and Network Engineering (TKJ) in Indonesia. I am dedicated to continuously sharpening my web development and networking skills through hands-on projects.",
    chip_webdev: "Web Development",
    skills_kicker: "Skills",
    skills_title: "Skills & Stack",
    skills_cat_languages: "Languages",
    skills_cat_databases: "Databases",
    skills_cat_tools: "Tools",
    projects_kicker: "Projects",
    projects_title: "My Projects",
    project_desc_1: "A class web application designed for sharing info, learning materials, and activities for TKJ 1.",
    project_desc_2: "A web platform dedicated to custom design services and tailored creative products.",
    project_desc_3: "An interactive web photo studio application and PDF document converter.",
    certs_kicker: "Certificates",
    certs_title: "Certificates",
    cert_empty: "More certificates coming soon.",
    contact_kicker: "Contact",
    contact_title: "Contact Me",
    contact_label_email: "Email",
    contact_whatsapp_cta: "Chat on WhatsApp",
    footer_text: "Built with care."
  }
};

let currentLang = 'id';
const langBtns = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  langBtns.forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  document.documentElement.lang = lang;
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// ==================== Scroll Reveal ====================
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ==================== Carousels (Projects & Certificates) ====================
function initCarousel(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const prevBtn = document.querySelector(`[data-carousel-prev="${trackId}"]`);
  const nextBtn = document.querySelector(`[data-carousel-next="${trackId}"]`);

  function step() {
    const item = track.querySelector('.carousel-item');
    if (!item) return track.clientWidth * 0.8;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || 20);
    return item.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
    if (nextBtn) nextBtn.disabled = track.scrollLeft >= maxScroll;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { track.scrollBy({ left: step(), behavior: 'smooth' }); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { track.scrollBy({ left: -step(), behavior: 'smooth' }); e.preventDefault(); }
  });

  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
}

initCarousel('projectsTrack');
initCarousel('certsTrack');

// ==================== Scroll Spy (active nav link) ====================
const navSections = Array.from(document.querySelectorAll('main section[id]'));
const navLinkByHash = new Map(
  Array.from(document.querySelectorAll('.nav-link')).map(link => [link.getAttribute('href'), link])
);

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = navLinkByHash.get(`#${entry.target.id}`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinkByHash.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

navSections.forEach(section => spyObserver.observe(section));

// ==================== Certificate Lightbox ====================
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('[data-cert-full]').forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = card.getAttribute('data-cert-full');
    modal.classList.add('open');
    modalClose.focus();
  });
});

function closeModal() {
  modal.classList.remove('open');
  modalImg.src = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
