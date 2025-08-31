// Konfetti-Effekt beim Hover über den WM-Pokal
document.addEventListener('DOMContentLoaded', () => {
  const pokal = document.querySelector('.wm-pokal');
  const canvas = document.getElementById('confetti-canvas');

  if (pokal && canvas) {
    const myConfetti = confetti.create(canvas, { resize: true });

    pokal.addEventListener('mouseenter', () => {
      myConfetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F77F00', '#FFFFFF', '#009E60'] // Elfenbeinküste-Farben
      });
    });
  }
});