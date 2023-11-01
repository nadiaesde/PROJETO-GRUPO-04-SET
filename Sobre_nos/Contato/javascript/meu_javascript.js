const formularioContato_c = document.getElementById("formulario-contato_c");
const mostrarFormularioContato_c = document.getElementById("mostrarFormularioContato_c");

// Adiciona um evento de clique ao link "Contato"
mostrarFormularioContato_c.addEventListener("click", function () { //controladorModal() {
    console.log("o evento de click foi acionado!")
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioContato_c.style.display === "none" || formularioContato_c.style.display === "") {
        formularioContato_c.style.display = "block";
        formularioContato_c.style.zIndex = "999";
    } else {
        formularioContato_c.style.display = "none";
    }
});