const inputs = document.querySelectorAll("input");
// inputs[0].focus()
inputs.forEach((input, idx) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        inputs[idx + 1].focus();
      }, 10);
    }
    else if (e.key === 'Backspace'){
        setTimeout(() => {
          inputs[idx - 1].focus();
        }, 10);
    }
  });
});
