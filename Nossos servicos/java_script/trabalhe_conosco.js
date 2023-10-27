// Obtém os elementos do DOM
const formularioContato = document.getElementById("formulario-modal");
const mostrarFormularioContato = document.getElementById("mostrarFormularioColaborador");
const botaoCancelar = document.querySelector(".btn-cancelar")
// Adiciona um evento de clique ao link "Contato"
function controladorModal() {
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        formularioContato.style.display = "block";
    } else {
        formularioContato.style.display = "none";
    }
}
mostrarFormularioContato.addEventListener("click", controladorModal );
botaoCancelar.addEventListener("click", controladorModal) 
