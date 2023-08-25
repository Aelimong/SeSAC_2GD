// 전개연산자 ... 사용해보기
// 1-1. 배열에 접근
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];

console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// ... 접근해서 펼쳐주는 역할!!
console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

const arr3 = arr1.concat(arr2);
//전개 연산자는 중간에 원하는 요소를 넣을 수 있다!
const arr4 = [...arr1, "추가한 요소", ...arr2];

console.log(arr3);
console.log(arr4);

// 1-2 문자열에 전개연산자 사용하기
const str = "almonhigh"; //["a","l", "m", "o", "n", "h", "i", "g", "h"]
let strToArr = str.split(""); // str을 객체로 만들어줌
let strToArr2 = [...str]; // 더 직관적임
console.log("str 사용 : " + strToArr);
console.log(typeof strToArr);

console.log("[...] 사용 : " + strToArr2);
console.log(typeof strToArr2);

/*
split("") : string to arr
(split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경)
join() : arr to String
*/

console.log(str);
for (let el of str) {
  console.log(el); //문자열도 배열처럼 접근 가능
}

// 1-3. 오브젝트에 전개연산자 사용하기
let me1 = {
  name: "alie",
  height: 163,
  married: false,
  friend: null,
};

let me2 = {
  name: "진형",
  like: ["sleeping", "놀기"],
  friend: {
    name: "지윤",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름음 ${this.name}이고요, 키는 ${this.height}입니다.`
    );
  },
};

// name이 겹치는 경우 아래 name으로 들어간다!!
let me = {
  ...me1,
  ...me2,
  gender: "F",
};

console.log(me);
console.log(me.name);

//함수는 이렇게 접근!
me.greeting();

//실습문제 1
const word1 = "abc";
const word2 = "xyz";
// ["a", "b", "c", "d", "e", "f"];
const wordArr = [...word1, ...word2];
const wordArr2 = (word1 + word2).split("");
const wordArr3 = word1.split("").concat(word2.split(""));

console.log(wordArr);
console.log(wordArr2);
console.log(wordArr3);

/* 2. 구조 분해 할당 */
//2-1. 배열의 구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [val1, val2, val3] = arr5;
console.log(val1);

// let val1 = arr5[0];
// let val2 = arr5[1];
// let val3 = arr5[2];

const arr6 = ["빨강", "주황", "노랑", "분홍"];
//순서가 중요하기 때문에 빼고싶어도 자리는 만들어둬라
const [red, orange, , pink] = arr6;
const [v1, v2, v3, v4, v5 = "green"] = arr6;
console.log(v5);

// 변수 교환해보기
let value1 = "second";
let value2 = "first";
let temp;
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1, value2);

// 구조 분해 할당 이용해서 교환하기
value1 = "second";
value2 = "fisrt";
[value1, value2] = [value2, value1];
console.log(value1, value2);

// 2-2. 오브젝트의 구조 분해 할당
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};

console.log(obj.title);
console.log(obj["title"]);

const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);

// const { t1, c1, n1 } = obj;
// console.log(t1); t1이라는 키가 없으니 undefined

// key와 다른 이름으로 할당하는 방법
const { title: t2, content: c2, num: n2 } = obj;
console.log("key 이름 t2로 변경 : " + t2);

//key5 와 key2를 제외한 나머지를 obj2 에 모아둠!!! => 전개연산자는 펼치는 역할뿐만 아니라 모아주는(nest) 기능도 있음
const { key5, key2, ...obj2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};

console.log(key2, key5);
console.log(obj2);

/* ...rest */
// 매개변수가 확실하지 않을 때 ... 넣어주면 어떤 값이던 들어올 수 있음~!
function test(...val) {
  const [a, b, c, ...rest3] = val;
  console.log(rest3);
}

test(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Quiz
//매개변수가 몇개 들어오든 합해주는 함수 addNumber
function addNumber(...val) {
  let sum = 0;
  for (let el of val) {
    sum += el;
  }
  return sum;
}

console.log(addNumber(3, 5, 10, 30, 60));

function introduce(name, like = "빵", hate, goodAt) {
  console.log(`내 이름은 ${name}`);
  console.log(`좋아하는 것은 ${like}`);
  console.log(`싫어하는 것은 ${hate}`);
  console.log(`저는 ${goodAt}을 잘합니다.`);
}

introduce("정애림", "마라탕", "건포도", "밥 먹기");
