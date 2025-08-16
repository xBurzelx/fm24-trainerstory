document.addEventListener("DOMContentLoaded", () => {
  // 🌌 Partikel-Canvas
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.dx = (Math.random() - 0.5) * 0.5;
      this.dy = (Math.random() - 0.5) * 0.5;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
    }

    update() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

      this.draw();
    }
  }

  function initParticles(count = 100) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    requestAnimationFrame(animate);
  }
  animate();
});

// 🏁 Zufällige Positionierung der Chaos-Flaggen im Header
window.addEventListener("load", () => {
  const flags = document.querySelectorAll('.flag.chaos');
  const header = document.querySelector('.header');

  const headerWidth = header.offsetWidth;
  const headerHeight = header.offsetHeight;

  flags.forEach(flag => {
    const top = Math.random() * (headerHeight - 80);
    const left = Math.random() * (headerWidth - 60);
    const angle = Math.random() * 60 - 30;

    flag.style.top = `${top}px`;
    flag.style.left = `${left}px`;
    flag.style.setProperty('--angle', `${angle}deg`);
  });
});

document.querySelectorAll(".kapitel-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Filterfunktion
document.querySelectorAll(".filter-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    document.querySelectorAll(".flag-marker").forEach(marker => {
      if (filter === "all" || marker.classList.contains(filter)) {
        marker.style.display = "block";
      } else {
        marker.style.display = "none";
      }
    });
  });
});
