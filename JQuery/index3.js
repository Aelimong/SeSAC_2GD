console.log(window);
console.log($(window));

console.log(document);
console.log($(document));

//mouse event
// click
// on은 addEventListener와 같은 의미
$(".p-msg").on("click", function () {
  $(this).css("color", "blue"); // this는 자기 자신을 의미
});

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

$(".num").on("click", function () {
  // $(".num").css("color", "yellow");
  //$(this).css("color", "tomato");
});

// JS
const nums = document.querySelectorAll(".num");

// nums = [one, two, three, four]
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    nums[i].style.color = "tomato";
  });
}

// mouseover
$(".numbers").on("mouseover", () => {
  // $(".numbers").css("background-color", "skyblue");
  // $(".numbers").append("<div>mouseover로 추가된 자식</div>");
});

$(".numbers").mouseover(() => {});

// hover() : 마우스를 올렸을 때와 떼었을 때 정의
// js에는 없는 동작
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//scroll은 윈도우에 걸어줌
window.addEventListener("scroll", () => {
  //console.log("addEventListener-scroll");
});

window.scroll(() => {
  //console.log(".scroll()");
});

/* key event */
// keydown : 키보드가 눌렸을 때!
$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "") {
    console.log("엔터!");
  } else {
    console.log("others!");
  }
});

$("#form").submit(function (e) {
  e.preventDefault();
  let todo = $("#todo").val();
  $(".todos").append(`<li>${todo}</li>`); //ul에 li 만들어서 추가

  //초기화
  $("#todo").val("");
});
