const search = document.getElementById("seach");
const form = document.getElementById("form");
const APIURL = "https://api.github.com/users/";
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
