const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myFirstDB")
  .then(() => {
    console.log("✅ MongoDB connected from Node.js");
    process.exit(0);
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed");
    console.error(err.message);
    process.exit(1);
  });
