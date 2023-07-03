/*
자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object, ...
*/

// Date 객체
// 시간, 날짜 장보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth() + 1, "월"); // 0 ~ 11 (7월이면 6)
console.log(now.getDate(), "일"); // 1 ~ 31
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); // 0(일)~6(토)

// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자!

let isWeekday = "";
let todayDay = "";
let today = new Date().getDay();

switch (today) {
  case 0:
    todayDay = "일요일";
    break;
  case 1:
    todayDay = "월요일";
    break;
  case 2:
    todayDay = "화요일";
    break;
  case 3:
    todayDay = "수요일";
    break;
  case 4:
    todayDay = "목요일";
    break;
  case 5:
    todayDay = "금요일";
    break;
  case 6:
    todayDay = "토요일";
    break;
  default:
    console.log("잘못된 값입니다.");
    break;
}

if (today === 0 || today === 6) {
  isWeekday = "주말";
} else {
  isWeekday = "평일";
}

// 삼항연산자
console.log(today === 0 || today === 6 ? "주말" : "평일");

console.log(`오늘의 요일은 ${todayDay}이고, ${isWeekday}입니다.`);

// let now = new Date(); 지정되 시간으로 초기화 가능
let past = new Date(2020, 1, 19, 15, 30, 10);
// new Date(y, m, d, h, m, s)
// 시, 분, 초가 설정되지 않았을 때는 00:00:00
console.log(past);

/* Math */
// 수학적인 상수나 함수
console.log(Math.PI); //원주율 상수
console.log(Math.E); //자연수? 상수
console.log(Math.SQRT2); //제곱근 상수

console.log(Math.max(100, -1, 30, 20, 5)); // 매개변수 중 최대값 리턴
console.log(Math.min(100, -1, 30, 20, 5)); // 매개변수 중 최소값 리턴

console.log(Math.ceil(5.1)); // 올림, 정수로 변환 시켜중
console.log(Math.floor(5.133)); // 내림
console.log(Math.round(5.6)); // 반올림

// 난수 생성 -> random number
// 0 <= num < 1
console.log(Math.random());

// 0 <= num < 10
console.log(Math.floor(Math.random() * 10));
// 0.xxx ~ 9.xxx

// 0 <= num <= 10
console.log(Math.floor(Math.random() * 11));
//0.xxx ~ 10.xxx

// 20 <= num <= 22
console.log(Math.floor(Math.random() * 3 + 20));

// Object
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
