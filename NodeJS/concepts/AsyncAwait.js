const fs = require("fs/promises");

async function readFile() {
  const data = await fs.readFile("file.txt", "utf-8");
  console.log(data);
}

readFile();
console.log("File read initiated");
// Async/Await = cleaner way to handle asynchronous code