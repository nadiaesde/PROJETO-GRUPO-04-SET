// Obtém os elementos do DOM
const formularioColaborador = document.getElementById("formulario-colaborador");
const mostrarFormularioColaborador = document.getElementById("mostrarFormularioColaborador");

// Adiciona um evento de clique ao link "Contato"
mostrarFormularioContato.addEventListener("click", function () {
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioColaborador.style.display === "none" || formularioColaborador.style.display === "") {
        formularioColaborador.style.display = "block";
    } else {
        formularioColaborador.style.display = "none";
    }
});