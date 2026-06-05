(function() {
  const trail = [];
  const NUM   = 8;
  for (let i = 0; i < NUM; i++) {
    const d = document.createElement('div');
    d.style.cssText = `
      position:fixed; pointer-events:none; z-index:9999;
      width:${6 - i*0.5}px; height:${6 - i*0.5}px;
      border-radius:50%; background:var(--accent);
      opacity:${0.6 - i * 0.07}; transition:none;
      transform:translate(-50%,-50%);
    `;
    document.body.appendChild(d);
    trail.push({ el: d, x: 0, y: 0 });
  }
  let mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    trail[0].x += (mx - trail[0].x) * 0.35;
    trail[0].y += (my - trail[0].y) * 0.35;
    for (let i = 1; i < NUM; i++) {
      trail[i].x += (trail[i-1].x - trail[i].x) * 0.5;
      trail[i].y += (trail[i-1].y - trail[i].y) * 0.5;
    }
    trail.forEach(t => {
      t.el.style.left = t.x + 'px';
      t.el.style.top  = t.y + 'px';
    });
    requestAnimationFrame(loop);
  })();
})();
