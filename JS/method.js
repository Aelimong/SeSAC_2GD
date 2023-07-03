// 문자열 관련 메소드
/*
- length(속성)
- toUpperCase()
- toLowerCase()
- trim()
- slice()
- replace()
- replaceAll()
- repeat()
- indexOf()
- split()
*/

let str1 = "   Strawberry Moon   ";
console.log(str1[4]);

// 문자열의 길이(공백 포함)
console.log(str1.length);

// 양쪽 공백 없애기 trim()
let str2 = str1.trim();
console.log(str2);
console.log(str2.length);

console.log("대문자로 변경! " + str2.toUpperCase());
console.log("소문자로 변경! " + str2.toLowerCase());

let fruit = "applemango";
//indexOf("문자열");
console.log(fruit.indexOf("p"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("z")); // 없는 문자는 -1 반환

// charAt(인덱스 번호);
console.log(fruit.charAt(0));

// slice(인덱스 번호);
console.log(fruit.slice(5));
console.log(fruit.slice(0, 3));
console.log(fruit.slice(-1)); // -1은 맨 뒤에 있는 문자
console.log(fruit.slice(-3)); // -3은 뒤에서 3번째 문자부터 끝까지!

let msg = "Wow~ It is so amazing!!!";

/* repalce repalceAll */
console.log(msg.replace("o", "a")); // 가장 처음의 'o'만 찾아서 바꿔줌
console.log(msg.replaceAll("o", "ooo")); // 문자열에 포함된 모든 'o'를 바꿔줌
console.log(msg.replace("Wow", "Hey"));

console.log(msg); // 실제 문자열은 변하지 않아요!

let date = "2023.07.03";
//2023-07-03
console.log(date.replaceAll(".", "-"));

//반복
console.log("a".repeat(5));

// split('') => 문자열을 배열로 변경하는 메소드
// let date = "2023.07.03";
// [2023, 07, 31]

const dateArr = date.split(".");
console.log(dateArr);

// ========= 여기부턴 배열 method
let arr1 = [1, 2, 3, 4, 5];
arr1.push("six");
arr1.push("seven");
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.pop();
console.log(arr1);

let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

arr2.unshift("kitty");
arr2.unshift("쥐");
console.log(arr2);

arr2.shift();
console.log(arr2);

arr2[5] = "기린";
console.log(arr2);

arr2[1] = "쿼카";
console.log(arr2);

arr2[7] = "horang";
console.log(arr2);

arr2 = ["quakka", "puppy", "rabbit", "hamster"];
/* 배열.includes(요소)
  배열에 요소가 있는지 검사! -> true || false 반환
*/
console.log(arr2.includes("puppy"));
console.log(arr2.includes("cat"));

// 인덱스 반환
console.log(arr2.length);
console.log(arr2.indexOf("puppy"));

arr1 = [1, 2, 3, 4, 5];

// reverse 기존의 배열 변경시킴, 순서 뒤집어주는 메소드
arr1.reverse();
console.log(arr1);

// join 배열을 문자열로
let str3 = arr1.join("-"); // "54321"
console.log(str3);

/* 반복 */
let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

/* foreach 메소드
배열.foreach(function(요소, 인덱스, 배열){})
배열.foreach((value, index, array)=>{})
*/
arr3.forEach(function (num, i, arr) {
  console.log(`요소 : ${num} / 인덱스 : ${i} / 배열 : ${arr}`);
});

console.log("---------------------");

alphabets.forEach((alphabet, index, array) => {
  console.log(`요소 : ${alphabet} / 인덱스 : ${index} / 배열 : ${array}`);
});

console.log("---------------------");

alphabets.forEach((alphabet) => {
  console.log(`요소 : ${alphabet}`);
});

console.log("---------------------");

alphabets.forEach((alphabet, index) => {
  console.log(`요소 : ${alphabet} / 인덱스 : ${index}`);
});

// map, filter, find!
/*
1. map >> 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
2. filter >> 조건을 만족하는 요소들을 "배열"로 반환
3. find >> 조건을 만족하는 요소 중 첫번째 "값" 반환
매개변수로 익명함수(함수표현식, 화살표함수)
배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용
*/

/* map */
// [].map(function(value, index, arr){})
let arr4 = [1, 2, 3, 4, 5];
arr4.map(function (e) {
  return e * 2;
});

console.log(arr4);

const multiArr = arr4.map(function (e) {
  return e * 2;
});

console.log("함수 표현식 : " + multiArr); //2, 4, 6, 8, 10

const multiArr2 = arr4.map((e) => e * 3);
console.log("화살표 함수 : " + multiArr2);

/* filter */
arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.filter(function (e) {
  return e.length >= 6;
});

let six = arr2.filter(function (e) {
  return e.length >= 6;
});
console.log("함수표현식 : " + six);

let six2 = arr2.filter((e) => e.length >= 6);
console.log("화살표 함수 : " + six2);

/* find */
let findResult = multiArr.find(function (e) {
  return e > 7;
});

console.log(findResult);

/* 화살표 함수 */
// 중괄호를 쓰지 않아도 됨
// 중괄호를 쓰지 않을 때는 return이 필요 없음!
let findResult2 = multiArr.find((e) => e < 7);
console.log(findResult2);

/* for in */
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

for (let area in areaNum) {
  // console.log(area);
  // areaNum.Seoul;
  // areaNum["Seoul"] -> 대괄호 접근법을 이용해서 value에 접근
  console.log(areaNum[area]);
}
