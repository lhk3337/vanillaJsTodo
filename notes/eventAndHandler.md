```javascript
function handleResize(event) {
  console.log(event);
}
window.addEventListener("resize", handleResize); //브라우저 창 사이즈 크기를 변경하면 handleResize함수가 실행됨
```

```javascript
const title = document.querySelector("#title"); //title을 클릭하면 글자색이 바뀜
title.addEventListener("click", changeColor);

function changeColor() {
 {
    title.style.color = "yellow";
}
```
