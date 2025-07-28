// about.js

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');

  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
