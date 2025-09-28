document.addEventListener('DOMContentLoaded', () => {
  const wmpokal = document.querySelector('.wm-pokal');
  const empokal = document.querySelector('.em-pokal');
  const canvas = document.getElementById('confetti-canvas');

  if (canvas) {
    const myConfetti = confetti.create(canvas, { resize: true });

    function triggerConfettiFromElement(element, colors) {
      const rect = element.getBoundingClientRect();
      const yPos = (rect.top + rect.height / 2) / window.innerHeight;

      myConfetti({
        particleCount: 120,
        spread: 80,
        origin: { y: yPos },
        colors: colors
      });
    }

    if (wmpokal) {
      wmpokal.addEventListener('mouseenter', () => {
        triggerConfettiFromElement(wmpokal, ['#F77F00', '#FFFFFF', '#009E60']); // Elfenbeinküste
      });
    }

    if (empokal) {
      empokal.addEventListener('mouseenter', () => {
        triggerConfettiFromElement(empokal, ['#1100ff', '#FFFFFF', '#ff0000']); // England
      });
    }
  }
});