const planetas = [
  {
    id: "mercury",
    nome: "Mercúrio",
    tipo: "Sistema Solar",
    visitado: true,
    dataVisita: "2026-03-12",
    missaoFeline: "Operação Caixa de Areia Aquecida",
    descricaoGeral:
      "O primeiro planeta do sistema. Os gatos astronautas estabeleceram colônias subterrâneas para fugir do calor extremo.",
    descricao:
      "Instalação de mega-espelhos orbitais paraD refletir a luz solar e resfriar a superfície, criando zonas temperadas para os felinos.",
  },
  {
    id: "jupiter",
    nome: "Júpiter",
    tipo: "Sistema Solar",
    visitado: false,
    dataVisita: null,
    missaoFeline: "Operação Arranhador de Gás",
    descricaoGeral:
      "As tempestades de Júpiter ainda são violentas demais para os trajes espaciais felinos. Sondas orbitais planejam a extração de gases leves.",
    descricao:
      "Planejado: Construção de cidades flutuantes na alta atmosfera para minerar hélio e criar centros de gravidade artificial.",
  },
  {
    id: "venus",
    nome: "Vênus",
    tipo: "Sistema Solar",
    visitado: true,
    dataVisita: "2026-04-01",
    missaoFeline: "Operação Banho de Vapor",
    descricaoGeral:
      "Um mundo infernal de ácido e calor. Os cientistas felinos desenvolveram trajes especiais de teflon para explorar seus céus.",
    descricao:
      "Introdução de algas geneticamente modificadas na alta atmosfera para consumir o gás carbônico e reduzir o efeito estufa.",
  },
  {
    id: "HD 189733b",
    nome: "HD 189733b",
    tipo: "Exoplaneta",
    visitado: false,
    dataVisita: null,
    missaoFeline: "Missão Escudo de Vidro",
    descricaoGeral:
      "Um planeta hostil onde chove vidro lateralmente. Classificado como zona de extremo perigo para qualquer cauda felina.",
    descricao:
      "Planejado: Bombardeamento atmosférico com partículas neutralizadoras para derreter o silício suspenso antes que ele atinja a superfície.",
  },
  {
    id: "saturn",
    nome: "Saturno",
    tipo: "Sistema Solar",
    visitado: false,
    dataVisita: null,
    missaoFeline: "Projeto Super Arranhador Orbital",
    descricaoGeral:
      "O planeta dos anéis impressiona os felinos. A gravidade dos anéis de gelo está sendo estudada para criar pistas de corrida gravitacionais.",
    descricao:
      "Planejado: Ancoragem de estações espaciais nos anéis externos para captação de água pura congelada.",
  },
  {
    id: "Kepler-22b",
    nome: "Kepler-22b",
    tipo: "Exoplaneta",
    visitado: true,
    dataVisita: "2026-02-18",
    missaoFeline: "Missão Novo Horizonte Felino",
    descricaoGeral:
      "Um mundo massivo e oceânico orbitando uma estrela parecida com o Sol. Um verdadeiro paraíso para pescadores espaciais.",

    descricao:
      "Construção de plataformas flutuantes bio-sustentáveis e introdução de fauna marinha compatível para alimentação da frota.",
  },
];

async function getDadosNasa() {
  for (let i = 0; i < 6; i++) {
    const planeta = planetas.pop();
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(planeta.id)}&media_type=image`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao tentar acessar a API: " + response.status);
      }
      const data = await response.json();

      const itens = data.collection.items;
      if (itens && itens.length > 0) {
        const limite = Math.min(itens.length, 5);
        const itemAleatorio = itens[Math.floor(Math.random() * limite)];
        const titulo = itemAleatorio.data[0].title;
        const linkMidia = itemAleatorio.href;

        const respostaMidia = await fetch(linkMidia);
        const linksFotos = await respostaMidia.json();
        const urlImagemFinal = linksFotos[0];

        console.log(urlImagemFinal);
        gerarImagens(planeta, urlImagemFinal, titulo);
      }
    } catch (error) {
      console.error("erro:" + error);
    }
  }
}
getDadosNasa();

function gerarImagens(planeta, url, titulo) {
  let figure = document.createElement("figure");
  let caption = document.createElement("figcaption");
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.setAttribute("alt", titulo);
  img.setAttribute("src", url);
  div.classList.add("menu-card");
  let visitado = planeta.visitado ? `<h5>Planeta Visitado</h5><h5>Data da Visita: ${planeta.dataVisita}</h5><br/>`: "<h5>Não visitado </h5><br/>";
  
  caption.innerHTML = `<h3>${planeta.nome}</h3><h5>${planeta.tipo}</h5><br/>${visitado}<h4>${planeta.missaoFeline}</h4><h5>${planeta.descricaoGeral}</h5><br/><h6>${planeta.descricao}</h6><br/>`;

  figure.appendChild(img);
  figure.appendChild(caption);
  div.appendChild(figure);
  document.getElementById("galeria").appendChild(div);
}
