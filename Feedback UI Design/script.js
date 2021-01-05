const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  for (let rating of ratings) {
    rating.classList.remove('active');
  }
}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  panel.innerHTML = `<i class="fas fa-heart"></i>
  <strong>Thank You</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We use your feedback to improve the service</p>`;
});
