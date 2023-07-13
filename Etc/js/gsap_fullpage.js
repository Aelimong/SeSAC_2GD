const slide = gsap.timeline();

//아쿠아는 기본적인 자리에 있고 다른 것들이 스크롤 되면서 오도록!
slide
  .from(".ygreen", {
    xPercent: -100,
  })
  .from(".hotpink", {
    yPercent: -100,
  })
  .from(".gold", {
    xPercent: 100,
  });

ScrollTrigger.create({
  animation: slide, // 타임라인 이름
  trigger: "main", // 어디를 기준으로 할지?
  markers: true,
  start: "top top",
  pin: true, //움직여도 다른곳으로 이동하지 않도록?
  scrub: 2,
  end: "+=4000", // 스크롤의 길이 4000을 내릴 동안 계속 동작을 할 수 있도록!
});
