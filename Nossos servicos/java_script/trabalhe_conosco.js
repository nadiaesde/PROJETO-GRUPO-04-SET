
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


