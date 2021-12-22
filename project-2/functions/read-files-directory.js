const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function readFilesDirectory(directoryPath) {
  return new Observable((subscriber) => {
    try {
      // Data Stream
      fs.readdirSync(directoryPath).forEach((file) =>
        subscriber.next(path.join(directoryPath, file))
      );

      subscriber.complete();
    } catch (err) {
      subscriber.error(err);
    }
  });
}

module.exports = readFilesDirectory;
