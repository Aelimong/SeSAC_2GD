let tl1 = gsap.timeline();
tl1
  .to(".cloud1", {
    scale: 1.5,
    opacity: 0,
    xPercent: 200, // 자신의 크기 기준 200percent
  })
  .to(
    ".cloud2",
    {
      scale: 1.5,
      opacity: 0,
      xPercent: -100,
    },
    "<"
  )
  .to(".sun", {
    scale: 1.2,
    opacity: 0.5,
    // 왼쪽 아래로 떨어지는 동작
    xPercent: -600,
    yPercent: 300, //자신의 300 퍼센트
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".section1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  // markers: true,
  pin: true,
  end: "+=5000",
});

let tl2 = gsap.timeline();

// 애니메이션 적용한 대상이 하나면 안에 적용시켜줘도 됨!!!!
tl2.from(".section2 div", {
  scrollTrigger: {
    animation: tl2,
    trigger: ".section2",
    start: "top top",
    end: "bottom 100%",
    scrub: true,
    markers: true,
    pin: true,
    end: "+=3000",
  },
  rotation: 720,
  opacity: 0,
  scale: 0,
});

// ScrollTrigger.create({
//   animation: tl2,
//   trigger: ".section2",
//   start: "top top",
//   end: "bottom 100%",
//   scrub: true,
//   markers: true,
//   pin: true,
//   end: "+=3000",
// });
