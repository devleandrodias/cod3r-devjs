// This is a arrow function
() => {
  console.log("Hello arrow function!");
};

// Ex: arrow funtions
const sayGoodMorning = () => "Good morning!";

const sayGoodAfternoon = () => {
  return "Good afternoon!";
};

console.log(sayGoodMorning());
console.log(sayGoodAfternoon());

const sumArray = (numbers) => {
  let total = 0;

  for (const x of numbers) {
    total += x;
  }

  return Number(total.toPrecision(2));
};

console.log(sumArray([1, 5, 2, 6, 0.2, 7.1, 2.3, 7.2]));

// This
Array.prototype.log = function () {
  console.log("Log!!!");
};

Array.prototype.last = function () {
  console.log(this[this.length - 1]);
};

const numbers = [1, 2, 3];

numbers.log();
numbers.last();
