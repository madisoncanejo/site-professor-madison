# Site — Professor Madison

Site estático (HTML/CSS/JS puro, sem build) com duas áreas — **Física** e **Teologia** — escolhidas na página inicial.

## Estrutura

```
index.html              → página inicial (escolher Física ou Teologia)
fisica/                  → hub de Física + vídeo-aulas, listas, aulas, games, blog
teologia/                → hub de Teologia + Bíblia, ebooks, blog
assets/css/style.css     → estilos (cores da marca, tipografia, layout)
assets/js/layout.js      → monta o cabeçalho/rodapé/menu em todas as páginas
assets/js/render.js      → monta os cards de conteúdo a partir dos arquivos em /data
data/*.js                → "banco de dados" do site (arrays editáveis)
downloads/               → PDFs das listas de exercícios de Física
aulas-html/               → aulas interativas em HTML de Física
games-html/                → games em HTML de Física
ebooks-teologia/          → PDFs/EPUBs de Teologia
```

## Como adicionar conteúdo (sem mexer no HTML)

Cada seção lê uma lista de itens de um arquivo em `/data`. Basta editar o arquivo e adicionar
um objeto no formato mostrado no comentário do próprio arquivo:

| Seção                          | Arquivo de dados              | Onde colocar o arquivo (se houver) |
|--------------------------------|--------------------------------|--------------------------------------|
| Vídeo-aulas (Física)           | `data/videoaulas.js`          | —, só o link/ID do YouTube          |
| Listas de exercícios (Física)  | `data/listas.js`              | `downloads/`                         |
| Aulas interativas (Física)     | `data/aulas.js`                | `aulas-html/`                        |
| Games (Física)                 | `data/games.js`                | `games-html/`                        |
| Blog (Física)                  | `data/blog-fisica.js`         | `fisica/blog/` (copie `fisica/post-modelo.html`) |
| Ebooks (Teologia)              | `data/ebooks.js`                | `ebooks-teologia/`                   |
| Blog (Teologia)                | `data/blog-teologia.js`       | `teologia/blog/` (copie `teologia/post-modelo.html`) |

**Vídeo-aulas, Listas de exercícios e Aulas interativas** são divididas por série do Ensino
Médio. Cada item nesses três arquivos de dados precisa de um campo `serie` com o valor `"1"`,
`"2"` ou `"3"` (1ª, 2ª ou 3ª série), que determina em qual subseção da página ele aparece.

A seção **Bíblia** não precisa de conteúdo manual: ela busca o texto (versão Almeida, domínio
público) em tempo real na API pública gratuita [bible-api.com](https://bible-api.com).

## Redes sociais e marca

Os links de YouTube, Instagram e TikTok e a logo ficam centralizados em
`assets/js/layout.js` (constantes `SOCIAL_LINKS` e `LOGO_SVG`) — mude em um lugar só e
atualiza em todo o site.

## Testar localmente

Como as páginas usam caminhos absolutos (`/assets/...`), abrir o `index.html` direto no
navegador (`file://`) não funciona bem. Rode um servidor local simples a partir desta pasta:

```bash
# opção 1 — Python (já vem instalado na maioria dos sistemas)
python -m http.server 8000

# opção 2 — Node (não precisa instalar nada globalmente)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Publicar (deploy)

Este site é 100% estático — pode ser publicado gratuitamente em serviços como
**Netlify**, **Vercel**, **Cloudflare Pages** ou **GitHub Pages**, bastando enviar esta
pasta (`site-professor-madison`) como raiz do projeto.

## Próximos passos (venda futura)

Por enquanto o site não vende nada. Quando quiser vender livros, ebooks e aulas, a estrutura
atual (hub por seção + cards de item) se adapta bem a uma seção "Loja" nova, ou a um serviço
de checkout externo (Hotmart, Kiwify, Stripe Checkout etc.) linkado a partir dos cards
existentes — sem precisar redesenhar o site.
