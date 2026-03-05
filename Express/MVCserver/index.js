const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("MVC Backend Running");
});

// Server start
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
