// here we define controller functions for user routes
// User.insertMany() = will be used in the future for bulk inserts
// for example 
// User.insertMany([{name: "Alice", age: 30}, {name: "Bob", age: 25}])

const User = require("../models/User");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ALL
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// insertMany example

exports.insertManyUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ONE
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch {
    res.status(400).send("Invalid ID");
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
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
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch {
    res.status(400).send("Delete failed");
  }
};
