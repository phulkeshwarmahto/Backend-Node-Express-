const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User data received");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
