const formularioColaborador = document.querySelector(".formulario-modal");
const mostrarformularioColaborador = document.getElementById("mostrarFormularioColaborador");

const botaoCancelar = document.querySelector(".btn-cancelar")
// Adiciona um evento de clique ao link "Contato"
function controladorModal() {
        // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioColaborador.style.display === "none" || formularioColaborador.style.display === "") {
        formularioColaborador.style.display = "block";
        formularioColaborador.style.zIndex = "999";

    } else {
        formularioColaborador.style.display = "none";
    }
};
mostrarformularioColaborador.addEventListener("click", controladorModal );
botaoCancelar.addEventListener("click", controladorModal) 