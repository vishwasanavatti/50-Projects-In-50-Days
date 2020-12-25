const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const drawColor = document.getElementById('color');
const penSize = document.getElementById('size');
const clear = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let x;
let y;
let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

decrease.addEventListener('click', () => {
  size -= 2;
  if (size < 2) {
    size = 2;
  }
  penSize.innerText = size;
});

increase.addEventListener('click', () => {
  size += 2;

  if (size > 30) {
    size = 30;
  }
  penSize.innerText = size;
});

drawColor.addEventListener('input', () => {
  color = drawColor.value;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
