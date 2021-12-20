const { interval, from } = require("rxjs");

// Operator
const generateNumbers = interval(500);

// Subscription = Subscriber
const subscription1 = generateNumbers.subscribe((number) => {
  console.log(Math.pow(2, number));
});

const subscription2 = generateNumbers.subscribe(console.log);

// DataStream
from([1, 2, 3]).subscribe((x) => console.log(`### ${x}`));

setTimeout(() => {
  subscription1.unsubscribe();
}, 8000);

setTimeout(() => {
  subscription2.unsubscribe();
}, 4000);
