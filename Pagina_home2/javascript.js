























const formularioColaborador = document.querySelector(".formulario-modal");
const mostrarformularioColaborador = document.querySelectorAll("#mostrarFormularioColaborador");

const botaoCancelar = document.querySelector(".btn-cancelar")
// Adiciona um evento de clique ao link "Contato"
function controladorModal() {
    console.log("o evento de click foi acionado!")
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioColaborador.style.display === "none" || formularioColaborador.style.display === "") {
        formularioColaborador.style.display = "block";
        formularioColaborador.style.zIndex = "999";

    } else {
        formularioColaborador.style.display = "none";
    }
};
for (let i = 0; i < mostrarformularioColaborador.length; i++) {
    mostrarformularioColaborador[i].addEventListener("click", controladorModal);
}
botaoCancelar.addEventListener("click", controladorModal)

