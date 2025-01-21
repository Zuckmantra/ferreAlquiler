const elements = document.querySelector('#menu');
const barra = document.querySelector('#desplegar');
console.log(barra);

elements.addEventListener('touchend', () =>{
    barra.classList.toggle('nav-on');
})
