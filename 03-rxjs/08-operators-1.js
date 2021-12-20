// Creator operators
const { of, from } = require("rxjs");

// Pipeable operators
const { last, first, map } = require("rxjs");

from(["Leandro", "Beatriz", "Thaísa"])
  .pipe(
    first(),
    map((x) => x.toUpperCase())
  )
  .subscribe((value) => {
    console.log(`Value: ${value}`);
  });

of(1, 2, "Ana", false, "Last")
  .pipe(last())
  .pipe(map((x) => x.toUpperCase()))
  .subscribe(function (value) {
    console.log(`Value generated = ${value}`);
  });
