const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myFirstDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err.message));

// HOME CHECK
app.get("/", (req, res) => {
  res.send("Server + MongoDB working");
});

// CREATE USER (POST)
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL USERS (GET)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ SINGLE USER (GET)
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch {
    res.status(400).send("Invalid ID");
  }
});

// UPDATE USER (PUT)
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch {
    res.status(400).send("Update failed");
  }
});

// DELETE USER (DELETE)
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch {
    res.status(400).send("Delete failed");
  }
});

// START SERVER
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
