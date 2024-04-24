const inputBoxes = document.querySelectorAll(".input-box");

inputBoxes[0].focus();

inputBoxes.forEach((inputBox, idx) => {
  inputBox.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      inputBoxes[idx].value = "";
      setTimeout(() => inputBoxes[idx + 1].focus(), 100);
    } else if (e.key === "Backspace") {
      setTimeout(() => inputBoxes[idx - 1].focus(), 100);
    }
  });
});
