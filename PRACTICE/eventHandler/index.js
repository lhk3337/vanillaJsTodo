const title = document.querySelector("#title");
title.addEventListener("click", changeColor);

function changeColor() {
  if (title.style.color === "white") {
    title.style.color = "yellow";
  } else {
    title.style.color = "white";
  }
}

function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);
