const { timer, Subscription } = require("rxjs");

const obs$ = timer(3000, 500);

const sub1 = obs$.subscribe((n) => {
  console.log(`#1 - Generated number ${n}`);
});

const sub2 = obs$.subscribe((n) => {
  console.log(`#2 - Generated number ${n}`);
});

const sub = new Subscription();

sub.add(sub1);
sub.add(sub2);

setTimeout(() => {
  sub.unsubscribe();
}, 10000);
