const imgs = document.querySelectorAll('.content');
const lists = document.querySelectorAll('li');

lists.forEach((li, idx) => {
  li.addEventListener('click', () => {
    removeShowActive();
    imgs[idx].classList.add('show');
    li.classList.add('active');
  });
});

function removeShowActive() {
  imgs.forEach((img) => img.classList.remove('show'));
  lists.forEach((li) => li.classList.remove('active'));
}
