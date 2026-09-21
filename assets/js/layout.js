/* ===========================================================
   Professor Madison — Header / Footer / Nav injection
   Site de Física. Controlado por <body data-active="...">
   =========================================================== */

const LOGO_SVG = `<img src="/assets/img/logo-mark.png" alt="Professor Madison" width="38" height="32" style="width:100%;height:100%;object-fit:contain;display:block">`;

const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@professormadison8575",
  instagram: "https://www.instagram.com/professormadison",
  tiktok: "https://www.tiktok.com/@professormadison"
};

const NAV = [
  { href: "/index.html", label: "Início", key: "home" },
  { href: "/fisica/videoaulas.html", label: "Vídeo-aulas", key: "videoaulas" },
  { href: "/fisica/listas.html", label: "Listas de Exercícios", key: "listas" },
  { href: "/fisica/aulas.html", label: "Aulas HTML", key: "aulas" },
  { href: "/fisica/games.html", label: "Games", key: "games" },
  { href: "/fisica/blog.html", label: "Blog", key: "blog" }
];


/* ---------- Acessibilidade: preferências salvas no navegador ---------- */
const A11Y = { theme: "pm_theme", motion: "pm_motion", font: "pm_font" };

function a11yGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function a11ySet(key, value) {
  try {
    if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value);
  } catch (e) {}
}
function osPrefersReducedMotion() {
  return window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function a11yApply() {
  const root = document.documentElement;
  const pref = a11yGet(A11Y.theme);
  let theme = "dark";
  if (pref === "light" || pref === "soft" || pref === "dark") theme = pref;
  else if (pref === "auto") theme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  root.dataset.theme = theme;
  if (pref) root.dataset.chosen = "1"; else delete root.dataset.chosen;

  const motion = a11yGet(A11Y.motion);
  if (motion === "reduce" || motion === "full") root.dataset.motion = motion; else delete root.dataset.motion;

  const font = a11yGet(A11Y.font);
  if (font === "lg" || font === "xl") root.dataset.font = font; else delete root.dataset.font;
}
a11yApply();
if (window.matchMedia) {
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", a11yApply);
}

const A11Y_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>`;

function a11yPanelHtml() {
  const pref = a11yGet(A11Y.theme) || "dark";
  const font = a11yGet(A11Y.font) || "normal";
  const motionPref = a11yGet(A11Y.motion);
  const reduce = motionPref === "reduce" || (motionPref !== "full" && osPrefersReducedMotion());
  const themes = [
    ["dark", "Escuro", "padrão do site"],
    ["soft", "Suave", "menos brilho e contraste"],
    ["light", "Claro", ""],
    ["auto", "Automático", "segue o seu aparelho"]
  ];
  const fonts = [["normal", "A"], ["lg", "A+"], ["xl", "A++"]];
  return `
    <h2 id="a11yTitle">Opções de acessibilidade</h2>
    <fieldset>
      <legend>Tema</legend>
      ${themes.map(([v, l, d]) => `
        <label class="a11y-opt"><input type="radio" name="a11yTheme" value="${v}" ${pref === v ? "checked" : ""}>
        <span>${l}${d ? ` <small>— ${d}</small>` : ""}</span></label>`).join("")}
    </fieldset>
    <fieldset>
      <legend>Movimento</legend>
      <label class="a11y-opt"><input type="checkbox" id="a11yMotion" ${reduce ? "checked" : ""}>
      <span>Reduzir animações e efeitos</span></label>
    </fieldset>
    <fieldset>
      <legend>Tamanho do texto</legend>
      <div class="a11y-font">
        ${fonts.map(([v, l]) => `<label><input type="radio" name="a11yFont" value="${v}" ${font === v ? "checked" : ""}><span>${l}</span></label>`).join("")}
      </div>
    </fieldset>
    <button type="button" class="a11y-reset" id="a11yReset">Restaurar padrão</button>
  `;
}

function setupA11yPanel() {
  const btn = document.getElementById("a11yBtn");
  const panel = document.getElementById("a11yPanel");
  if (!btn || !panel) return;

  function render() { panel.innerHTML = a11yPanelHtml(); bind(); }

  function open() {
    render();
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    const first = panel.querySelector("input:checked") || panel.querySelector("input");
    if (first) first.focus();
  }
  function close(returnFocus) {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    if (returnFocus) btn.focus();
  }

  function bind() {
    panel.querySelectorAll('input[name="a11yTheme"]').forEach((el) =>
      el.addEventListener("change", () => { a11ySet(A11Y.theme, el.value); a11yApply(); }));
    panel.querySelectorAll('input[name="a11yFont"]').forEach((el) =>
      el.addEventListener("change", () => { a11ySet(A11Y.font, el.value === "normal" ? null : el.value); a11yApply(); }));
    const motion = panel.querySelector("#a11yMotion");
    motion.addEventListener("change", () => { a11ySet(A11Y.motion, motion.checked ? "reduce" : "full"); a11yApply(); });
    panel.querySelector("#a11yReset").addEventListener("click", () => {
      a11ySet(A11Y.theme, null); a11ySet(A11Y.motion, null); a11ySet(A11Y.font, null);
      a11yApply(); render();
    });
  }

  btn.addEventListener("click", () => (panel.hidden ? open() : close(true)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(true); });
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) close(false);
  });
}

function socialIcon(name) {
  const icons = {
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.78.22 2.41.46.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.24.63.41 1.35.46 2.41C21.95 8.94 21.96 9.3 21.96 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.78-.46 2.41a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.63.24-1.35.41-2.41.46-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.41-.46a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.24-.63-.41-1.35-.46-2.41C2.05 15.06 2.04 14.7 2.04 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.41.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.47 2.56c.63-.24 1.35-.41 2.41-.46C8.94 2.05 9.3 2.04 12 2.04Zm0 1.8c-2.65 0-2.98.01-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65-.05 1.04-.06 1.37-.06 4.02s.01 2.98.06 4.02c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.04.05 1.37.06 4.02.06s2.98-.01 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.04.06-1.37.06-4.02s-.01-2.98-.06-4.02c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.04-.05-1.37-.06-4.02-.06Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.9-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.3v13.9a2.9 2.9 0 1 1-2.05-2.77V9.7a6.1 6.1 0 1 0 5.35 6.06V8.8a8.1 8.1 0 0 0 4.9 1.66V7.15a4.9 4.9 0 0 1-4.9-5.15Z"/></svg>'
  };
  return icons[name] || "";
}

function renderHeader() {
  const active = document.body.dataset.active || "";
  const el = document.getElementById("site-header");
  if (!el) return;

  const navHtml = NAV.map(
    (item) => `<a href="${item.href}" class="${item.key === active ? "active" : ""}">${item.label}</a>`
  ).join("");

  el.innerHTML = `
    <div class="container">
      <a href="/index.html" class="brand">
        <span class="brand-logo">${LOGO_SVG}</span>
        <span class="brand-text">
          <span class="p">PROFESSOR</span>
          <span class="m">MADISON</span>
        </span>
      </a>
      <div class="a11y-wrap">
        <button type="button" class="a11y-btn" id="a11yBtn" aria-expanded="false" aria-controls="a11yPanel" aria-label="Opções de acessibilidade">
          ${A11Y_ICON}<span class="a11y-label">Acessibilidade</span>
        </button>
        <div class="a11y-panel" id="a11yPanel" role="group" aria-labelledby="a11yTitle" hidden></div>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu">☰</button>
      <nav class="main-nav" id="mainNav">${navHtml}</nav>
    </div>
  `;

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
  setupA11yPanel();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <a href="/index.html" class="footer-brand">
          <span class="brand-logo">${LOGO_SVG}</span>
          <span>Professor Madison</span>
        </a>
        <div class="social-links">
          <a href="${SOCIAL_LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${socialIcon("youtube")}</a>
          <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${socialIcon("instagram")}</a>
          <a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${socialIcon("tiktok")}</a>
        </div>
      </div>
      <p class="footer-copy">© ${new Date().getFullYear()} Professor Madison — Compreender primeiro. Calcular depois.</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
