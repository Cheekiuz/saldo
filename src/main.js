const themeToggle = document.querySelector(".theme-toggle");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle?.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

themeToggle?.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
});

setTheme(document.documentElement.dataset.theme || "light");

const header = document.querySelector(".header");

function updateHeader() {
  header?.classList.toggle("header--scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function navigateToTarget(target, { instant = false } = {}) {
  const behavior = instant || prefersReducedMotion ? "auto" : "smooth";

  target.scrollIntoView({ behavior });
  target.focus({ preventScroll: true });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    navigateToTarget(target, { instant: target.id === "main-content" });
  });
});
