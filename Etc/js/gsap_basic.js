gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, // animation을 3회 추가하는 것
  yoyo: true,
  ease: "linear", //timing function
  ease: "bounce.in",
  ease: "power1.out", // 공식문서 추천
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);

// from, to의 타겟으로는 배열 형태가 와도 됨
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5, // 요소가 여러개 있을 때 $초 간격으로 순서대로 애니메이션 적용시키는 것
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100, // 위로 100px 보내겠다
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });
  });
});

/* timeline 사용 */
// 연속적인 애니메이션을 만들기 위해서 사용
let tl = gsap.timeline();

// tl.to(".skyblue", {
//   x: 400,
//   duration: 2,
// });

// tl.to(".grey", {
//   x: 500,
//   duration: 2,
// });

// tl.to(".yellow", {
//   x: 600,
//   duration: 3,
// });

// 타임라인에 이어쓰기
tl.to(".skyblue", {
  x: 400,
  duration: 2,
})
  .to(
    ".grey",
    {
      x: 500,
      duration: 2,
    },
    "<" // 이전 오브젝트와 함께 움직이겠다!
  )
  .to(
    ".yellow",
    {
      x: 600,
      duration: 3,
    },
    "+=5" // 이전 오브젝트 끝난 뒤 5초 뒤에 동작 시작!
  );

/*
to/from 의 세 번째 매개변수
  = 같은 타임라인 내부에서 한 번에 동작하는 방법
    - 2(숫자) : 전체 타임라인에 대해서 ~ 초 뒤에 시작한다는 의미
            (absolutely)
    - "<" : 이전 움직임과 동시에 시작
    - "+=2" : 마지막에 끝난 움직임보다 ~ 초 뒤에 시작하겠다!
 */
