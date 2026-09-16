/* ===========================================================
   Professor Madison — Header / Footer / Nav injection
   Controlled by <body data-area="fisica|teologia|home" data-active="...">
   =========================================================== */

const LOGO_SVG = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Professor Madison">
  <defs>
    <linearGradient id="mgrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3dffce"/>
      <stop offset="100%" stop-color="#0fb3c4"/>
    </linearGradient>
  </defs>
  <path d="M18 20 L18 62 Q18 74 30 80" fill="none" stroke="url(#mgrad)" stroke-width="7" stroke-linecap="round"/>
  <path d="M82 20 L82 62 Q82 74 70 80" fill="none" stroke="url(#mgrad)" stroke-width="7" stroke-linecap="round"/>
  <path d="M30 22 L50 46 L70 22" fill="none" stroke="url(#mgrad)" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 22 L30 56" fill="none" stroke="url(#mgrad)" stroke-width="7.5" stroke-linecap="round"/>
  <path d="M70 22 L70 56" fill="none" stroke="url(#mgrad)" stroke-width="7.5" stroke-linecap="round"/>
</svg>`;

const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@professormadison8575",
  instagram: "https://www.instagram.com/professormadison",
  tiktok: "https://www.tiktok.com/@professormadison"
};

const NAV = {
  fisica: [
    { href: "/fisica/index.html", label: "Início", key: "home" },
    { href: "/fisica/videoaulas.html", label: "Vídeo-aulas", key: "videoaulas" },
    { href: "/fisica/listas.html", label: "Listas de Exercícios", key: "listas" },
    { href: "/fisica/aulas.html", label: "Aulas HTML", key: "aulas" },
    { href: "/fisica/games.html", label: "Games", key: "games" },
    { href: "/fisica/blog.html", label: "Blog", key: "blog" }
  ],
  teologia: [
    { href: "/teologia/index.html", label: "Início", key: "home" },
    { href: "/teologia/biblia.html", label: "Bíblia", key: "biblia" },
    { href: "/teologia/ebooks.html", label: "Ebooks", key: "ebooks" },
    { href: "/teologia/blog.html", label: "Blog", key: "blog" }
  ]
};

function socialIcon(name) {
  const icons = {
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.78.22 2.41.46.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.24.63.41 1.35.46 2.41C21.95 8.94 21.96 9.3 21.96 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.78-.46 2.41a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.63.24-1.35.41-2.41.46-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.41-.46a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.24-.63-.41-1.35-.46-2.41C2.05 15.06 2.04 14.7 2.04 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.41.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.47 2.56c.63-.24 1.35-.41 2.41-.46C8.94 2.05 9.3 2.04 12 2.04Zm0 1.8c-2.65 0-2.98.01-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65-.05 1.04-.06 1.37-.06 4.02s.01 2.98.06 4.02c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.04.05 1.37.06 4.02.06s2.98-.01 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.04.06-1.37.06-4.02s-.01-2.98-.06-4.02c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.04-.05-1.37-.06-4.02-.06Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.9-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.3v13.9a2.9 2.9 0 1 1-2.05-2.77V9.7a6.1 6.1 0 1 0 5.35 6.06V8.8a8.1 8.1 0 0 0 4.9 1.66V7.15a4.9 4.9 0 0 1-4.9-5.15Z"/></svg>'
  };
  return icons[name] || "";
}

function renderHeader() {
  const area = document.body.dataset.area || "home";
  const active = document.body.dataset.active || "";
  const el = document.getElementById("site-header");
  if (!el) return;

  let navHtml = "";
  let switchHtml = "";

  if (area === "fisica" || area === "teologia") {
    navHtml = NAV[area]
      .map(
        (item) =>
          `<a href="${item.href}" class="${item.key === active ? "active" : ""}">${item.label}</a>`
      )
      .join("");
    const other = area === "fisica" ? "teologia" : "fisica";
    const otherLabel = area === "fisica" ? "Teologia" : "Física";
    switchHtml = `<a class="area-switch" href="/${other}/index.html">Ir para ${otherLabel} →</a>`;
  }

  el.innerHTML = `
    <div class="container">
      <a href="/index.html" class="brand">
        <span class="brand-logo">${LOGO_SVG}</span>
        <span class="brand-text">
          <span class="p">PROFESSOR</span>
          <span class="m">MADISON</span>
        </span>
      </a>
      ${navHtml ? `<button class="nav-toggle" id="navToggle" aria-label="Abrir menu">☰</button>` : ""}
      <nav class="main-nav" id="mainNav">${navHtml}</nav>
      ${switchHtml}
    </div>
  `;

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
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
