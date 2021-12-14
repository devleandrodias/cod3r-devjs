Array.prototype.myReduce = function (fn, iv) {
  let acc = iv;

  for (let i = 0; i < this.length; i++) {
    const el = this[i];

    if (!acc && i < 1) {
      acc = el;
    } else {
      acc = fn(acc, el, i, this);
    }
  }

  return acc;
};

console.log([1, 2, 3].myReduce((pv, cv) => pv + cv, 4));
