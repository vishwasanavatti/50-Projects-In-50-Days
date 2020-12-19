const tagsElement = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((t) => t.trim() !== '')
    .map((t) => t.trim());

  tagsElement.innerHTML = '';
  tags.forEach((element) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = element;
    tagsElement.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    const randomTag = pickRandomTag();
    highlightTag(randomTag);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
