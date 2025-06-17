let currentIndex = 0;

function slideIcons(direction) {
  const carousel = document.querySelector('.icon-carousel');
  const cards = document.querySelectorAll('.icon-card');

  if (!carousel || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 40; // card + gap
  const maxIndex = cards.length - 1;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = maxIndex;
  if (currentIndex > maxIndex) currentIndex = 0;

  carousel.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
}
