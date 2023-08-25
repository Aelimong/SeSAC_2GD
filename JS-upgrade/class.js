// 오브젝트 생성
/*
속성
  만들어진 연도 year
  집의 이름 name
  창문의 개수 window
함수
  만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
  창문의 개수를 콘솔창에 출력하는 함수

*/

class House {
  //생성자 메소드 -> 속성이 들어가면 됨
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year}년 지났어요.`);
  }

  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();

/*
추가할 속성
  층수 floor
  창문 제조업체 windowMaker
추가할 함수
  aptInfo() 아파트 정보를 나타내는 메소드
*/
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}에 지어진  ${this.name}. 총 총수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }

  // Overriding : 메소드 재정의
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 만들어졌습니다.`;
  }
}

const apt1 = new Apartment(2020, "래미안", 6, 19, "KCC");
console.log(apt1);
console.log(apt1.getAptInfo());
apt1.getAge();
// apt1.getWindow();
console.log(apt1.getWindow());

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rec1 = new Shape(3, 4);
console.log(rec1.getArea());

/*
  1.Rectangle(직사각형) 클래스만들기
  • Shape 클래스 상속
  • 사각형의 넓이 구하는 메소드 getArea()
  • 직사각형의 대각선 길이 구하는 메소드 추가
*/

class Rectangle extends Shape {
  // 안에서 쓸 게 아니면 없어도 됨!
  // constructor(width, height) {
  //   super(width, height);
  // }
  // getArea() {
  //   return this.width * this.height;
  // }

  getDiagonal() {
    return Math.sqrt(this.width ** 2 * this.height ** 2);
  }
}

const rec2 = new Rectangle(10, 12);
console.log(rec2.getDiagonal());

/*
  2. Triangle(삼각형) 클래스 만들기
  • 넓이 반환하는 메소드 getArea()
*/

class Triangle extends Shape {
  // overriding
  // 함수의 이름은 같지만 기능을 다르게 쓰고 싶을 때
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const tri = new Triangle(3, 4);
console.log(tri.getArea());

// 3. Circle (원) 클래스 만들기
// • Shape 클래스를 상속
// • width, height 이외에 radius 생성자 추가
// • getArea() 메소드는 원의 넓이를 리턴

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  //overriding
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

const cir1 = new Circle(1, 1, 6);
console.log(cir1.getArea());
