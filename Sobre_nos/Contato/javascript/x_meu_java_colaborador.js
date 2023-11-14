function alternarFormularioColaborador() {
    const menuTexto = document.getElementById("menu-texto-colaborador");
    const formularioColaborador = document.getElementById("formulario-colaborador");

    // const formularioColaborador_c = document.getElementById("formulario-colaborador");

    if (formularioColaborador.style.display === "none" || formularioColaborador.style.display === "") {
        // Se o formulário estiver oculto, mostra o formulário e altera o texto do menu
        formularioColaborador.style.display = "block";
        formularioColaborador.style.zIndex = "999";        
        menuTexto.textContent = "FECHE AQUI";
        menuTexto.classList.add("cor-expressiva");
    } else {
        // Se o formulário estiver visível, esconde o formulário e volta o texto do menu
        formularioColaborador.style.display = "none";
        menuTexto.textContent = "TRABALHE CONOSCO";
        menuTexto.classList.remove("cor-expressiva");        
    }
    const mostrarFormularioColaborador = document.getElementById("mostrarFormularioColaborador");
    
    // Adiciona um evento de clique ao link "Contato"
    mostrarFormularioColaborador.addEventListener("click", function () { //controladorModal() {
        //console.log("o evento de click foi acionado!")
        // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
        if (formularioColaborador_c.style.display === "none" || formularioColaborador_c.style.display === "") {
            formularioColaborador_c.style.display = "block";
            formularioColaborador_c.style.zIndex = "999";
        } else {
            formularioColaborador.style.display = "none";
        }
    });

}
