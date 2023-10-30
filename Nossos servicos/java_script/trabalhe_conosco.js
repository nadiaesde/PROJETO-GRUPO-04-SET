// Obtém os elementos do DOM
const formularioColaborador = document.getElementById("formulario-colaborador");
const mostrarFormularioColaborador = document.getElementById("mostrarFormularioColaborador");

// Adiciona um evento de clique ao link "Contato"
mostrarFormularioContato.addEventListener("click", function () {
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        formularioContato.style.display = "block";
    } else {
        formularioContato.style.display = "none";
    }
});
mostrarFormularioContato.addEventListener("click", controladorModal );
botaoCancelar.addEventListener("click", controladorModal) 

function modalServicos(){
    let servicos = document.querySelectorAll(".item_lista")
    for (let index = 0; index < servicos.length -1; index++) {
        const element = servicos[index];
        element.addEventListener("click", function(){
            const modal= document.getElementById("modal-servicos")
            modal.innerText=""
            modal.showModal()
            modal.insertAdjacentHTML("beforeend", element.innerHTML)
            const fechar = document.createElement("button")
            fechar.classList.add("btn-cancelar")
            fechar.innerText = "X"
            
            fechar.addEventListener("click", function (){
            console.log("test 2")
            modal.close()
            })
            modal.appendChild(fechar)
        } )
    }
}
modalServicos()

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
};

