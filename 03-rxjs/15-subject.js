const { Observable, Subject } = require("rxjs");

// Unicast
function getObservable() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      console.log("$ Observer...");
      subscriber.next(Math.random());
      subscriber.complete();
    }, 1000);
  });
}

// Multicasted
function getSubject() {
  const sub = new Subject();

  setTimeout(() => {
    console.log("$ Subject...");
    sub.next(Math.random());
    sub.complete();
  }, 1000);

  return sub;
}

const obs$ = getObservable();
const sub$ = getSubject();

obs$.subscribe(console.log);
obs$.subscribe(console.log);

sub$.subscribe(console.log);
sub$.subscribe(console.log);
