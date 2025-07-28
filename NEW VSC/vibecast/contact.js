document.addEventListener('DOMContentLoaded', () => {
  const floatIns = document.querySelectorAll('.float-in');

  floatIns.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 300); // Delay based on index
  });
});
