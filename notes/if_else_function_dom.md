```javascript
// 클릭하면 글자색 변경
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#95a5a6";

function handleClick() {
  const currentcolor = title.style.color;
  if (currentcolor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
```

```javascript
//인터넷 상태에 따라 메시지 출력
function handleOnline() {
  console.log("Hello");
}
function handleOffline() {
  console.log("Bye Bye");
}
window.addEventListener("online", handleOnline);
window.addEventListener("online", handleOffline);
```

# className : html의 class이름을 설정 title.className ="바꿀 이름"

```javascript
// class이름을 직접 추가 하는 방식, 클릭하면 classname 바뀌는 코드
<h1 id="title" class="btn">
  This Work
</h1>;

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  if (title.className !== "clicked") {
    title.className = CLICKED_CLASS;
    //html에서 className을 btn으로 설정하고 js에서 clicked으로 설정하고
    //클릭하면(btn -> clicked) css에 설정한 class btn은 실행이 안된다.
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
```

# classList : html의 클래스 리스트에 접근하는 방식, title.classList.method()

### 메소드

- add( String [, String [, ...]] ) : 지정한 클래스 값을 추가한다. 만약 추가하려는 클래스가 엘리먼트의 class 속성에 이미 존재한다면 무시한다.

- remove( String [, String [, ...]] ) : 지정한 클래스 값을 제거한다. 노트: 존재하지 않는 클래스를 제거하는 것은 에러를 발생시키지 않습니다.
- item( Number ): 콜렉션의 인덱스를 이용하여 클래스 값을 반환한다.
- toggle( String [, force] ) : 하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다. 두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거한다.
- contains( String ) : 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.
- replace( oldClass, newClass ) : 존재하는 클래스를 새로운 클래스로 교체한다.

#### add(), remove(), contains() 이용

```javascript
// classlist.add와 remove활용, 클릭하면 classname 바뀌는 코드
<h1 id="title" class="btn">
  This Work
</h1>;

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  if (!title.classList.contains(CLICKED_CLASS)) {
    //if (title.className !== "clicked")을 선언하고 실행하면 CLICKED_CLASS의 clicked가 btn clicked 상태로 변경 되어  작동하지 않음
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
```

#### toggle()

```javascript
// classlist.toggle활용, 클릭하면 classname 바뀌는 코드
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
```
