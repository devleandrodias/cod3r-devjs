/**
 * functors are objects that implement the MAP function. Which is also a value wrapper.
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(typeof nums);

const newNums = nums.map((el) => el + 10);

console.log(nums, newNums);

function SecureType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) return SecureType(null);
      return SecureType(fn(this.value));
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const result = SecureType("This is a text")
  .map((el) => el.toUpperCase())
  .map((el) => `=== ${el} ===`)
  .flatMap((el) => el.split("").join(" "));

console.log(result);
