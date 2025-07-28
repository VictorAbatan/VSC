document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const toggleBtn = document.getElementById('toggle-play');

  toggleBtn.addEventListener('click', () => {
    if (player.paused) {
      player.play();
      toggleBtn.textContent = '⏸️ Pause Stream';
    } else {
      player.pause();
      toggleBtn.textContent = '▶️ Play Stream';
    }
  });
});
