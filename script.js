const elements = document.querySelector('#menu');
const barra = document.querySelector('#desplegable');
console.log(barra);

elements.addEventListener('click', () =>{
    elements.classList.toggle('nav-on');
})