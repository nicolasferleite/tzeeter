const maxCaracteres = 140;

function atualizarStatus() {
    const tzeet = document.getElementById("tzeet").value;
    const contador = document.getElementById("contador");
    const botaoEnviar = document.getElementById("enviar");
    
    const caracteresRestantes = maxCaracteres - tzeet.length;
    if (tzeet.length === 0) {
        contador.style.display = "none";
        botaoEnviar.disabled = true;
    } else {
        contador.style.display = "inline";
        contador.textContent = caracteresRestantes;
        contador.classList.remove("alerta", "erro");
        if (caracteresRestantes < 0) {
            contador.classList.add("erro");
            botaoEnviar.disabled = true;
        } else if (caracteresRestantes < 40) {
            contador.classList.add("alerta");
            botaoEnviar.disabled = false;
        } else {
            botaoEnviar.disabled = false;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tzeet").addEventListener("input", atualizarStatus);
});