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
