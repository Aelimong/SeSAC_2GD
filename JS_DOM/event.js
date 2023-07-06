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
  console.log(scrollY);
  if (scrollY > 898) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0";
  }
});
console.log(window);
