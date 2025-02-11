const menu = document.querySelector('#menu');
const barra = document.querySelector('#desplegar');

if (menu && barra) {
    const toggleNav = () => {
        barra.classList.toggle('nav-on');
    };

    menu.addEventListener('click', toggleNav);
    menu.addEventListener('touchstart', toggleNav);
}