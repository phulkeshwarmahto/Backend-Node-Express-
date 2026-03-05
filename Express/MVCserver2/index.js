require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

// Protected route
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome user", userId: req.user.id });
});

app.listen(process.env.PORT, () => {
  console.log("🚀 Server running");
});
