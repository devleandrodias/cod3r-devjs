const { Observable, noop } = require("rxjs");

function between(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable((subscriber) => {
    //prettier-ignore
    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i);
    });

    // With Mutability
    // for (let i = min; i <= max; i++) {
    //   subscriber.next(i);
    // }

    subscriber.complete();
  });
}

between(1, 10).subscribe({
  noop,
  next(value) {
    console.log(`# ${value}`);
  },
  complete() {
    console.log("Finish...");
  },
});
