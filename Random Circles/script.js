const body = document.body;
body.addEventListener("click", function (e) {
  const circle = document.createElement("span");
  circle.classList.add("circle");
  let x = e.clientX;
  let y = e.clientY;
  circle.style.top = y + "px";
  circle.style.left = x + "px";
  this.appendChild(circle);
});
