const { from, Observable } = require("rxjs");

function first() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          subscriber.next(value);
          subscriber.complete();
        },
      });
    });
  };
}

function last() {
  return function (source) {
    return new Observable((subscriber) => {
      let last;
      source.subscribe({
        next(v) {
          last = v;
        },
        complete() {
          subscriber.next(last);
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5, 6]).pipe(first()).subscribe(console.log);
from([1, 2, 3, 4, 5, 6]).pipe(last()).subscribe(console.log);
