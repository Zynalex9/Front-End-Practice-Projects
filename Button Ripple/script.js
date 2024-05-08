const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let buttonTop = e.target.offsetTop;
    let buttonLeft = e.target.offsetLeft;
    let xInside = x - buttonLeft;
    let yInside = y - buttonTop;
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    this.appendChild(circle);
  setTimeout(()=> circle.remove(),500)
  });
});
