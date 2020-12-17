const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  //loadText.innerHTML = `${load}%`;
  loadText.innerHTML = load + '%';
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // ranges from 0 - 1 and we are fading out so need a function
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, min_in, max_in, min_out, max_out) => {
  return ((num - min_in) * (max_out - min_out)) / (max_in - min_in) + min_out;
};
