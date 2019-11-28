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

///====================================
const bookmarksList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector(".bookmark-form");
const bookmarkInput = document.querySelector("input[type=text]");
const button = document.querySelector(".btn");

function createBookmark(e) {
  e.preventDefault(); //Stops the default HTML form refresh

  const title = bookmarkInput.value;
  const bookmark = document.createElement("a");
  bookmark.className = "bookmark";
  bookmark.innerText = title;
  bookmark.href = "#";
  bookmark.target = "_blank";
  bookmarksList.appendChild(bookmark);

  bookmarkForm.reset(); ///to clear input field after form submission
}

bookmarkForm.addEventListener("submit", createBookmark);
button.addEventListener("click", createBookmark);
