/**
 * A programming language is said to have first-class
 * functions when functions in that language are
 * treated like any other variable.
 */

const x = 3;

// First Class Function
const y = function (txt) {
  return txt;
};

console.log(x);
console.log(y("Hello"));
