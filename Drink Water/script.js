const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highLightCups(index));
});

function highLightCups(index) {
  if (
    smallCups[index].classList.contains('full') &&
    (index == smallCups.length - 1 ||
      !smallCups[index].nextElementSibling.classList.contains('full'))
  ) {
    index--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCupsSize = document.querySelectorAll('.cup-small.full').length;
  const totalCupsSize = smallCups.length;

  if (fullCupsSize === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    //percentage.style.height = `${(fullCupsSize / totalCupsSize) * 330}px`;
    //percentage.innerText = `${(fullCupsSize / totalCupsSize) * 100}%`;
    percentage.style.height = (fullCupsSize / totalCupsSize) * 330 + 'px';
    percentage.innerText = (fullCupsSize / totalCupsSize) * 100 + '%'; //why not use this?
  }
  if (fullCupsSize === totalCupsSize) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    //liters.innerText = `${(250 * (totalCupsSize - fullCupsSize)) / 1000}L`;
    liters.innerText = (250 * (totalCupsSize - fullCupsSize)) / 1000 + 'L';
  }
}
