const STORAGE_KEY = "theme";

const moonIcon = '<span class="theme-toggle-icon bi bi-moon-stars" aria-hidden="true"></span>';
const sunIcon = '<span class="theme-toggle-icon bi bi-sun" aria-hidden="true"></span>';

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
    if (!themeToggle) {
      return;
    }

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

function initializeSite() {
  setCanonicalUrl();
  createThemeController();
  createRevealObserver();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSite, { once: true });
} else {
  initializeSite();
}
