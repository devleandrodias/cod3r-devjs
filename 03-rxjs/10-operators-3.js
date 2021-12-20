const { Observable } = require("rxjs");

function ofWithDelay(time, ...elements) {
  return new Observable((sub) => {
    (elements || []).forEach((el, index) => {
      setTimeout(() => {
        sub.next(el);

        if (elements.length === index + 1) {
          sub.complete();
        }
      }, time * (index + 1));
    });
  });
}

ofWithDelay(
  2000,
  1,
  2,
  3,
  4,
  "Leandro",
  6,
  7,
  false,
  9,
  [1, 2, 3, 4]
).subscribe(console.log);
