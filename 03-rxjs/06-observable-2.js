const { Observable, noop } = require("rxjs");

const obs = Observable.create((subscriber) => {
  subscriber.next("RxJS ");
  subscriber.next("is ");
  subscriber.next("very ");
  subscriber.next("cool ");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error(`What is the problem?`);
  }
});

obs.subscribe(
  (value) => console.log(value),
  (err) => console.error(err), // || noop
  () => {
    console.log("Finish...");
  }
);

obs.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.log("Finish...");
  },
});
