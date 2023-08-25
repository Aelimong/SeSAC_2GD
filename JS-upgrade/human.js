/*
• human.js 모듈 만들기
• 데이터: [‘철수’, ‘영희’] 
• 메소드: 배열을 모두 출력하는 showName()
*/

const arr = ["철수", "영희"];

function showName() {
  arr.forEach((el) => {
    console.log(el);
  });
}

export { arr, showName };
