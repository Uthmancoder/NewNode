const mongoose = require("mongoose");

const dbConfig = async () => {
  try {
    const connectionString = process.env.CONNECTION_STRING;
    const connect = await mongoose.connect(connectionString);

    if (connect) {
      console.log("Database connected successfully");
    } else {
      console.log("Database connection failed");
    }
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = dbConfig;
