const body = document.body;
const input = document.querySelector("input[type=text]");
const overlay = document.querySelector(".overlay");

//functions

function floatInput() {
  body.classList.add("show-floater");
}

function closeOverlay() {
  body.classList.remove("show-floater");
}

///event listeners
input.addEventListener("focusin", floatInput);
input.addEventListener("focusout", closeOverlay);

overlay.addEventListener("click", closeOverlay);
