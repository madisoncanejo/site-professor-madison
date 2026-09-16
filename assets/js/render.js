/* ===========================================================
   Professor Madison — Renderizadores de conteúdo
   Lê os arrays definidos em /data/*.js e monta os cards.
   =========================================================== */

function formatDateBR(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function youtubeIdFromUrl(input) {
  if (!input) return "";
  if (!input.includes("/") && !input.includes("?")) return input; // já é o ID
  const patterns = [
    /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([A-Za-z0-9_-]{6,})/
  ];
  for (const re of patterns) {
    const match = input.match(re);
    if (match) return match[1];
  }
  return input;
}

function emptyState(container, icon, title, hint) {
  container.innerHTML = `
    <div class="empty-state">
      <div class="icon">${icon}</div>
      <h3>${title}</h3>
      <p>${hint}</p>
    </div>`;
}

/* ---------- Vídeo-aulas ---------- */
function renderVideoaulas() {
  const el = document.getElementById("lista-videoaulas");
  if (!el) return;
  const items = window.VIDEOAULAS || [];
  if (items.length === 0) {
    emptyState(el, "🎬", "Nenhuma vídeo-aula publicada ainda", "Em breve novas aulas gravadas serão adicionadas aqui.");
    return;
  }
  el.innerHTML = items
    .map((v) => {
      const id = youtubeIdFromUrl(v.youtubeId || v.url);
      return `
      <article class="item-card">
        <div class="thumb">
          <iframe src="https://www.youtube.com/embed/${id}" title="${v.titulo}" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="body">
          ${v.tema ? `<span class="tag">${v.tema}</span>` : ""}
          <h3>${v.titulo}</h3>
          <p>${v.descricao || ""}</p>
          <span class="meta">${formatDateBR(v.data)}</span>
        </div>
      </article>`;
    })
    .join("");
}

/* ---------- Listas de exercícios ---------- */
function renderListas() {
  const el = document.getElementById("lista-listas");
  if (!el) return;
  const items = window.LISTAS || [];
  if (items.length === 0) {
    emptyState(el, "📄", "Nenhuma lista disponível ainda", "As listas de exercícios em PDF aparecerão aqui assim que forem publicadas.");
    return;
  }
  el.innerHTML = items
    .map(
      (item) => `
      <article class="item-card">
        <div class="body">
          ${item.tema ? `<span class="tag">${item.tema}</span>` : ""}
          <h3>${item.titulo}</h3>
          <p>${item.descricao || ""}</p>
          <span class="meta">${formatDateBR(item.data)}</span>
          <div class="actions">
            <a class="btn btn-primary" href="${item.arquivo}" download>⬇ Baixar PDF</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Aulas em HTML ---------- */
function renderAulas() {
  const el = document.getElementById("lista-aulas");
  if (!el) return;
  const items = window.AULAS || [];
  if (items.length === 0) {
    emptyState(el, "🧪", "Nenhuma aula interativa publicada ainda", "As aulas em HTML criadas com a IA aparecerão aqui.");
    return;
  }
  el.innerHTML = items
    .map(
      (item) => `
      <article class="item-card">
        <div class="body">
          ${item.tema ? `<span class="tag">${item.tema}</span>` : ""}
          <h3>${item.titulo}</h3>
          <p>${item.descricao || ""}</p>
          <span class="meta">${formatDateBR(item.data)}</span>
          <div class="actions">
            <a class="btn btn-primary" href="${item.url}" target="_blank" rel="noopener">Abrir aula →</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Games em HTML ---------- */
function renderGames() {
  const el = document.getElementById("lista-games");
  if (!el) return;
  const items = window.GAMES || [];
  if (items.length === 0) {
    emptyState(el, "🎮", "Nenhum game publicado ainda", "Os games interativos em HTML aparecerão aqui.");
    return;
  }
  el.innerHTML = items
    .map(
      (item) => `
      <article class="item-card">
        <div class="body">
          ${item.tema ? `<span class="tag">${item.tema}</span>` : ""}
          <h3>${item.titulo}</h3>
          <p>${item.descricao || ""}</p>
          <span class="meta">${formatDateBR(item.data)}</span>
          <div class="actions">
            <a class="btn btn-primary" href="${item.url}" target="_blank" rel="noopener">Jogar →</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Blog (Física ou Teologia) ---------- */
function renderBlog(containerId, arrayName) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = window[arrayName] || [];
  if (items.length === 0) {
    emptyState(el, "✍️", "Nenhum post publicado ainda", "Os próximos textos do blog aparecerão aqui.");
    return;
  }
  el.innerHTML = items
    .map(
      (post) => `
      <article class="item-card">
        <div class="body">
          ${post.categoria ? `<span class="tag">${post.categoria}</span>` : ""}
          <h3>${post.titulo}</h3>
          <p>${post.resumo || ""}</p>
          <span class="meta">${formatDateBR(post.data)}</span>
          <div class="actions">
            <a class="btn btn-outline" href="${post.url}">Ler post →</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Ebooks (Teologia) ---------- */
function renderEbooks() {
  const el = document.getElementById("lista-ebooks");
  if (!el) return;
  const items = window.EBOOKS || [];
  if (items.length === 0) {
    emptyState(el, "📚", "Nenhum ebook publicado ainda", "Os ebooks sobre estudos bíblicos e teológicos aparecerão aqui.");
    return;
  }
  el.innerHTML = items
    .map(
      (item) => `
      <article class="item-card">
        <div class="body">
          ${item.tema ? `<span class="tag">${item.tema}</span>` : ""}
          <h3>${item.titulo}</h3>
          <p>${item.descricao || ""}</p>
          <span class="meta">${formatDateBR(item.data)}</span>
          <div class="actions">
            <a class="btn btn-primary" href="${item.arquivo}" download>⬇ Baixar Ebook</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}
