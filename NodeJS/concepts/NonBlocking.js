const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  console.log(data.toString());
});
console.log("File read initiated");