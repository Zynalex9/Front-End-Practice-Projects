const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const numofRows = document.getElementById("number");

let rows = 5;

function createImages() {
  container.innerHTML = "";
  for (let i = 0; i < rows * 3; i++) {
    const IMG = document.createElement("img");
    IMG.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(IMG);
  }
}

createImages();

numofRows.addEventListener("input", (e) => {
  rows = e.target.value;
  createImages();
});

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
