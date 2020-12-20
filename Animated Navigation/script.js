const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const ul = document.getElementById('ul');

toggle.addEventListener('click', () => {
  //nav.classList.toggle('active'); //this works but does not disable the links

  //Below function disables the link
  if (nav.classList == 'active') {
    nav.classList.remove('active');
    setTimeout(() => {
      ul.style.display = 'none';
    }, 600);
  } else {
    ul.style.display = 'flex';
    setTimeout(() => {
      nav.classList.add('active');
    }, 60);
  }
});
