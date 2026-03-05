const fs = require("fs");
const data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("File read complete");

// This code blocks the event loop until the file is read completely.