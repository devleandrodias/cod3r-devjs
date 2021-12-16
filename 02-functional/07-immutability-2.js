const numbersExp = [1, 2, 6, 72, 1, 3, 76, 1, 3];

function sumNumbersImperative(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

function sumNumbersDeclarative(numbers) {
  const sum = (x, y) => x + y;
  return numbers.reduce(sum);
}

function sumNumbersRecursive(array, total = 0) {
  if (!array.length) return total;

  return sumNumbersRecursive(array.slice(1), total + array[0]);
}

console.log(sumNumbersImperative(numbersExp));
console.log(sumNumbersDeclarative(numbersExp));
console.log(sumNumbersRecursive(numbersExp));
