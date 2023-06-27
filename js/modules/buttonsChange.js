export function initializeButtonListeners() {
    const buttons = document.querySelectorAll('.category-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Eliminar la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));
  
        // Agregar la clase 'active' al botón actualmente clicado
        button.classList.add('active');
      });
    });
  }
  