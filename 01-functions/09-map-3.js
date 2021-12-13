// Internal map

Array.prototype.myMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }

  return mapped;
};

const arrayTest = [1, 2, 3, 4, 5];

console.log(arrayTest.myMap((x) => x * 2));
