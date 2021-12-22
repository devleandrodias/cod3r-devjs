const path = require("path");
const { Observable } = require("rxjs");

const readFile = require("./functions/read-file");
const readFilesDirectory = require("./functions/read-files-directory");
const filterExtensionFile = require("./functions/filter-extension-file");

const invalidsCaracters = require("./util/caracters");

const {
  patternOnlyNumbers,
  patternSubtitleTimer,
} = require("./regexp/subtitle-patterns");

const {
  removeCaracters,
  removeBlankLines,
  removeUsingRegExp,
} = require("./functions/remove-invalids-caracters");

function separateTextByLines() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          value.split("\n").forEach((x) => {
            subscriber.next(x);
          });
        },
      });
    });
  };
}

function separateTextByWords() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(texto) {
          texto.split(" ").forEach((step) => {
            subscriber.next(step);
          });
        },
      });
    });
  };
}

function groupWords() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          const aggrouped = Object.values(
            value.reduce((grouping, y) => {
              const word = y.toLowerCase();
              const quantity = grouping[word] ? grouping[word].quantity + 1 : 1;
              grouping[word] = { word, quantity };
              return grouping;
            }, {})
          );

          subscriber.next(aggrouped);
        },
      });
    });
  };
}

function orderBy(attr, order = "desc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(order === "asc" ? asc : desc);
  };
}

const directoryPath = path.resolve(__dirname, "..", "resources", "subtitles");

readFilesDirectory(directoryPath)
  .pipe(filterExtensionFile(".srt"))
  .pipe(readFile())
  .pipe(separateTextByLines())
  .pipe(removeBlankLines())
  .pipe(removeUsingRegExp(patternSubtitleTimer))
  .pipe(removeUsingRegExp(patternOnlyNumbers))
  .pipe(removeCaracters(invalidsCaracters))
  .pipe(separateTextByWords())
  .pipe(removeBlankLines())
  .subscribe(console.log);
