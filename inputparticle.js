document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
  el.addEventListener('focus', () => {
    el.style.transform = 'scale(1.01)';
    el.style.transition = 'transform 0.2s';
  });
  el.addEventListener('blur', () => {
    el.style.transform = 'scale(1)';
  });
});
