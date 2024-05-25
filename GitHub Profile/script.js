const search = document.getElementById("search");
const main = document.getElementById("main");
const form = document.getElementById("form");
const APIURL = "https://api.github.com/users/";

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
  } catch (err) {
    console.log(err.message);
  }
}

function createUserCard(user) {
  const UserCard = `
    <div class="card">
    <div>
      <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="" class="avatar">
    </div>
    <div class="user-info">
      <h2>Johndoe</h2>
      <p>Lorem ipsum dolor sit amSet consectetur, adipisicing elit. Temporibus, quibusdam.</p>
      <ul>
        <li>300 <strong>Following</strong></li>
        <li>30 <strong>Followers</strong></li>
        <li>3 <strong>Repositories</strong></li>
      </ul>
      <div id="repos">
        <a href="#" class="repo">Repo 1</a>
        <a href="#" class="repo">Repo 2</a>
        <a href="#" class="repo">Repo 3</a>
      </div>
    </div>
  </div>
`;
  main.innerHTML = UserCard;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value.trim(); // Trim whitespace
  if (user) {
    getUser(user);
    search.value = ""; // Clear input after submission
  }
});

