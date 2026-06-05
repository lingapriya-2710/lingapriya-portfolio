function switchTab(tabId) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('tab-' + tabId);
  const btn  = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (page) page.classList.add('active');
  if (btn)  btn.classList.add('active');
  // animate skill bars when skills tab opens
  if (tabId === 'skills') animateSkillBars();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});
