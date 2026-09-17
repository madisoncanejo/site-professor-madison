/* Listas de exercícios — Física
   Coloque o arquivo PDF dentro da pasta /downloads/ e adicione um objeto abaixo.
   "serie" define em qual subseção a lista aparece: "1" (1ª Série), "2" (2ª Série),
   "3" (3ª Série) ou "enem" (Revisão ENEM — cruza as 3 séries e é organizada por "tema").

   Exemplo (lista de série):
   {
     serie: "2",
     tema: "Dinâmica",
     titulo: "Lista 03 — Leis de Newton",
     descricao: "12 questões sobre as três leis de Newton, com gabarito.",
     arquivo: "/downloads/lista-03-leis-de-newton.pdf",
     data: "2026-09-10"
   }

   Exemplo (lista de revisão ENEM — usa "tema" para organizar dentro da seção):
   {
     serie: "enem",
     tema: "Eletricidade",
     titulo: "Revisão ENEM — Eletrodinâmica",
     descricao: "20 questões estilo ENEM sobre circuitos elétricos.",
     arquivo: "/downloads/enem-eletrodinamica.pdf",
     data: "2026-09-16"
   }
*/
var LISTAS = [];
