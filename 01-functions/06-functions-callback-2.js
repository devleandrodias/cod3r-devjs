const fs = require("fs");
const path = require("path");

const pathFile = path.resolve(__dirname, "..", "resources", "names.txt");

// Async
fs.readFile(pathFile, (_, data) => {
  console.log(data.toString());
});

// Sync
const names = fs.readFileSync(pathFile);
console.log(names.toString());
