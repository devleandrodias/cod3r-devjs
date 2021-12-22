const { Observable } = require("rxjs");

function removeBlankLines() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (value.trim()) {
            subscriber.next(value);
          }
        },
      });
    });
  };
}

function removeUsingRegExp(pattern) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (!value.match(new RegExp(pattern))) subscriber.next(value);
        },
      });
    });
  };
}

function removeCaracters(caracters) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          const result = caracters.reduce((x, y) => {
            return x.split(y).join("").trim();
          }, value);

          subscriber.next(result);
        },
      });
    });
  };
}

module.exports = {
  removeCaracters,
  removeBlankLines,
  removeUsingRegExp,
};
