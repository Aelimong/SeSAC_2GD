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
