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

// 실습
// 10000까지의 숫자 중에서 13의 배수면서 홀수인 숫자를 찾아봅시다!
for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log("13의 배수면서 홀수인 숫자: " + i);
  }
}
