const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
});

app.get("/data", (req, res) => {   // get request handler
  res.json(req.body);
});

app.post("/data", (req, res) => {   // post request handler
  res.json(req.body);
});

app.listen(3000);
console.log("Server running on port 3000");