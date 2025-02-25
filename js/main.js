// Espera a que el DOM se cargue
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.querySelector('.content');
  
  // Simula un pequeño retardo para mostrar la animación de carga
  setTimeout(function() {
    loader.style.display = 'none';
    content.classList.remove('hidden');
  }, 1000);
});

// Función para mostrar/ocultar la información de la puntuación
function toggleInfo(icon) {
  const infoContainer = icon.parentElement.nextElementSibling;
  infoContainer.style.display = (infoContainer.style.display === "block") ? "none" : "block";
}
