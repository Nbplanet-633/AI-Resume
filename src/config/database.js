const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb database");
  } catch (error) {
    console.log("error while connecting to the database : ", error);
  }
}

module.exports = connectToDB;