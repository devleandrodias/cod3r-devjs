function sayGoodMorning() {
  console.log("Good morning!");
}

// Anonymous function
const sayGoodAfternoon = function () {
  console.log("Good afternoon!");
};

function runAnything(fn) {
  if (typeof fn === "function") fn();
}

runAnything(() => console.log(3));
runAnything(sayGoodMorning);
runAnything(sayGoodAfternoon);

function pow(x) {
  return function (y) {
    return Math.pow(x, y);
  };
}

const pow2 = pow(2);
const pow8 = pow(8);

console.log(pow2(2));
console.log(pow2(4));

console.log(pow8(2));
console.log(pow8(4));

console.log(pow(2)(3));
console.log(pow(2)(6));
