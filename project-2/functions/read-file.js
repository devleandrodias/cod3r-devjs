const fs = require("fs");
const { Observable } = require("rxjs");

function readFile() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          try {
            const file = fs
              .readFileSync(value, { encoding: "utf-8" })
              .toString();

            subscriber.next(file);
          } catch (error) {
            subscriber.error(error);
          }
        },
      });
    });
  };
}

module.exports = readFile;
