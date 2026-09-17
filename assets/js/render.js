/* ===========================================================
   Professor Madison — Renderizadores de conteúdo
   Lê os arrays definidos em /data/*.js e monta os cards.
   =========================================================== */

const SERIES = [
  { id: "1", label: "1ª Série — Ensino Médio" },
  { id: "2", label: "2ª Série — Ensino Médio" },
  { id: "3", label: "3ª Série — Ensino Médio" },
  { id: "enem", label: "Revisão ENEM", groupByTema: true }
];

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

/* Agrupa itens pelo campo "tema" (usado dentro da Revisão ENEM, que cruza as 3 séries). */
function groupByTema(items, buildCard, emptyIcon, emptyHint) {
  if (items.length === 0) {
    return `<div class="empty-state empty-state-sm">
               <div class="icon">${emptyIcon}</div>
               <p>${emptyHint}</p>
             </div>`;
  }

  const temas = [];
  items.forEach((item) => {
    const tema = item.tema || "Geral";
    if (!temas.includes(tema)) temas.push(tema);
  });

  return temas
    .map((tema) => {
      const doTema = items.filter((item) => (item.tema || "Geral") === tema);
      return `
        <div class="tema-group">
          <h3 class="tema-title">${tema}</h3>
          <div class="item-grid">${doTema.map(buildCard).join("")}</div>
        </div>`;
    })
    .join("");
}

/* Renderiza um container agrupando os itens por série (1ª/2ª/3ª do Ensino Médio)
   e, na Revisão ENEM, subagrupando por tema/assunto (já que o ENEM cruza as 3 séries).
   `buildCard` recebe um item e devolve o HTML do card. */
function renderGroupedBySerie(containerId, items, buildCard, emptyIcon, emptyHint) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = SERIES.map((serie) => {
    const doSerie = items.filter((item) => item.serie === serie.id);

    const body = serie.groupByTema
      ? groupByTema(doSerie, buildCard, emptyIcon, emptyHint)
      : doSerie.length === 0
      ? `<div class="empty-state empty-state-sm">
           <div class="icon">${emptyIcon}</div>
           <p>${emptyHint}</p>
         </div>`
      : `<div class="item-grid">${doSerie.map(buildCard).join("")}</div>`;

    return `
      <section class="serie-section">
        <h2 class="serie-title">${serie.label}</h2>
        ${body}
      </section>`;
  }).join("");
}

/* ---------- Vídeo-aulas ---------- */
function videoaulaCard(v) {
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
}

function renderVideoaulas() {
  const items = window.VIDEOAULAS || [];
  renderGroupedBySerie(
    "lista-videoaulas",
    items,
    videoaulaCard,
    "🎬",
    "Nenhuma vídeo-aula publicada para esta série ainda."
  );
}

/* ---------- Listas de exercícios ---------- */
function listaCard(item) {
  return `
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
    </article>`;
}

function renderListas() {
  const items = window.LISTAS || [];
  renderGroupedBySerie(
    "lista-listas",
    items,
    listaCard,
    "📄",
    "Nenhuma lista disponível para esta série ainda."
  );
}

/* ---------- Aulas em HTML ---------- */
function aulaCard(item) {
  return `
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
    </article>`;
}

function renderAulas() {
  const items = window.AULAS || [];
  renderGroupedBySerie(
    "lista-aulas",
    items,
    aulaCard,
    "🧪",
    "Nenhuma aula interativa publicada para esta série ainda."
  );
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

/* ---------- Blog ---------- */
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
