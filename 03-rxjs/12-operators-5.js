const { Observable, of } = require("rxjs");

function finishWith(argument) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(value.filter((el) => el.endsWith("Silva")));
          } else if (value.endsWith("Silva")) {
            subscriber.next(value);
          }
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of("Ana Silva", "Maria Silva", "Pedro Rocha", ["Leandro Dias", "Thaísa Silva"])
  .pipe(finishWith("silva"))
  .subscribe(console.log);
