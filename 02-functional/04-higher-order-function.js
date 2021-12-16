/**
 * Functions that operate on other functions taking
 * them as arguments or returning them
 */

function execute(fn, ...params) {
  // Higher Order Function
  return fn(...params);
}

const sum = (a, b, c) => a + b + c;
const mul = (a, b, c) => a * b * c;

console.log(execute(sum, 4, 6, 3));
console.log(execute(mul, 4, 6, 3));

function function1(txt1) {
  return function function2(txt2) {
    return function function3(txt3) {
      return `${txt1} ${txt2} ${txt3}`;
    };
  };
}

console.log(function1("Leandro")("Bemfica")("Dias"));
