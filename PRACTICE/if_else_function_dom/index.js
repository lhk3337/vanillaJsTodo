// const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#95a5a6";

// function handleClick() {
//   const currentcolor = title.style.color;
//   if (currentcolor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }
// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }
// init();

// function handleOnline() {
//   console.log("Hello");
// }
// function handleOffline() {
//   console.log("Bye Bye");
// }
// window.addEventListener("online", handleOnline);
// window.addEventListener("online", handleOffline);

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";
// function handleClick() {
//   if (title.classList.contains(CLICKED_CLASS)) {
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }
// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
