const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;

const connectDB = async () => {
  try {
    // 1. Initialize the client
    const client = new MongoClient(process.env.MONGO_URI);
    
    // 2. Connect to the server
    await client.connect();

    // 3. Select the specific database
    db = client.db("testmode");

    // 4. Log success AFTER connection is solid
    console.log(`✅ MongoDB Connected Successfully to: ${db.databaseName}`);

  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };