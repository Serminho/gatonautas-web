const url = 'https://gatonautas-web.onrender.com/';
let i = 0;

async function getGatos() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao tentar acessar a API");
    }
    const gatos = await response.json();
    localStorage.setItem("gatos", JSON.stringify(gatos));
    for (gato of gatos) {
      gerarImagens(gato);
    }
  } catch (error) {
    console.error("Error: " + error);
  }
}

if (localStorage.getItem("gatos")) {
  const gatos = JSON.parse(localStorage.getItem("gatos"));
  for (gato of gatos) {
    gerarImagens(gato);
  }
} else {
  getGatos();
}

function gerarImagens(gato) {
  let figure = document.createElement("figure");
  let caption = document.createElement("figcaption");
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.setAttribute("src", gato.url);
  div.classList.add("menu-card");
  caption.innerHTML = `<h3>${tripulacaoEspacial[i].nome}</h3><br/> <h4>${tripulacaoEspacial[i].funcao}</h4><br/> ${tripulacaoEspacial[i].descricao}` ;

  figure.appendChild(img);
  figure.appendChild(caption);
  div.appendChild(figure);
  document.getElementById("tripulacao").appendChild(div);
  i++;
}
