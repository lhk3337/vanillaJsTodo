```javascript
const title = document.getElementById("title");
const title = document.querySelector("#title"); // 노드의 첫번째 자식을 반환
title.innerHTML = "Hi! From JS"; //id가 title안에 있는 요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정
title.style.color = "red"; //title의 글자색을 레드로 바꿈
document.title = "I own you now"; // 브라우저 탭의 타이틀 이름 출력
console.dir(title); //title 태그 객체의 속성 정보 출력
```

```javascript
console.dir(document); //html page에 객체의 속성 정보 출력
```
