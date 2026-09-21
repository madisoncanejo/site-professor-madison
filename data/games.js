/* Games em HTML — Física
   Coloque o arquivo .html dentro da pasta /games-html/ e adicione um objeto abaixo.
   "serie": "1", "2", "3" ou "enem" (define a subseção onde o game aparece).
   "aulaTitulo" e "aulaUrl" (opcionais): aula interativa relacionada; o card mostra um
   aviso convidando o estudante a estudar a aula antes de jogar.

   Exemplo:
   {
     serie: "1",
     tema: "Cinemática",
     titulo: "Corrida dos Vetores",
     descricao: "Jogo para praticar soma e decomposição de vetores.",
     aulaTitulo: "Vetores — Laboratório Interativo (1ª Série)",
     aulaUrl: "/aulas-html/vetores.html",
     url: "/games-html/corrida-dos-vetores.html",
     data: "2026-09-10"
   }
*/
var GAMES = [
  {
    serie: "1",
    tema: "Astronomia",
    titulo: "Defensor Estelar",
    descricao: "Game baseado no capítulo \"Somos Poeira das Estrelas\", sobre a origem dos elementos químicos.",
    aulaTitulo: "Somos Poeira das Estrelas — estudo interativo da 1ª Série do Ensino Médio",
    aulaUrl: "/aulas-html/somos-poeira-das-estrelas.html",
    url: "/games-html/defensor-estelar.html",
    data: "2026-09-20"
  },
  {
    serie: "2",
    tema: "Termodinâmica",
    titulo: "Missão Termodinâmica — Arcade da 1ª Lei",
    descricao: "Game estilo arcade sobre a 1ª Lei da Termodinâmica (processos isotérmico, isocórico, isobárico e adiabático).",
    aulaTitulo: "Primeira Lei da Termodinâmica — estudo interativo da 2ª Série do Ensino Médio",
    aulaUrl: "/aulas-html/primeira-lei-termodinamica-interativa.html",
    url: "/games-html/termo1-arcade.html",
    data: "2026-09-17"
  },
  {
    serie: "2",
    tema: "Óptica",
    titulo: "Caça-Luz — Missão Óptica",
    descricao: "Game sobre Óptica Geométrica: raios de luz, reflexão, refração e propagação da luz.",
    aulaTitulo: "Óptica Geométrica — estudo interativo da 2ª Série do Ensino Médio",
    aulaUrl: "/aulas-html/optica-geometrica-interativa.html",
    url: "/games-html/caca-luz-optica.html",
    data: "2026-09-21"
  }
];
