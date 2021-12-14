// Challenge: Read file using promise

const fs = require("fs");
const path = require("path");

const pathFile = path.resolve(__dirname, "..", "resources", "names.txt");

function readFileUsingPromise(pathFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

readFileUsingPromise(pathFile).then(console.log);
