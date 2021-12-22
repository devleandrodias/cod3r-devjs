const path = require("path");

const readFiles = require("./functions/read-files");
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

const joinElements = (element) => element.join(" ");
const separateByLines = (lines) => lines.split("\n");
const separateByWords = (lines) => lines.split(" ");

function groupWords(words) {
  return Object.values(
    words.reduce((grouping, y) => {
      const word = y.toLowerCase();
      const quantity = grouping[word] ? grouping[word].quantity + 1 : 1;
      grouping[word] = { word, quantity };
      return grouping;
    }, {})
  );
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
  .then(filterExtensionFile(".srt"))
  .then(readFiles)
  .then(joinElements)
  .then(separateByLines)
  .then(removeBlankLines)
  .then(removeUsingRegExp(patternSubtitleTimer))
  .then(removeUsingRegExp(patternOnlyNumbers))
  .then(removeCaracters(invalidsCaracters))
  .then(joinElements)
  .then(separateByWords)
  .then(groupWords)
  .then(orderBy("quantity"))
  .then(console.log);
