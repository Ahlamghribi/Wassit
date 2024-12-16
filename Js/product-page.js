document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    // Fonction pour afficher l'image en fonction de l'index
    function showImage(index) {
      const offset = -index * 100; // Déplace le carrousel pour afficher l'image
      document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }
  
    // Fonction pour naviguer à l'image précédente
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
      showImage(currentIndex);
    });
  
    // Fonction pour naviguer à l'image suivante
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
    });
  
    // Initialiser le carrousel
    showImage(currentIndex);
  });
  