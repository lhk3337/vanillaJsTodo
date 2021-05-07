```javascript
const date = new Date(); //사간에 관련 객체
date.getDay(); //요일
date.getDate(); //일
date.getHours(); //시간
date.getMinutes(); //분
```

## setInterval(실행할 함수, 실행할 시간 간격(단위는 ms)) : 설정 시간마다 함수를 실행함.

```javascript
setInterval(function,1000); //1초에 function함수를 실행
```

## 시계만들기

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const clockEvent = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${
    hours <= 12
      ? hours === 12
        ? `PM ${hours}` //오후 12시 일 경우
        : `AM ${hours < 10 ? `0${hours}` : hours}` //오전 1시부터 11시까지
      : hours === 24
      ? `AM ${hours - 24 < 10 ? `0${hours - 24}` : hours - 24}` //오전 12시 일 경우
      : `PM ${hours - 12 < 10 ? `0${hours - 12}` : hours - 12}` //오후 1시부터 11시까지
  } : ${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
setInterval(clockEvent, 1000);
```
