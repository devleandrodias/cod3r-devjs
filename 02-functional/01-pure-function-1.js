/**
 * a pure function is a function where
 * the return value is determined only by its input values,
 * with no observable side effects
 */

// Dependency (External)
const PI = 3.14;

// Impure function (Level 2)
function circularArea(radiu) {
  return radiu * radiu * PI;
}

// Impure function (Level 1)
function circularArea2(radiu) {
  return radiu * radiu * Math.PI;
}

// Pure function
function circularArea3(radiu, pi) {
  return radiu * radiu * pi;
}

console.log(circularArea(10));
console.log(circularArea2(10));
console.log(circularArea3(10, Math.PI));
