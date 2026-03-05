const fs = require("fs/promises");

fs.readFile("file.txt", "utf-8")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
console.log("File read initiated");
// Promises = better way to handle asynchronous code than callbacks