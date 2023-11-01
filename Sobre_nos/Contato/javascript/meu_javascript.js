
function alternarFormularioContato() {
    const menuTexto = document.getElementById("menu-texto");
    const formularioContato = document.getElementById("formulario-contato_c");

    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        // Se o formulário estiver oculto, mostra o formulário e altera o texto do menu
        formularioContato.style.display = "block";
        formularioContato.style.zIndex = "999";        
        menuTexto.textContent = "FECHE AQUI";
        menuTexto.classList.add("cor-expressiva");
    } else {
        // Se o formulário estiver visível, esconde o formulário e volta o texto do menu
        formularioContato.style.display = "none";
        menuTexto.textContent = "CONTATO";
        menuTexto.classList.remove("cor-expressiva");        
    }
//    const formularioContato_c = document.getElementById("formulario-contato_c");
    const mostrarFormularioContato_c = document.getElementById("mostrarFormularioContato_c");
    
    // Adiciona um evento de clique ao link "Contato"
    mostrarFormularioContato_c.addEventListener("click", function () { //controladorModal() {
        //console.log("o evento de click foi acionado!")
        // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
        if (formularioContato_c.style.display === "none" || formularioContato_c.style.display === "") {
            formularioContato_c.style.display = "block";
            formularioContato_c.style.zIndex = "999";
        } else {
            formularioContato_c.style.display = "none";
        }
    });

}
