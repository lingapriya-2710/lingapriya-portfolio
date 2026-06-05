const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');
let particles = [];
let animId;

function getAccentColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
}

function initParticles() {
  cancelAnimationFrame(animId);
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  const count = Math.min(60, Math.floor(window.innerWidth / 22));
  for (let i = 0; i < count; i++) {
    particles.push({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      r:   Math.random() * 1.5 + 0.4,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  (Math.random() - 0.5) * 0.3,
      a:   Math.random() * 0.5 + 0.15,
    });
  }
  drawParticles();
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const accent = getAccentColor();

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = accent;
    ctx.globalAlpha = p.a;
    ctx.fill();

    
    for (let j = i + 1; j < particles.length; j++) {
      const q  = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = accent;
        ctx.globalAlpha = (1 - d / 100) * 0.12;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });
  ctx.globalAlpha = 1;
  animId = requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', initParticles);
initParticles();
