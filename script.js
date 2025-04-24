document.getElementById('primer-titulo').textContent = 'Adiós';

// Cambiar el color de fuente a naranja
document.getElementsByTagName('h1')[2].style.color = 'orange';

// Agregar titulo clickable que cambia a café
const clickable = document.getElementById('clickable');
clickable.addEventListener('click', function() {
    this.style.color = 'brown';
});