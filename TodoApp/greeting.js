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
  greetings.innerText = `Hello ${text}`;
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
