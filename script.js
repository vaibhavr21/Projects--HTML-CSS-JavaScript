
const cards = document.querySelectorAll('.card');


const observerOptions = {
  threshold: 0.1 
};


const observer = new IntersectionObserver((entries, observer) => {
 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      const card = entry.target;

      
      const index = Array.from(cards).indexOf(card);
      const animationName = index % 2 === 0 ? 'revealLeftToRight' : 'revealRightToLeft';

      
      card.style.animation = `${animationName} 1s forwards`;

      
      observer.unobserve(card);
    }
  });
}, observerOptions);

cards.forEach(card => observer.observe(card));