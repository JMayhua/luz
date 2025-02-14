// Seleccionar elementos
const boton = document.getElementById('boton');
const sorpresa = document.getElementById('sorpresa');
const musica = document.getElementById('musica');

// Mostrar sorpresa al hacer clic en el botón
boton.addEventListener('click', () => {
    sorpresa.classList.remove('hidden');
    boton.textContent = '¡Te amo!';
    musica.play(); // Reproducir música de fondo
});

// Animación adicional para la sorpresa
sorpresa.style.opacity = 0;
let opacity = 0;
const fadeIn = setInterval(() => {
    if (opacity < 1) {
        opacity += 0.1;
        sorpresa.style.opacity = opacity;
    } else {
        clearInterval(fadeIn);
    }
}, 100);