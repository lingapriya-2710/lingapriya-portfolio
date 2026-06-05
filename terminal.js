const termOutput = document.getElementById('termOutput');
const termInput  = document.getElementById('termInput');
const termClear  = document.getElementById('termClear');

const COMMANDS = {
  root: () => [
    { type: 'separator' },
    { type: 'line', text: '📁  Available Commands:', bold: true },
    { type: 'line', text: '  about      → Who am I' },
    { type: 'line', text: '  skills     → My tech stack' },
    { type: 'line', text: '  projects   → What I built' },
    { type: 'line', text: '  contact    → Reach out to me' },
    { type: 'line', text: '  education  → My academic background' },
    { type: 'line', text: '  fun        → A little surprise 🎉' },
    { type: 'line', text: '  clear      → Clear terminal' },
    { type: 'separator' },
  ],
  about: () => [
    { type: 'separator' },
    { type: 'line', text: '👩‍💻  LINGA PRIYA', accent: true },
    { type: 'line', text: '─────────────────────────────────────' },
    { type: 'line', text: '  Name     : Linga Priya' },
    { type: 'line', text: '  Role     : B.Tech IT Student' },
    { type: 'line', text: '  College  : Sathyabama Institute of' },
    { type: 'line', text: '             Science and Technology' },
    { type: 'line', text: '  Email    : lingapriyasasikumar2710' },
    { type: 'line', text: '             @gmail.com' },
    { type: 'line', text: '  Passion  : Building web apps &' },
    { type: 'line', text: '             solving real-world problems' },
    { type: 'separator' },
  ],
  skills: () => [
    { type: 'separator' },
    { type: 'line', text: '🛠  SKILLS', accent: true },
    { type: 'line', text: '─────────────────────────────────────' },
    { type: 'line', text: '  Frontend  : HTML  ████████████ 90%' },
    { type: 'line', text: '             CSS   ██████████▒  85%' },
    { type: 'line', text: '             JS    ████████▒▒▒  80%' },
    { type: 'line', text: '             React ███████▒▒▒▒  75%' },
    { type: 'line', text: '  Backend   : Python ██████████  85%' },
    { type: 'line', text: '             Java   ███████▒▒▒   75%' },
    { type: 'line', text: '  Special   : Machine Learning 🤖' },
    { type: 'separator' },
  ],
  projects: () => [
    { type: 'separator' },
    { type: 'line', text: '🚀  PROJECTS', accent: true },
    { type: 'line', text: '─────────────────────────────────────' },
    { type: 'line', text: '  [1] 🌦 Weather App' },
    { type: 'line', text: '      Real-time weather dashboard' },
    { type: 'line', text: '      Stack: JavaScript, HTML/CSS, API' },
    { type: 'line', text: '      GitHub: github.com/lingapriya-2710' },
    { type: 'separator' },
  ],
  contact: () => [
    { type: 'separator' },
    { type: 'line', text: '📬  CONTACT', accent: true },
    { type: 'line', text: '─────────────────────────────────────' },
    { type: 'line', text: '  Email    : lingapriyasasikumar2710' },
    { type: 'line', text: '             @gmail.com' },
    { type: 'line', text: '  LinkedIn : linkedin.com/in/' },
    { type: 'line', text: '             linga-priya271013' },
    { type: 'line', text: '  GitHub   : github.com/lingapriya-2710' },
    { type: 'separator' },
  ],
  education: () => [
    { type: 'separator' },
    { type: 'line', text: '🎓  EDUCATION', accent: true },
    { type: 'line', text: '─────────────────────────────────────' },
    { type: 'line', text: '  Degree   : B.Tech Information Technology' },
    { type: 'line', text: '  College  : Sathyabama Institute of' },
    { type: 'line', text: '             Science and Technology' },
    { type: 'line', text: '  Location : Chennai, Tamil Nadu, India' },
    { type: 'separator' },
  ],
  fun: () => {
    const funs = [
      '🎉  Did you know? The first computer bug was an actual bug (a moth) found in a relay of the Harvard Mark II computer in 1947!',
      '🧠  Fun fact: Python is named after Monty Python, not the snake!',
      '☕  I debug at 2AM with cold coffee and sheer determination.',
      '🌊  "First, solve the problem. Then, write the code." — John Johnson',
      '🤖  Machine Learning is just statistics that went to the gym.',
      '🌟  "It always seems impossible until it\'s done." — Nelson Mandela',
    ];
    const pick = funs[Math.floor(Math.random() * funs.length)];
    return [
      { type: 'separator' },
      { type: 'line', text: '✨  FUN MODE', accent: true },
      { type: 'line', text: '─────────────────────────────────────' },
      { type: 'line', text: '  ' + pick },
      { type: 'separator' },
    ];
  },
  clear: () => { clearTerminal(); return []; },
  help: () => COMMANDS.root(),
};

function printLine(obj) {
  if (obj.type === 'separator') {
    const hr = document.createElement('hr');
    hr.className = 'term-sep';
    termOutput.appendChild(hr);
    return;
  }
  const div = document.createElement('div');
  div.className = 'term-line';
  const span = document.createElement('span');
  if (obj.accent) span.style.color = 'var(--accent)';
  if (obj.bold)   span.style.fontWeight = 'bold';
  span.textContent = obj.text;
  div.appendChild(span);
  termOutput.appendChild(div);
}

function echoCommand(cmd) {
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = `<span class="term-cwd">~/</span><span class="cmd-echo"> ${escapeHtml(cmd)}</span>`;
  termOutput.appendChild(div);
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function unknownCmd(cmd) {
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = `<span style="color:#f87171">⚠  Command not found: '${escapeHtml(cmd)}'. Type <span style="color:var(--accent)">'root'</span> for all commands.</span>`;
  termOutput.appendChild(div);
}

function scrollTermBottom() {
  termOutput.scrollTop = termOutput.scrollHeight;
}

function clearTerminal() {
  termOutput.innerHTML = '';
  printLine({ type: 'line', text: '▶ Terminal cleared. Type root for commands.' });
}

termInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const raw = termInput.value.trim().toLowerCase();
  termInput.value = '';
  if (!raw) return;
  echoCommand(raw);
  if (COMMANDS[raw]) {
    const lines = COMMANDS[raw]();
    lines.forEach(l => printLine(l));
  } else {
    unknownCmd(raw);
  }
  scrollTermBottom();
});

termClear.addEventListener('click', clearTerminal);


document.querySelectorAll('.qbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cmd = btn.dataset.cmd;
    echoCommand(cmd);
    if (COMMANDS[cmd]) {
      const lines = COMMANDS[cmd]();
      lines.forEach(l => printLine(l));
    }
    scrollTermBottom();
    
    if (['about','skills','projects','contact'].includes(cmd)) {
      switchTab(cmd);
    }
  });
});
