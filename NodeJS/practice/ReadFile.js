const fs = require('fs')
fs.readFile('file.txt', 'utf-8', (err, data) => {
  console.log(data);
  console.log("Done");
}); 
// Synchronous = one work at a time
