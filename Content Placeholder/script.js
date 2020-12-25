const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const names = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
  header.innerHTML = '<img src="../resources/images/germany.jpg" alt="" />';
  title.innerHTML = 'param sadsd ad adssd as';
  excerpt.innerHTML =
    'fdskhkhsdfgl sdfgkjfdsogj fjdgoihiorehnvm sdfgkdsgjhewui h weghfiweqif iwefwehgfih ewihw';
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  names.innerHTML = 'John Doe';
  date.innerHTML = 'Dec 25, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
