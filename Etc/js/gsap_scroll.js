gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "100% 50%",
    scrub: 1,
    //markers: true,
  },
  y: 800, //기본적으로 800px 아래로 가있어라...!
  opacity: 0,
});

gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    markers: true,
  },
  rotate: 720,
  x: 500,
});

// Timeline과 함께 써보기
const tl = gsap.timeline();

//scrollTrigger : animation 설정 내부에 작성
//timeline이 동작하지 않습니다!
// 2개 이상의 요소레 애니메이션을 적용시킬 때는
// create() 메소드 사용 필수!

// tl.to(".circle1", {
//   scrollTrigger: {
//     trigger: "section", // 스크롤 기준점
//     animation: tl, // 타임라인 이름
//     start: "top top", //섹션의 맨위와 (top) 요소(circle1)의 맨위가 만나면 시작!
//     end: "bottom 50%",
//     scrub: true, // 한 번 애니메이션이 시작되도 다시 돌아갈 수 있도록
//     markers: true,
//   },
//   scale: 2,
//   opacity: 0,
// }).to(".circle2", {
//   scrollTrigger: {
//     trigger: "section", // 스크롤 기준점
//     animation: tl, // 타임라인 이름
//     start: "top top", //섹션의 맨위와 (top) 요소(circle1)의 맨위가 만나면 시작!
//     end: "bottom 50%",
//     scrub: true, // 한 번 애니메이션이 시작되도 다시 돌아갈 수 있도록
//     markers: true,
//   },
//   scale: 2,
//   opacity: 0,
// });

tl.to(".circle1", {
  scale: 2,
  opacity: 0,
})
  .to(".circle2", {
    scale: 2,
    opacity: 0,
  })
  .to(".circle3", {
    scale: 2,
    opacity: 0,
  });

scrollTrigger.create({
  trigger: "section", // 스크롤 기준점
  animation: tl, // 타임라인 이름
  start: "top top", //섹션의 맨위와 (top) 요소(circle1)의 맨위가 만나면 시작!
  end: "bottom 50%",
  scrub: true, // 한 번 애니메이션이 시작되도 다시 돌아갈 수 있도록
  markers: true,
  pin: true, // 섹션이 고정이 됨, 스크롤 내리는
});
