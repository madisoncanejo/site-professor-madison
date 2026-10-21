/* Aulas interativas em HTML — Física
   Coloque o arquivo .html dentro da pasta /aulas-html/ e adicione um objeto abaixo.
   "serie" define em qual subseção a aula aparece: "1" (1ª Série), "2" (2ª Série),
   "3" (3ª Série) ou "enem" (Revisão ENEM — cruza as 3 séries e é organizada por "tema").

   Exemplo:
   {
     serie: "3",
     tema: "Óptica",
     titulo: "Simulador de Reflexão da Luz",
     descricao: "Aula interativa com simulação de raios de luz em espelhos planos.",
     url: "/aulas-html/reflexao-da-luz.html",
     data: "2026-09-10"
   }
*/
var AULAS = [
  {
    serie: "2",
    tema: "Termodinâmica",
    titulo: "Primeira Lei da Termodinâmica — Laboratório Interativo",
    descricao: "Aula completa com simulador de gás ideal, gráficos p×V, transformações (isotérmica, isobárica, isocórica, adiabática), exemplos resolvidos e quiz final.",
    url: "/aulas-html/primeira-lei-termodinamica-interativa.html",
    data: "2026-09-17"
  },
  {
    serie: "2",
    tema: "Óptica",
    titulo: "Óptica Geométrica — Laboratório Interativo",
    descricao: "Introdução à Óptica Geométrica: fontes luminosas, raios, meios materiais, reflexão, refração, cores, sombras, eclipses e câmara escura, com simulações em tempo real e quiz com correção imediata.",
    url: "/aulas-html/optica-geometrica-interativa.html",
    data: "2026-09-19"
  },
  {
    serie: "1",
    tema: "Astronomia",
    titulo: "Somos Poeira das Estrelas — Laboratório Interativo",
    descricao: "Aula interativa (Frente A6) sobre a origem dos elementos químicos, das estrelas ao nosso corpo, com simulações e atividades.",
    url: "/aulas-html/somos-poeira-das-estrelas.html",
    data: "2026-09-20"
  },
  {
    serie: "3",
    tema: "Eletromagnetismo",
    titulo: "Campos Magnéticos — Laboratório Interativo",
    descricao: "Ímãs, polos, linhas de indução, campo uniforme, experimento de Oersted com circuito completo, fio retilíneo e espira circular, com 6 laboratórios interativos e quiz final.",
    url: "/aulas-html/campos-magneticos-interativo.html",
    data: "2026-09-22"
  },
  {
    serie: "1",
    tema: "Gravitação",
    titulo: "Leis de Kepler e Gravitação Universal — Parte 1 de 4: Sistemas planetários",
    descricao: "Primeira parte do assunto: da Terra no centro do Universo ao movimento dos planetas em torno do Sol. Aula interativa em slides.",
    url: "/aulas-html/kepler-gravitacao-1-sistemas-planetarios.html",
    data: "2026-10-14"
  },
  {
    serie: "1",
    tema: "Gravitação",
    titulo: "Leis de Kepler e Gravitação Universal — Parte 2 de 4: Leis de Kepler",
    descricao: "Segunda parte do assunto: as três leis de Kepler interpretadas com diagramas, dados e cálculos. Aula interativa em slides.",
    url: "/aulas-html/kepler-gravitacao-2-leis-de-kepler.html",
    data: "2026-10-14"
  },
  {
    serie: "1",
    tema: "Gravitação",
    titulo: "Leis de Kepler e Gravitação Universal — Parte 3 de 4: Gravitação Universal",
    descricao: "Terceira parte do assunto: a lei de Newton, a força peso, as órbitas, as marés e a velocidade de escape. Aula interativa em slides.",
    url: "/aulas-html/kepler-gravitacao-3-gravitacao-universal.html",
    data: "2026-10-14"
  },
  {
    serie: "1",
    tema: "Gravitação",
    titulo: "Leis de Kepler e Gravitação Universal — Parte 4 de 4: Evolução das estrelas",
    descricao: "Quarta parte do assunto: como se formam as estrelas a partir de nuvens de gás e poeira. Aula interativa em slides.",
    url: "/aulas-html/kepler-gravitacao-4-evolucao-das-estrelas.html",
    data: "2026-10-14"
  },
  {
    serie: "3",
    tema: "Eletrodinâmica",
    titulo: "Circuitos Elétricos — Corrente Elétrica",
    descricao: "Corrente elétrica: portadores de carga, quantização da carga, intensidade de corrente, sentido convencional, gráficos i × t, corrente contínua e alternada e efeitos da corrente. Aula interativa em slides.",
    url: "/aulas-html/circuitos-eletricos-corrente-eletrica.html",
    data: "2026-10-21"
  },
  {
    serie: "3",
    tema: "Eletrodinâmica",
    titulo: "Resistores — Resistência Elétrica e Lei de Ohm",
    descricao: "Resistência elétrica: fatores que a influenciam, resistividade, Primeira Lei de Ohm, gráficos U × i e resistores não ôhmicos. Aula interativa em slides, com laboratórios e exercícios.",
    url: "/aulas-html/resistores-resistencia-eletrica.html",
    data: "2026-10-21"
  },
  {
    serie: "3",
    tema: "Eletrodinâmica",
    titulo: "Tipos de Resistores e Associação de Resistores",
    descricao: "Tipos de resistores e associação em série, em paralelo e mista, com exemplos resolvidos, simulações e exercícios. Aula interativa em slides.",
    url: "/aulas-html/tipos-associacao-resistores.html",
    data: "2026-10-21"
  }
];
