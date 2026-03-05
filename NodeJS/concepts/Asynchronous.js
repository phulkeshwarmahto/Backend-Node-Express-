const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Done");
// Asynchronous = multiple works at a time

// Next line does not wait for current line to finish.