document.querySelectorAll('.counter').forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      const increment = target / 200; // Adjust for speed
  
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCounter();
  });
  