// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const calculator = document.querySelector(".calculator");
const viewBox = document.querySelector(".view");
let result = 0;
let view = 0;

function click(event) {
  event.preventDefault();
  const clicked = event.target.value;
  if (clicked === "C") {
    result = 0;
    view = result;
    viewBox.innerText = view;
  } else if (
    clicked === "+" ||
    clicked === "-" ||
    clicked === "*" ||
    clicked === "/"
  ) {
    try {
      result = new Function("return " + result)();
      view = result;
      viewBox.innerText = view;
      view = 0;
      result = result + clicked;
    } catch (error) {
      result = result + clicked;
      view = result.slice(0, -2);
      viewBox.innerText = view;
      view = 0;
      result = result.slice(0, -2) + result.slice(-1);
    }
  } else if (clicked === undefined) {
  } else if (clicked === "=") {
    try {
      result = new Function("return " + result)();
    } catch (error) {
      result = result.slice(0, -1);
    }
    if (result.toString().length > 12) {
      view = result.toString().substr(0, 12);
      viewBox.innerText = view;
    } else {
      view = result;
      viewBox.innerText = view;
      view = 0;
    }
    result = 0;
  } else {
    if (parseFloat(result, 10) === 0) {
      result = clicked;
    } else {
      result = result + clicked;
    }
    view = parseFloat(view + clicked, 10);
    viewBox.innerText = view;
  }
}

function init() {
  calculator.addEventListener("click", click);
}

init();
