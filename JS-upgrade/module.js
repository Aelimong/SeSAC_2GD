// export default 사용 할 때는 함수 선언문만 가능!! function(){}
// default는 내보낼 게 하나밖에 없을 때 사용!
// export default function sayHi() {
//   console.log("export default 사용");
// }

// export default sayHi2 = () =>{
//   console.log("함수 표현식은 안 돼요!");
// }

function sayHi3() {
  console.log("export default 사용");
}

export default sayHi3;
