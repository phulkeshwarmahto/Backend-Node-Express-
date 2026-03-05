const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

console.log("Done");
// Synchronous = one work at a time

// Next line waits until current line finishes.