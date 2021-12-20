const { from, observeOn, asyncScheduler } = require("rxjs");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Start");

from(data).pipe(observeOn(asyncScheduler)).subscribe(console.log);

console.log("End");
