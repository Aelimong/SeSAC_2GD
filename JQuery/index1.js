// $('선택자');
// document.querySelector('선택자');

console.log($("button"));
$("button").css("color", "red");

//글자와 속성 변경
function submitJS() {
  //안녕하세요 -> 반갑습니다
  // style 속성  2px solid red;
  document.querySelector(".div1").innerHTML = "<b> 반갑습니다!</b>";
  document
    .querySelector(".div1")
    .setAttribute("style", "border: solid red 2px");
}
function submitJQ() {
  // 안녕하세요 -> 잘 지내세요 여러분
  // border: 3px dotted blue;
  $(".div1").html("<i>잘 지내세요 여러분 😎</i>");
  $(".div1").css("border", "3px dotted blue");
}
