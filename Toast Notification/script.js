const toasts = document.getElementById('toasts');
const btn = document.getElementById('button');

//random msgs are added just for this project
const messages = ['message 1', 'message 2', 'message 3', 'message 4'];

//error type is set just for example
btn.addEventListener('click', () =>
  createNotification('Error incoming', 'error')
);

function createNotification(msg = null, type = null) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type ? type : 'info');
  toast.innerText = msg
    ? msg
    : messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
