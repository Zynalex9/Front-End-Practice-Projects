const insertEL = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insertEL.innerHTML = `<div class="key">
    ${e.key === "" ? Space : e.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>event.keycode</small>
    </div>
    <div class="key">
    ${e.code}
    
    <small>event.code</small>
  </div>`;
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 83) {
    document.body.style.backgroundColor = "red";
  } else if (e.keyCode === 65) {
    document.body.style.backgroundColor = "teal";
  } else if (e.keyCode === 68) {
    document.body.style.backgroundColor = "aqua";
  } else if (e.keyCode === 70) {
    document.body.style.backgroundColor = "steelblue";
  } else if (e.keyCode === 71) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "#eee";
  }
});
