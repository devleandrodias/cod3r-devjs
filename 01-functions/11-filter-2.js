Array.prototype.myFilter = function (fn) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) filtered.push(this[i]);
  }

  return filtered;
};

const prices = [34.3, 23.1, 234.23, 21.5, 64.23];
const pricesFiltered = prices.myFilter((x) => x >= 50);

console.log(prices);
console.log(pricesFiltered);
