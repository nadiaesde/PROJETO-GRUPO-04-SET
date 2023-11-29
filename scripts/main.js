function openHamburger() {
    const botao = document.querySelector('.hamburger')
    const menu = document.querySelector('.menu_hamburger')
    botao.addEventListener('click', () => {
        menu.classList.toggle('open_menu')
    })
}
openHamburger()