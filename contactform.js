const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const submitText  = document.getElementById('submitText');
const formStatus  = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitText.textContent = 'Sending...';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const data = new FormData(contactForm);

  try {
    const res = await fetch('https://formspree.io/f/xdavkqlz', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formStatus.classList.add('success');
      contactForm.reset();
      // terminal echo
      const div = document.createElement('div');
      div.className = 'term-line';
      div.innerHTML = `<span class="prompt">▶</span><span style="color:var(--success)"> 📬 New message received via contact form!</span>`;
      termOutput.appendChild(div);
    } else {
      throw new Error('Server error');
    }
  } catch {
    formStatus.textContent = '✗ Something went wrong. Please try emailing directly.';
    formStatus.classList.add('error');
  } finally {
    submitBtn.disabled = false;
    submitText.textContent = 'Send Message';
  }
});
