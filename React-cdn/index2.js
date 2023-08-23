function HelloWorldButton() {
  const [isClick, setIsClick] = React.useState(false);
  const text = isClick ? "클릭이 되었군요" : "hello";

  return (
    //JSX 문법
    <button onClick={() => setIsClick(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}

const element = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);

//버튼을 렌더 시키는 과정
root.render(<HelloWorldButton />);
