const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("User", userSchema);

const User = require("/User");

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});