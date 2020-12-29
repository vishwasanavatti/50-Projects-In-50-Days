const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClick = 0;
// loveMe.addEventListener('dblclick', (e) => {}); easy way to get double click
loveMe.addEventListener('click', (e) => {
  if (clickTime == 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  //x and y value on image in window
  const x = e.clientX;
  const y = e.clientY;

  //x and y start value of image on window
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  //x nad y value inside image
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = yInside + 'px';
  heart.style.left = xInside + 'px';

  loveMe.appendChild(heart);

  times.innerText = ++timesClick;

  setTimeout(() => heart.remove(), 500);
};
