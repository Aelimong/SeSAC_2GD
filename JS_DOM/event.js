const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

btn1.addEventListener("click", function () {
  alert("버튼1을 클릭하셨군뇽");
});

// JS의 mouseover는 계속 유지가 되서 mouseout을 같이 해줘야함!
// CSS의 hover는 마우스를 떼면 원래 스타일로 돌아감
btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "grey";
});

/* btn2 */
const container = document.querySelector(".container");
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

/* btn3 */
// 함수를 선언하고 사용하고 재사용 가능
function changeColor(obj) {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  //맨 마지막 요소만 빨강색으로 변경!
  divs[divs.length - 1].style.backgroundColor = "red";
}

//함수() 소괄호를 쓰면 바로 호출 되버림!!!! 클릭했을 때 호출하기 위해서는 괄호가 없어야함
btn3.addEventListener("click", changeColor);

/* btn4 */
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000000";
}

btn3.addEventListener("click", changeBtnColor);
btn4.addEventListener("click", changeBtnColor);

/* click 외의 많은 동작들 */
window.addEventListener("scroll", () => {
  //console.log(scrollY);
  if (scrollY > 898) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0";
  }
});

//console.log(window);

/* 이벤트 객체 */
// 해당 이벤트에 대한 정보 -> 이벤트 객체
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", (e) => {
  //console.log(e);
});

input.addEventListener("keydown", (e) => {
  //console.log(e.key);
  //console.log(e.code);

  // 방향키 위 아래 왼쪽 오른쪽을 누르면
  // 각각 누를 때마다 up, down, left, right
  switch (e.key) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowRight":
      console.log("right");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    default:
      console.log("others");
      break;
  }
});

// 변경 이벤트
const chgInput = document.getElementById("change-input");

chgInput.addEventListener("input", (e) => {
  console.log("변경중!!!");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;

  /*
  input: 현재 input에 변경사항이 존재하는 순간을 계속 인식
  실시간으로 바로 반영할 수 있음

  shift, ctrl 등 입력값이 변하지 않는다면 이벤트 발생 X
  */
});

chgInput.addEventListener("change", (e) => {
  // 'change' : input 에 변경이 일어나고
  // 다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
  console.log("변경되었어요!!!");
});

// 폼이 제출되는 이벤트
// 'submit' form에 적용하는 이벤트
const todoForm = document.querySelector("#todo-list");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  //폼이 실제로 제출되지 않도록 이벤트를 막는 것
  //새로고침 방지
  e.preventDefault();

  const todoInput = document.querySelector("[name='todo']");
  let todo = todoInput.value;

  //공백 정규식
  let pattern = /\s/g;

  // 빈칸이나 공백 문자가 들어왔을 때는 추가하고 싶지 않다면?
  if (todo === "" || todo.match(pattern)) {
    alert("빈칸이나 공백문자는 입력할 수 없습니다!");
    todo = "";
  } else {
    const li = document.createElement("li");
    li.append(todo);
    todos.append(li);

    // append 하고 input 칸 비워주기!!
    todo = "";
  }
});
