const fs = require('fs');

fs.readFile("a.txt", (err, dataA) => {
  fs.readFile("b.txt", (err, dataB) => {
    fs.readFile("c.txt", (err, dataC) => {
      console.log("All done");
      console.log(dataA.toString(), dataB.toString(), dataC.toString());
    });
  });
});
// This code demonstrates "callback hell" due to nested callbacks.
// ❌ Hard to read
// ❌ Hard to debug