/**
 * Closure is when a function "remembers" its lexical scope,
 * even when the function is executed outside of that lexical scope
 */

const outside = require("./10-closure-scope");

const x = 1000;
console.log(outside());
