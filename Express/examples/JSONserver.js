// Send JSON (API)

const express = require("express")

const app = express()

app.get("/api/user",(req,res) => {
    res.json({
        name: "Beginner",
        skill: "Node + Express"
    })
})

app.get("/notfound", (req, res) => {
  res.status(404).send("Page not found");
});


app.listen(3000)