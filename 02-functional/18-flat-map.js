const letters = [
  ["h", "e", "l", "l", "o", " "],
  ["s", "r", ".", " "],
  ["l", ["e", "a", ["n"], "d"], "r", "o"],
];

console.log(letters);
console.log(letters.flat(Infinity));

const result = letters
  .flat(Infinity)
  .map((el) => el.toUpperCase())
  .reduce((pv, cv) => pv + cv);

const result2 = letters
  .flat(Infinity)
  .flatMap((el) => [el, ","])
  .reduce((pv, cv) => pv + cv);

console.log(result);
console.log(result2);
