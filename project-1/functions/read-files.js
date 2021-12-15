const fs = require("fs");
const path = require("path");

function readFile(pathFile) {
  return new Promise((resolve, reject) => {
    try {
      resolve(fs.readFileSync(pathFile, { encoding: "utf-8" })).toString();
    } catch (error) {
      reject(error);
    }
  });
}

function readFiles(pathFiles) {
  return Promise.all(pathFiles.map(readFile));
}

module.exports = readFiles;
