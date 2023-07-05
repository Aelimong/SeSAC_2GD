console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

//document.getElementById('아이디');
console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

//document.getElementsByClassName('클래스명');
console.log(document.getElementsByClassName("pink")); // 클래스가 하나여도 배열로 출력
console.log(document.getElementsByClassName("pink")[0]);

//document.getElementsByTagName('태그');
console.log(document.getElementsByTagName("div")[0]);

//document.getElementsByName('네임');
console.log(document.getElementsByName("id")[0]);

// querySelector()
/* CSS에서 사용했던 선택자를 이용해서 요소 선택!
선택자와 일치하는 첫번째 요소를 반황
*/
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("#red"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));
console.log("===============");

// querySelectorAll()
const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}
console.log("----------------");
//for of 문 사용해보기!
for (let pink of pinks) {
  console.log(pink);
}
