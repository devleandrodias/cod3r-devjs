const { Observable } = require("rxjs");

function filterExtensionFile(pattern) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (value.endsWith(pattern)) {
            subscriber.next(value);
          }
        },
      });
    });
  };
}

module.exports = filterExtensionFile;
