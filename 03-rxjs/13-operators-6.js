const { from, Observable } = require("rxjs");

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe(operatorFn(subscriber));
    });
  };
}

function none() {
  return createPipeableOperator((subscriber) => ({
    complete() {
      subscriber.complete();
    },
  }));
}

function first() {
  return createPipeableOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    },
    error(err) {
      console.error(err);
    },
    complete() {
      subscriber.complete();
    },
  }));
}

function last() {
  let last;

  return createPipeableOperator((subscriber) => ({
    next(value) {
      last = value;
    },
    error(err) {
      console.error(err);
    },
    complete() {
      if (last !== undefined) subscriber.next(last);

      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5]).pipe(first()).subscribe(console.log);
from([1, 2, 3, 4, 5]).pipe(none()).subscribe(console.log);
from([1, 2, 3, 4, 5]).pipe(last()).subscribe(console.log);
