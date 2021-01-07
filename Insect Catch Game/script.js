const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let select_insect = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_insect_btns.forEach((insectBtn) =>
  insectBtn.addEventListener('click', () => {
    const img = insectBtn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    select_insect = { src, alt };

    screens[1].classList.add('up');

    setTimeout(createInsect, 1000);
    startGame();
  })
);

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');

  const { x, y } = getRandomLocation();

  insect.style.left = x + 'px';
  insect.style.top = y + 'px';

  insect.innerHTML = `<img src="${select_insect.src}" alt="${
    select_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)">`;

  insect.addEventListener('click', catchInsect);

  gameContainer.appendChild(insect);
}

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;

  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
