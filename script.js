
// --- XP-like Clock ---
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s;
  let clockElem = document.getElementById("MyClockDisplay");
  if (clockElem) {
    clockElem.innerText = time;
  }
  setTimeout(showTime, 1000);
}
showTime();

// --- Start Menu Logic ---
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
if (startBtn && startMenu) {
  startBtn.addEventListener('click', function() {
    const isOpen = startMenu.classList.contains('open');
    if (isOpen) {
      startMenu.classList.remove('open');
      startMenu.setAttribute('aria-hidden', 'true');
    } else {
      startMenu.classList.add('open');
      startMenu.setAttribute('aria-hidden', 'false');
    }
  });
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!startMenu.contains(e.target) && e.target !== startBtn) {
      startMenu.classList.remove('open');
      startMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

// --- Links Array ---
const links = [
  { name: 'Portfolio', url: 'https://anasfiguigui.xyz/' },
  { name: 'Github', url: 'https://github.com/AnasFiguigui' },
  { name: 'Instagram', url: 'https://www.instagram.com/anasfiguigui/' },
  { name: 'Discord', url: 'https://discord.gg/zubjBBaE' },
  { name: 'Spotify', url: 'https://open.spotify.com/user/314wg3netrfr6f2d7opltajhhqzm?dl_branch=1&nd=1' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-figuigui/' }
];

// --- Render Links in Start Menu ---
function renderLinks(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = links.map(link =>
    `<li><a href="${link.url}" target="_blank" rel="noopener">${link.name}</a></li>`
  ).join('');
}
renderLinks('startMenuLinks');
