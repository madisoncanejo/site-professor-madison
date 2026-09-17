# Site — Professor Madison

Site estático de Física (HTML/CSS/JS puro, sem build). Publicado em [professormadison.com.br](https://professormadison.com.br).

> Nota: este site já teve uma área de Teologia, removida para manter o foco em Física — a Teologia vai ganhar um site próprio no futuro.

## Estrutura

```
index.html              → página inicial / hub de Física
fisica/                  → vídeo-aulas, listas, aulas, games, blog
  fisica/index.html      → redireciona para "/" (mantido por compatibilidade de links)
assets/css/style.css     → estilos (cores da marca, tipografia, layout)
assets/js/layout.js      → monta o cabeçalho/rodapé/menu em todas as páginas
assets/js/render.js      → monta os cards de conteúdo a partir dos arquivos em /data
data/*.js                → "banco de dados" do site (arrays editáveis)
downloads/               → PDFs das listas de exercícios
aulas-html/               → aulas interativas em HTML
games-html/                → games em HTML
```

## Como adicionar conteúdo (sem mexer no HTML)

Cada seção lê uma lista de itens de um arquivo em `/data`. Basta editar o arquivo e adicionar
um objeto no formato mostrado no comentário do próprio arquivo:

| Seção                  | Arquivo de dados       | Onde colocar o arquivo (se houver) |
|-------------------------|--------------------------|--------------------------------------|
| Vídeo-aulas             | `data/videoaulas.js`   | —, só o link/ID do YouTube          |
| Listas de exercícios    | `data/listas.js`       | `downloads/`                         |
| Aulas interativas       | `data/aulas.js`         | `aulas-html/`                        |
| Games                   | `data/games.js`         | `games-html/`                        |
| Blog                    | `data/blog-fisica.js`  | `fisica/blog/` (copie `fisica/post-modelo.html`) |

**Vídeo-aulas, Listas de exercícios e Aulas interativas** são divididas por série do Ensino
Médio. Cada item nesses três arquivos de dados precisa de um campo `serie` com o valor `"1"`,
`"2"`, `"3"` (1ª, 2ª ou 3ª série) ou `"enem"`, que determina em qual subseção da página ele
aparece.

A subseção **`"enem"` (Revisão ENEM)** é para conteúdo que cruza as 3 séries — em vez de
listar os itens soltos, ela os agrupa pelo campo `tema` (ex: "Mecânica", "Eletricidade",
"Óptica"), já que revisão de ENEM normalmente não é presa a um ano específico.

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

Publicado via **GitHub Pages** a partir do repositório
[github.com/madisoncanejo/site-professor-madison](https://github.com/madisoncanejo/site-professor-madison),
com domínio próprio `professormadison.com.br` e HTTPS ativo.

## Próximos passos (venda futura)

Por enquanto o site não vende nada. Quando quiser vender livros, ebooks e aulas, a estrutura
atual (hub por seção + cards de item) se adapta bem a uma seção "Loja" nova, ou a um serviço
de checkout externo (Hotmart, Kiwify, Stripe Checkout etc.) linkado a partir dos cards
existentes — sem precisar redesenhar o site.
