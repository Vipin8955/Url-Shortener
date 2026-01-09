const mongoose = require("mongoose");

async function connectMongo(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = { connectMongo };
