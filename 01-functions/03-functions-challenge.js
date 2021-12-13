// Challenge 1 sum(3)(4)(5)
function challenge(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}

console.log(challenge(3)(4)(5));

// Challenge 2 calculate(3)(7)(fn)
const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;

function calculate(x) {
  return (y) => {
    return (fn) => {
      return fn(x, y);
    };
  };
}

console.log("SUM " + calculate(2)(5)(sum));
console.log("SUB " + calculate(2)(5)(sub));
console.log("MUL " + calculate(2)(5)(mul));
console.log("DIV " + calculate(2)(5)((x, y) => x / y));
