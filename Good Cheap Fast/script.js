const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTrick(e.target))
);

function doTrick(val) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === val) {
      fast.checked = false;
    } else if (cheap === val) {
      good.checked = false;
    } else if (fast === val) {
      cheap.checked = false;
    }
  }
}
