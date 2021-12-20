const { Observable } = require("rxjs");

const promise = new Promise(function (resolve, reject) {
  resolve("Promise is cool!");
  resolve("Promise is cool!");
  resolve("Promise is cool!");
  resolve("Promise is cool!");
});

promise.then(console.log);

// DataStream
const obs = new Observable((subscriber) => {
  subscriber.next("Observer is cool!");
  subscriber.next("Observer is cool!");
  subscriber.next("Observer is cool!");

  setTimeout(() => {
    subscriber.next("Observer is cool!");
    subscriber.complete();
  }, 1000);
});

obs.subscribe(console.log);
obs.subscribe((value) => console.log(value.toUpperCase()));
