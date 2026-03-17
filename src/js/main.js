const STORAGE_KEY = "theme";
const LANG_KEY = "lang";

const moonIcon = '<span class="theme-toggle-icon bi bi-moon-stars" aria-hidden="true"></span>';
const sunIcon = '<span class="theme-toggle-icon bi bi-sun" aria-hidden="true"></span>';

const translations = {
  es: {
    "badge": "Anuncios",
    "ann.discord": "¿Necesitas un servidor de Discord? No te preocupes, envíame un mensaje para ayudarte.",
    "projects.title": "Proyectos",
    "source.desc": "Aquí puedes ver el código fuente de esta página web.",
  },
  en: {
    "badge": "Announcements",
    "ann.discord": "Need a Discord server? No worries, send me a message and I'll help you.",
    "projects.title": "Projects",
    "source.desc": "Here you can see the source code of this website.",
  },
};

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return storedTheme === "dark" ? "dark" : "light";
}

function setCanonicalUrl() {
  const canonicalUrl = new URL(
    window.location.pathname || "/",
    window.location.origin,
  ).toString();
  let canonicalLink = document.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute("href", canonicalUrl);
}

function createThemeController() {
  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");

  function renderThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === "light" ? moonIcon : sunIcon;
  }

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
    renderThemeIcon(theme);
  }

  function toggleTheme() {
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
  }

  applyTheme(getStoredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function createRevealObserver() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((el) => observer.observe(el));
}

function positionThemeToggle() {
  const bar = document.querySelector(".announcement-bar");
  const wrap = document.querySelector(".theme-toggle-wrap");
  if (!bar || !wrap) return;

  const update = () => {
    wrap.style.top = bar.offsetHeight + 8 + "px";
  };

  update();
  new ResizeObserver(update).observe(bar);
}


function applyLanguage(lang, toggle) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  if (toggle) toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
}

function createLanguageController() {
  const toggle = document.querySelector("[data-lang-toggle]");
  if (!toggle) return;

  const stored = localStorage.getItem(LANG_KEY) || "es";
  applyLanguage(stored, toggle);

  toggle.addEventListener("click", () => {
    const current = localStorage.getItem(LANG_KEY) || "es";
    applyLanguage(current === "es" ? "en" : "es", toggle);
  });
}

function initializeSite() {
  setCanonicalUrl();
  createThemeController();
  createRevealObserver();
  positionThemeToggle();
  createLanguageController();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSite, { once: true });
} else {
  initializeSite();
}
