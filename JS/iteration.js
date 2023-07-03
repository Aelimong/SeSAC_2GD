/*
for문
for(변수 초기화; 조건식(어디까지 증가or감소); 증감){
  반복할 코드
}

index++; index = index + 1; index += 1;
*/

for (let i = 0; i < 10; i++) {
  console.log("안녕하세요 :)");
}

for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번 째`);
}

// 1 ~ 5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 5) {
    console.log("----------");
  }
}

for (let i = 1; i < 6; i++) {
  console.log(i);
  if (i === 5) {
    console.log("----------");
  }
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
  if (i === 4) {
    console.log("----------");
  }
}

for (let i = 5; i > 0; i--) {
  console.log(i);
  if (i === 1) {
    console.log("----------");
  }
}

// 1 ~ n까지 더하는 프로그램 만들기
let n = 10; //55
let sum = 0;
for (let i = 1; i <= n; i++) {
  //sum = sum + i
  sum += i;
  //console.log(sum);
}

console.log(sum);

//배열과 for문 같이 써보기
let fruits = ["사과", "망고", "수박", "바나나"];

//배열의 길이만큼 반복됨
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열에 들어가 있는 Number형 데이터의 합 구하기
let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
}

console.log(numSum);

// if문과 for문 같이 쓰기
/**
if(){
  for(){

  }
}

for(){
  if()[

  ]
}
 */

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
  if (i === 20) {
    console.log("----------");
  }
}

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
  if (i === 20) {
    console.log("----------");
  }
}

// 실습1
// 10000까지의 숫자 중에서 13의 배수면서 홀수인 숫자를 찾아봅시다!
for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log("13의 배수면서 홀수인 숫자: " + i);
  }
}

// 이중 for문 사용 (포문 안에 포문)
// 실습 2 -> 구구단 2단 ~ 9단 출력하기
for (let i = 2; i <= 9; i++) {
  console.log(`-----------${i}단-------------`);
  for (let j = 1; j <= 9; j++) {
    console.log(i + "x" + j + "=" + i * j);
  }
}

/* while */
let n1 = 1; //while 내부에서 사용할 변수의 초기화
/*
while(조건){
  //조건이 참일 때 실행할 문장
}
*/

while (n1 <= 5) {
  console.log(n1);
  n1++;
}

// 10부터 6까지만 출력
let n2 = 10;
while (n2 >= 6) {
  console.log(n2);
  n2--;
}

/* while과 if를 사용해서 1~10까지의 짝수 출력 */
let n3 = 1;
while (n3 < 11) {
  if (n3 % 2 === 1) {
    console.log(n3);
  }
  n3++;
}

// while 과 무한루프
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 === 11) {
    break;
  }
}

let n5 = 0;
// confirm
// 확인 -> true 반환
// 취소 -> false 반환
// while (confirm("계속 진행?")) {
//   n5++;
//   alert(n5 + "번째 alert");
// }

// continue;
// 현재의 반복을 멈추고, 다음 반복으로 넘어감
// break;
// 반복문에서 반복을 멈추고 즉시 탈출
// 1~10 홀수의 합 구하기
let sum2 = 0;
for (let i = 1; i < 11; i++) {
  //짝수일 경우 넘어가겠다!
  if (i % 2 === 0) {
    continue;
  }
  sum2 += i;
}

console.log(sum2);

// 실습3
// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기!
// 나머지 연산자 %, 5%3->2 (5를 3으로 나눈 나머지인 2의 값을 반환)
// for문
let sum3 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum3 += i;
  }
}
console.log("2 또는 5의 배수의 총합(for문): " + sum3);

//while문
let sum4 = 0;
let n6 = 0;
while (n6 < 101) {
  if (n6 % 2 === 0 || n6 % 5 === 0) {
    sum4 += n6;
  }
  n6++;
}
console.log("2 또는 5의 배수의 총합(while문): " + sum4);
