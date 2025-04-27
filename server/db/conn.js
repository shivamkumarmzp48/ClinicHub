const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MONGO_URI is undefined. Check your .env file.");
  process.exit(1);
}

const client = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" MongoDB connected successfully.");
  })
  .catch((error) => {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  });

module.exports = client;
