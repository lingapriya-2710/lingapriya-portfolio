function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.animation = 'none';
    bar.offsetHeight; // reflow
    bar.style.animation = '';
  });
}
