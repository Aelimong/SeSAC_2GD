/*
  함수 선언문
  function 함수이름(매개변수){
    함수내용;
  }

  함수 이름은 camelCase를 이용!
*/

// 함수 선언문

// 호이스팅으로 인해 함수가 맨 먼저 선언?
helloWorld1();
console.log("-----");

function helloWorld1() {
  console.log("Hello world 1");
}

helloWorld1();

/* return
- 함수의 반환값, 함수 내부 코드의 '최종값'
*/
function helloWorld2() {
  return "Hello World 2";
}

console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1, num2) {
  console.log("return 전에 여기는 실행됩니다.");
  return num1 + num2;
  console.log(" return 후에 여기는 실행되지 않아요");
}

add(1, 4);
console.log(add2(10, 20));

// 함수 표현식 -> 선언 이후에 호출 해줘야 합니다!
const helloWorld3 = function () {
  console.log("Hello world 3");
};

helloWorld3();

// 화살표 함수 -> 선언 이후에 호출 해줘야 합니다! 표현식과 동일함
const helloWorld4 = () => {
  return "Hello world 4";
};

console.log(helloWorld4());

/* 매개변수가 있는 함수 */
function sayHello(text) {
  return `안녕하세요 ${text}님`;
}

console.log(sayHello("애림"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}

sayHello2("안녕", "앨림");

let sayHello3 = function (text, name) {
  return `${text}!! ${name}님 sayhello3`;
};

console.log(sayHello3("안녕하세요!", "앨림"));

let sayHello4 = (text, name) => {
  return `${text}!! ${name}님!!!!! sayhello4`;
};

console.log(sayHello4("안녕하세요!", "앨림"));

// ========= 실습
// 1. 곱하기 함수 실습
function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 7));
console.log(multifly(2, 2));

// 2. 제곱 함수
function square(num) {
  console.log(num ** 2);
}

square(4);
square(11);
square(5);

// ========= 함수 실행 순서 테스트

count1();

// 함수 선언문
function count1() {
  console.log("count는 1");
}

// 함수표현식
var count2 = function () {
  console.log("count는 2");
};

count2();
