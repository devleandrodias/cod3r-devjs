const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(
  (number, index, array) => number * (2 + (index + array.length))
);

console.log(result);

const names = ["Lucas", "Ellen", "Ana", "Nayara", "Daniel", "Ronaldo", "Osmar"];
console.log(names.map((x) => x[0]).toString());
