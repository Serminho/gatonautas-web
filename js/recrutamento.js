const volunteerForm = document.getElementById("volunteerForm");
const ronrometria = document.getElementById("ronrometria");
const ronrometroValor = document.getElementById("ronrometroValor");
const feedback = document.getElementById("feedback");

function initRecruitmentForm(){
    if(!volunteerForm || !ronrometria || !ronrometroValor || !feedback) {
        return;
    }

    ronrometria.addEventListener("input", () => {
        ronrometroValor.textContent =
            ronrometria.value;
        }
    );

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
        feedback.style.display = "block";
        feedback.style.background = "rgba(0,255,120,0.15)";
        feedback.style.border = "1px solid rgba(0,255,120,0.4)";
        feedback.innerHTML = `🚀 Recrutamento enviado com sucesso!
        <br>Bem-vindo(a) à Gaton IX, ${nome}.`;
        volunteerForm.reset();
        ronrometroValor.textContent = "50";
    });
}

document.addEventListener("DOMContentLoaded", initRecruitmentForm);