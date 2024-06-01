const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");
listItems.forEach((item,idx) => {
  item.addEventListener("click", () => {
    HideAllContent();
    HideAllList();
    item.classList.add("active"); 
    contents[idx].classList.add("show");
  });
});
function HideAllContent() {
  contents.forEach((content) => {
    content.classList.remove("show");
  });
}
function HideAllList() {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
}
