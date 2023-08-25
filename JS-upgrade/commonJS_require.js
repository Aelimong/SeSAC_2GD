const module1 = require("./commonJS_module.js");

console.log(module1);
console.log(module1.colors);

const soojung = new module1.Person("수정", 30);
console.log(soojung);

const { sayNeme } = require("./commonJS_module.js");
const { sayName2, sayhi2 } = require("./commonJS_module2.js");

sayName("애림");
sayName2("진형");
sayhi2();
