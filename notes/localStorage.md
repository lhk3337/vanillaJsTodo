# localStorage : 작은 정보를 유저 컴퓨터(브라우저)에 저장하는 방법

## setItem("key","value") localStorage에 키와 밸류(항목)를 저장. 브라우저를 새로고침해도 없어지지 않는다.

```javascript
localStorage.setItem("nico", true);
```

## getItem("key") localStorage의 key를 가지고 value를 읽음.

```javascript
localStorage.getItem("nico");
true 반환
```

#### getItem("no") //localStorage에 key name이 처음 설정한 name과 다를경우 null 반환됨

```javascript
localStorage.getItem("no")
null 반환
```

## localStorage key name이 null인지 아닌지 체크하기

```javascript
const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const USER_LS = "currentuser";

function loadName() {
  const currentuser = localStorage.getItem(USER_LS);
  if (currentuser === null) {
    //null 경우 실행
  } else {
    //null이 아닐 경우 실행
  }
}

function init() {
  loadName();
}

init();
```

## input탤그에 이름을 입력하면 localStorage value에 이름을 저장하고 그 value를 html에 출력하기

```javascript
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentuser", //localStorage 키의 이름으로 설정함
  SHOWING_CN = "showing"; //css에서 display:block 설정

function saveName(text) {
  localStorage.setItem(USER_LS, text); //localStorage 키(USER_LS)와 밸류(currentValue)를 저장
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value; //input태그의 입력한 값
  paintGreeting(currentValue); //Hello currentValue 출력하는 함수
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); //css display:block로 바뀜
  form.addEventListener("submit", (event) => handleSubmit(event)); //input을 submit 하면 handleSubmit함수 실행
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //css display : block 제거
  greetings.classList.add(SHOWING_CN); //css display : none에서 block로 바뀜
  greetings.innerText = `Hello ${text}`; // Hello currentValue 출력
}

function loadName() {
  const currentuser = localStorage.getItem(USER_LS);
  //localStorage에 USER_LS가 있으면 paintGreeting 실행, 없으면 askForName() 실행
  if (currentuser === null) {
    askForName();
  } else {
    paintGreeting(currentuser);
  }
}

function init() {
  loadName();
}

init();
```
