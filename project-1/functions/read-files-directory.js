const fs = require("fs");
const path = require("path");

function readFilesDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    try {
      const filesFiltered = fs
        .readdirSync(directoryPath)
        .map((file) => path.join(directoryPath, file));

      resolve(filesFiltered);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = readFilesDirectory;
