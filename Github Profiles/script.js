const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('No user found');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      API_URL + username + '/repos?sort=created'
    ); //get latest repos
    addReposToCard(data);
  } catch (error) {
    createErrorCard('Could not fetch repos');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});

function createUserCard(userData) {
  const cardHTML = ` <div class="card">
    <div>
        <img src="${userData.avatar_url}" alt="${userData.name}" class="avatar">
    </div>

    <div class="user-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>

        <ul>
            <li>${userData.followers} <strong>Followers</strong></li>
            <li>${userData.following} <strong>Following</strong></li>
            <li>${userData.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>
</div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `<div class="card">
    <h1>${message}</h1>
    </div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEL = document.getElementById('repos');
  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repos');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank'; //opens in new window
    repoLink.innerText = repo.name;

    reposEL.appendChild(repoLink);
  });
}
