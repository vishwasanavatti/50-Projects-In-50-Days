const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(
    e.target.nextElementSibling
  ).getPropertyValue('width');

  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +rangeWidth.substring(0, labelWidth.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (numRangeWidth / max) -
    numLabelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = left - 20 + 'px';

  label.innerHTML = value;
});

const scale = (num, min_in, max_in, min_out, max_out) => {
  return ((num - min_in) * (max_out - min_out)) / (max_in - min_in) + min_out;
};
