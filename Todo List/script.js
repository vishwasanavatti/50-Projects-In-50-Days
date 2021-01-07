const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value.trim();

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    // mouse left click
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLocalStorage();
    });

    // mouse right click
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLocalStorage();
    });

    todosUL.appendChild(todoEl);

    input.value = '';

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todo) =>
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    })
  );

  localStorage.setItem('todos', JSON.stringify(todos));
}
