console.log("Prodesk Landing Page Loaded 🚀");

// ── Dark Mode Toggle ──
const body = document.body;
const toggleBtn = document.getElementById('darkToggle');
const toggleIcon = document.getElementById('toggleIcon');
const toggleLabel = document.getElementById('toggleLabel');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleIcon.textContent = '☀️';
  toggleLabel.textContent = 'Light';
}

// Save on toggle
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleIcon.textContent = isDark ? '☀️' : '🌙';
    toggleLabel.textContent = isDark ? 'Light' : 'Dark';
  });
}

// ── Hamburger Menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.setAttribute('aria-expanded', 'false');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

function closeMobile() {
  if (hamburger && mobileMenu) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

// ── Scroll Fade-up Animations ──
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target); // stop observing after animation
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));