const numbersFreeze = Object.freeze([3, 1, 7, 23, 5, 1]);

const numbers1 = [3, 1, 7, 23, 5, 1];
const numbers2 = [3, 1, 7, 23, 5, 1];

// Pure function
function sortNumbersPure(numbers) {
  return [...numbers].sort((x, y) => x - y);
}

// Impure function
function sortNumbersImpure(numbers) {
  return numbers.sort((x, y) => x - y); // Side Effect
}

sortNumbersPure(numbers1);
sortNumbersImpure(numbers2);

sortNumbersPure(numbersFreeze);
// sortNumbersImpure(numbersFreeze); // Error (Freeze) Imutable

console.log(numbers1);
console.log(numbers2);
console.log(numbersFreeze);
