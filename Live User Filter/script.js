const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  const { results } = await res.json();

  //   remove existing result - loading.. disappears
  result.innerHTML = '';

  results.forEach((user) => {
    const userList = document.createElement('li');

    listItems.push(userList); // this is done to filter data

    userList.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    result.appendChild(userList);
  });
}

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchValue) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
