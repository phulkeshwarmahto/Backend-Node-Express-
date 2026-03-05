const express = require("express");
const app = express();


// req.params (VERY IMPORTANT)
// 👉 Dynamic values in URL


// Define a GET route for the "/test" endpoint

app.get("/test", (req, res) => {
    // Log the requested URL to the console
    console.log(req.url);
    // Log the response URL to the console
    console.log(res.url);
    // Send a response back to the client
    res.send("Check terminal");
});

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send("Query received");
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("User ID received");
});

app.get("/user/:id/:name", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});


// res.send()

// 👉 Send response to browser

app.get("/",(req,res) => {
  // res.send("Hello World");
  res.send("<h1>Hello</h1>");
})

app.get("/notfound", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
