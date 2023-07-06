const div1 = document.getElementById("div1");

/* 
1. 태그 내부 내용
 - innerText : 요소안의 텍스트를 가져오거나 수정
 - innerHTML : 요소안의 '코드'를 가져오거나 수정
 - textContent : innerText 처럼 텍스트 정보 표시
*/

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다! &hearts;";
div1.innerText = "        여기는 <b>첫번째</b> div 태그입니다! &hearts;";
console.log(div1.innerText);

div1.textContent = "        여기는 <b>첫번째</b> div 태그입니다! &hearts;";
console.log(div1.textContent);

/* 2. 속성
- setAttribute() : 속성값 설정
- getAttribute() : 속성값 가져오기
*/

// 메소드로 접근 후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

naver.setAttribute("href", "https://www.google.com");
naver.innerText = "Google";

console.log(pooh.getAttribute("src"));

// 점(.)으로 접근 후 변경
console.log(pooh.src);
console.log(pooh.alt);

pooh.alt = "푸우사진!";

/* 3. CSS 지정
  - 
*/
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");

console.log(h1);
console.log(list);

// 3-1 style 속성 사용
// for (let li of list) {
//   console.log(li);
//   li.style.backgroundColor = "#d1d1d1";
//   li.style.color = "green";
//   li.style.fontSize = "1.2rem";
// }

// 3-2 classList 사용
console.log(h1.classList);

h1.classList.add("add-h1");
h1.classList.remove("add-h1");
console.log(h1.classList.contains("add-h1"));

// toggle 있으면 제거 없으면 생성
//h1.classList.toggle("add-h1");

// li 태그에 friends 클래스 추가
for (let li of list) {
  li.classList.toggle("friends");
}
console.log(list);

/* 4. 요소 생성, 추가, 삭제, 접근 */
// 요소에 접근하기
const friends = document.getElementById("friends");
const tiger = document.getElementById("tiger");

console.log(friends);
console.log(tiger);

// 자식 노드에 접근
console.log("--- 자식 노드 접근 ---");
console.log(friends.children[0]);

// 부모 노드에 접근
console.log("--- 부모 노드 접근 ---");
console.log(tiger.parentNode);

// 형제 노드에 접근
console.log("--- 형제 노드 접근 ---");
console.log(tiger.previousElementSibling);
console.log(tiger.nextElementSibling.nextElementSibling);

// 4-1. 요소 생성
const container = document.querySelector(".container");
const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "red";

// p 요소 만들어진 상태 -> 아직 화면에는 보이지 않음
console.log(p);

// 4-2 요소 추가
container.append(p);

const p2 = document.createElement("p");
p2.innerText = "p2";

const p3 = document.createElement("p");
p3.innerText = "p3";

p2.classList.add("p-2");
p3.classList.add("p-3");

// prepend 맨 앞에 붙이는 것!!!! 자식 요소로 붙는 것
container.prepend(p2);

// append 맨 마지막에 붙이는 것!! 자식 요소로 붙는 것 ★자주 사용
container.append(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 H2";
// 이전 형제 -> 형제 요소로 붙는 것
h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "h33333";
// 다음 형제 -> 형제 요소로 붙는 것
h1.after(h3);

// appendChild 사용
const p4 = document.createElement("p");
p4.innerText = "p4";
p4.classList.add("p-2");

const p5 = document.createElement("p");
p5.innerText = "p5";
p5.classList.add("p-3");

//container.append(p4, p5, "안녀아세요");
container.appendChild(p4, p5);

/*container > div > img
                  > span 
*/
const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

// div에 img 추가
//img.src = "../JS_Practice/images/piglet.png";
img.setAttribute("src", "../JS_Practice/images/piglet.png");
img.width = "300";
img.alt = "피글렛";
console.log(img);
div.append(img);

// div에 span 추가
//span.innerText = "안녕 나는 피글렛이야";
span.innerHTML =
  "안녕 나는 <span style='color: pink; font-weight: 700;'>피글렛</span>이야";
div.append(span);

// container에 div 추가
container.append(div);

/* 4-3 요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");

// firstLi.remove(); -> 자기 자신이 지워지는 지
// removeChild -> 자기 자식 요소가 지워지는지의 차이!
friends.removeChild(firstLi);
