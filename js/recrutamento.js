const volunteerForm = document.getElementById("volunteerForm");
const ronrometria = document.getElementById("ronrometria");
const ronrometroValor = document.getElementById("ronrometroValor");
const feedback = document.getElementById("feedback");
const clearButton = document.getElementById("clearHologramas");

function criarHolograma(nome, mensagem){
    const hologramBoard = document.getElementById("hologramBoard");
    const hologramMessage = document.createElement("div");

    hologramMessage.classList.add("hologram-message");
    hologramMessage.innerHTML = `<h4>🐱 ${nome}</h4>
    <p>${mensagem}</p>`;
    hologramBoard.prepend(hologramMessage);
}

function initRecruitmentForm(){
    if(!volunteerForm || !ronrometria || !ronrometroValor || !feedback) {
        return;
    }
    
    const hologramasSalvos = JSON.parse(localStorage.getItem("hologramas")) || [];
    hologramasSalvos.forEach((holograma) => {
        criarHolograma(holograma.nome, holograma.mensagem);
    });

    ronrometria.addEventListener("input", () => {
        ronrometroValor.textContent =
            ronrometria.value;
        }
    );

    if(clearButton){
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("hologramas");
        document.getElementById("hologramBoard").innerHTML = "";
        feedback.style.display = "block";
        feedback.style.background = "rgba(255, 120, 0, 0.15)";
        feedback.style.border = "1px solid rgba(255, 120, 0, 0.4)";
        feedback.innerHTML = "🛰️ Sala de hologramas reiniciada.";
    });
}

    volunteerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const idade = document.getElementById("idade").value.trim();
        const funcao = document.getElementById("funcao").value;
        const mensagem = document.getElementById("mensagem").value.trim();
        const medo = document.querySelector('input[name="medo"]:checked');
        if(nome === "" || email === "" || idade === "" || funcao === "" || mensagem === "" || !medo) {
            feedback.style.display = "block";
            feedback.style.background = "rgba(255,0,0,0.2)";
            feedback.style.border = "1px solid rgba(255,0,0,0.5)";
            feedback.innerHTML = "⚠️ Preencha todos os campos da missão.";
            return;
        }
        
        const nivelRonrometria = Number(ronrometria.value);
        let classificacao = "";
        let mensagemFinal = "";
        if(nivelRonrometria >= 80 && medo.value === "nao") {
            classificacao = "🐱 Gato Supremo Intergaláctico";
            mensagemFinal = "Você demonstrou coragem e habilidades extraordinárias.";
        }
        else if(nivelRonrometria >= 50) {
            classificacao = "🚀 Explorador Espacial";
            mensagemFinal = "Você possui potencial para integrar a missão.";
        }
        else{
            classificacao = "🛠️ Estagiário de Ronrons";
            mensagemFinal = "A tripulação recomenda treinamento adicional.";
        }
        
        feedback.style.display = "block";
        feedback.style.background = "rgba(0,255,120,0.15)";
        feedback.style.border = "1px solid rgba(0,255,120,0.4)";
        feedback.innerHTML = `<h3>Recrutamento enviado com sucesso!</h3>
        <p>Bem-vindo(a) à Gaton IX, <strong>${nome}</strong>.</p>
        <p>Classificação: <strong>${classificacao}</strong></p>
        <p>${mensagemFinal}</p>`;
        
        criarHolograma(nome, mensagem);

        const hologramasSalvos = JSON.parse(localStorage.getItem("hologramas")) || [];
        hologramasSalvos.push({
            nome, mensagem
        });
        localStorage.setItem("hologramas", JSON.stringify(hologramasSalvos));
        
        volunteerForm.reset();
        ronrometroValor.textContent = "50";
    });
}

document.addEventListener("DOMContentLoaded", initRecruitmentForm);