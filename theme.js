const themeToggleBtn = document.getElementById('themeToggleBtn');
const themePanel     = document.getElementById('themePanel');
const themeBtns      = document.querySelectorAll('.theme-btn');

themeToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themePanel.classList.toggle('open');
});

document.addEventListener('click', () => themePanel.classList.remove('open'));
themePanel.addEventListener('click', (e) => e.stopPropagation());

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
    themeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    themePanel.classList.remove('open');
  
    setTimeout(initParticles, 100);
  });
});
