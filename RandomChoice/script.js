const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
// textarea.focus()
textarea.addEventListener("keydown", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    RandomSelect();
  }
});
function createTags(input) {
  let tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
function RandomSelect() {
  const time = 30;
  const randomTag = pickRandomTag();
  const interval = setInterval(() => {
    highlightedTag(randomTag);
    setTimeout(() => {
      unhighlightedTag(randomTag);
    }, 100);
  }, 100);
}
function pickRandomTag() {
  let rTags = document.querySelectorAll(".tag");
  return rTags[Math.floor(Math.random() * rTags.length)]; // Added parentheses after Math.random
}
function highlightedTag(tag) {
  tag.classList.add("highligted");
}
function unhighlightedTag(tag) {
  tag.classList.remove("highligted");
}
