//jq val() 사용
function getValue() {
  // input의 value를 가져와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}

function setValue() {
  const value = $("input").val("설정 완료~~~");
}

/* css() 사용 */
function changeCssJS() {
  // span의 글씨 크기 20px
  // 글자 색깔 빨간색
  document.querySelector("span").setAttribute("style", "font-size: 20px;");
  document.querySelector("span").setAttribute("style", "color: red;");
}

function changeCssJQ() {
  // 글자 크기 40px
  // 글자 색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

function getCssJQ() {
  // 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJS() {
  //네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJQ() {
  //다음으로 이동
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("target", "_self");
}

function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 변경 &hearts;";
}

function changeTextJQ() {
  $(".p-text").text("jq로 변경 &hearts;");
}

function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js로 변경 &hearts;";
}
function changeHtmlJQ() {
  $(".p-html").html("jq로 변경 &hearts;");
}

/* 요소 추가하기 */
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막으로 추가된 JS";
  ul.append(li);
}

function appendJq() {
  $(".colors").append("<li>마지막 자식으로 추가된 JQ</li>");
}

// prepend
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<h4>첫 자식으로 추가된 JS</h4>";
  ul.prepend(li);
}

function prependJq() {
  $(".colors").prepend("<li><h4>첫 자식으로 추가된 JQ</h4</li>");
  //Jquery는 문자열에 태그 입력시 html 태그로 받아들임!
}

// before
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이전 형제요소로 추가된 JS";
  green.before(li);
}
function beforeJq() {
  $(".green").before("<li>이전 형제요소로 추가된 JQ</li>");
}

// after
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "다음 형제요소로 추가된 JS";
  green.after(li);
}
function afterJq() {
  $(".green").after("<li>다음 형제요소로 추가된 JQ</li>");
}

/* 요소 삭제 */
//remove
function removeJs() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}
function removeJq() {
  $("#li2").remove();
}
//empty
function emptyJs() {
  let nums = document.querySelector(".nums");
  nums.innerHTML = "";
}

function emptyJq() {
  $(".nums").empty();
}

/* 요소 탐색 */
function findParent() {
  //child2 부모 찾기
  console.log($(".child2").parent());
}

function findParents() {
  //child2 조상 찾기
  console.log($(".child2").parents());
}

function findNext() {
  //child2 다음 형제 찾기
  console.log($(".child2").next());
}

function findPrev() {
  //child2 이전 형제 찾기
  console.log($(".child2").prev());
}

function findChildren() {
  //parent 자식 요소들 찾기
  console.log($(".parent").children());
}

/* 클래스 조작 */
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("fs-50");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
