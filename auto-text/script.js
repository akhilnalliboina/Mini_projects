const textEl = document.getElementById("textEl");
const inputEl = document.getElementById("speed");

const textToDisplay = "We Love Programming";
let idx = 1;
let speedEl = 300 / inputEl.value;
displayText();

function displayText() {
  textEl.innerText = textToDisplay.slice(0, idx);
  idx++;
  if (idx > textToDisplay.length) {
    idx = 1;
  }
  setTimeout(displayText, speedEl);
}

inputEl.addEventListener("input", (e) => {
  speedEl = 300 / e.target.value;
});
