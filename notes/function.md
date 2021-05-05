```javascript
// 매개변수를 문자열에 입력하는 방법
function sayhello(name, age) {
  console.log("Hello" + name + "you are" + age + "years old");
}
sayhello("Nicolas", 14);

function sayhello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayhello("Nicolas", 14);

console.log(greetNicolas);
```
