function HelloWorldButton() {
  // isClick에 초기값을 false
  // isClick = false
  // setIsClick은 함수!
  const [isClick, setIsClick] = React.useState(false);

  //초기값이 false라서 hello 출력
  const text = isClick ? "클릭이 되었군요" : "hello";

  // button > div > span으로 구조 변경
  return React.createElement(
    "button",
    {
      //true면 false로 false면 true로
      onClick: () => setIsClick(!isClick),
    },
    //<button>여기 안에 들어갈 텍스트!!!</button>
    React.createElement("div", null, React.createElement("span", null, text))
  );
}
const element = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);

//버튼을 렌더 시키는 과정
root.render(element(HelloWorldButton));
