document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
  });
  