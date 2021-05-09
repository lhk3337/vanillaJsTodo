## html 태그 새로 추가

```javascript
const li = document.createElement("li"); //html 태그 생성
```

## appendChild, 부모.appendChild(자식);

```javascript
const li = document.createElement("li");
const delBtn = document.createElement("button");
li.appendChild(delBtn);
//<li>
//   <button></button>
//</li>
```
