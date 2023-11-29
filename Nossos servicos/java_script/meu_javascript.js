function alternarFormularioContato() {
    const menuTexto = document.querySelectorAll("#menu-texto");
    const formularioContato = document.getElementById("formulario-contato_c");
    const mostrarFormularioContato_c = document.querySelectorAll("#mostrarFormularioContato_c");

    for (let i = 0; i < mostrarFormularioContato_c.length; i++) {
        // Adiciona um evento de clique ao link "Contato"
        mostrarFormularioContato_c[i].addEventListener("click", function () { //controladorModal() {
            console.log('clicou')
            //console.log("o evento de click foi acionado!")
            // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
            if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
                formularioContato.style.display = "block";
                formularioContato.style.zIndex = "999";
                menuTexto[i].innerText = "FECHE AQUI";
                menuTexto[i].classList.add("cor-expressiva");
            } else {
                formularioContato.style.display = "none";
                menuTexto[i].innerText = "CONTATO";
                menuTexto[i].classList.remove("cor-expressiva");
            }

        });
    }
}
alternarFormularioContato()
function alternarFormularioColaborador() {
    const menuTextoColaborador = document.getElementById("menu-texto-colaborador");
    const formularioColaborador = document.getElementById("formulario-colaborador");

    //const formularioColaborador = document.getElementById("formulario-colaborador");

    if (formularioColaborador.style.display === "none" || formularioColaborador.style.display === "") {
        // Se o formulário estiver oculto, mostra o formulário e altera o texto do menu
        formularioColaborador.style.display = "block";
        formularioColaborador.style.zIndex = "999";
        //        menuTextoColaborador.textContent = "FECHE AQUI";
        //        menuTextoColaborador.classList.add("cor-expressiva");
    } else {
        // Se o formulário estiver visível, esconde o formulário e volta o texto do menu
        formularioColaborador.style.display = "none";
        menuTextoColaborador.textContent = "TRABALHE CONOSCO";
        menuTextoColaborador.classList.remove("cor-expressiva");
    }
    const mostrarFormularioColaborador = document.getElementById("mostrarFormularioColaborador");

    // Adiciona um evento de clique ao link "Contato"
    mostrarFormularioColaborador.addEventListener("click", function () { //controladorModal() {
        //console.log("o evento de click foi acionado!")
        // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
        if (formularioContato_c.style.display === "none" || formularioContato_c.style.display === "") {
            formularioCoformularioContato_c.style.display = "block";
            formularioContato_c.style.zIndex = "999";
        } else {
            formularioContato_c.style.display = "none";
        }
    });

}
