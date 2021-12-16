let quantity = 0;

// Pure function
const sum = (x, y) => x + y;

// Impure function
const sum2 = (a, b) => {
  quantity++; // Observable Side Effect
  return a + b;
};

console.log(sum(1, 4));
console.log(sum(1, 4));
console.log(sum(1, 4));
console.log(sum(1, 4));
console.log(sum(1, 4));

console.log(sum2(1, 2));
console.log(quantity);

console.log(sum2(1, 2));
console.log(quantity);

console.log(sum2(1, 2));
console.log(quantity);
