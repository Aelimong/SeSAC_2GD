console.log("안녕하세용");
// alert("안녕하세요!");
// confirm("JS 재밌지 않나요?");
// prompt("당신의 이름은?");

/* 1. 문자열, String */
let myName = "애림";
let myCity = "부산";

console.log(myName, myCity);

// 내 이름은 애림이고요, 사는 곳은 Seoul이에요.
console.log("내 이름은", myName, "이고요, 사는 곳은", myCity, "이에요.");
console.log("내 이름은 " + myName + "이고요, 사는 곳은 " + myCity + "이에요.");
console.log(`내 이름은 ${myName}이고요, 사는 곳은 ${myCity}이에요.`);

let myInfo =
  "+로 연결: " +
  "내 이름은 " +
  myName +
  "이고요, 사는 곳은 " +
  myCity +
  "이에요.";
let myInfo2 = `벡틱으로 연결: 내 이름은 ${myName}이고요, 사는 곳은 ${myCity}이에요.`;

//쉼표를 이용하여 연결한 문자는 변수에 들어가지 않음!
console.log(myInfo);
console.log(myInfo2);

/* 2. 숫자 Number */
// 연산 가능
let num1 = 100;
let num2 = 3.14;

console.log(num1 + num2);
console.log(myName + num1); // 숫자와 문자열의 덧셈 = 숫자가 문자열 취급되어 연결됨
console.log(myName - num1); // 숫자와 문자열의 뺄셈 - NaN(Not a Number)

/* 3. Boolean */
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

/* 4. undefined & null*/
let undef;
console.log(undef);

let empty = null;
console.log(empty);

console.log("-----------------------");

/* 5. Array 배열 */
let fruits = ["orange", "kiwi", "mango", "apple"];
let fruits2 = new Array("orange", "kiwi", "mango", "apple");
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

// 이차원 배열, 배열 안에 배열이 있는 형태
let kr = [
  ["가", "나", "다"],
  ["갸", "냐", "댜"],
  ["거", "너", "더"],
];

console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

/* 6. Object */
// 배열은 순서가 있는 반면에 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
};

console.log(cat);

// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);

// 대괄호 표기법
console.log(cat["name"]);
console.log(cat["age"]);
console.log(cat["isCute"]);

cat.name = "딸랑이";
console.log(cat);

cat["gender"] = "F";
console.log(cat);

cat["parent"] = [{ mom: "mom name", papa: "papa name" }];
console.log(cat.parent[0].mom);
console.log(cat.parent[0].papa);

let aelimInfo = {
  name: "Aelim Jeong",
  age: "31",
  hobby: "Reading books",
  city: "Seoul",
};

console.log("애림스 자기소개");
console.log(aelimInfo.name);
console.log(aelimInfo.age);
console.log(aelimInfo.hobby);
console.log(aelimInfo.city);

// typeof
console.log("--------typeof---------");
let und;
console.log(typeof "문자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});

/* 형변환 */
// let likeNum = prompt("가장 좋아하는 숫자는?");
// console.log(typeof likeNum);

// likeNum = Number(likeNum);
// console.log("명시적 형변환: " + typeof likeNum);

//1. >> 문자 String(), toString()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());

//2. >> 숫자 Number(), parseInt() => 정수로 변환
let n1 = true; //boolean
let n2 = false; //boolean
let n4 = "3.14"; //string

console.log(Number(n1)); // true -> 1
console.log(Number(n2)); // false -> 0

console.log(typeof Number(n4)); // 3.14
console.log(Number(n4));

console.log(typeof parseInt(n4));
let n5 = parseInt(n4);
console.log(n5);

/* 성적 구하는 프로그램 실습 */
// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");

// let avgScore = (Number(mathScore) + Number(engScore)) / 2;

// console.log("평균 점수: " + avgScore + "점");

/* Typeof 실습 */
let num = 0;
let str = "";
let arr = [];

console.log(`"${typeof num}" isn't "${typeof str}" data type.`);
console.log(
  `typeof를 Array이나 null에 사용하면, "${typeof arr}" 결과를 얻을 수 있습니다.`
);
