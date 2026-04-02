const { MongoClient } = require("mongodb");
const dns = require("dns");
require("dotenv").config();

dns.setDefaultResultOrder("ipv4first");

let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);

    await client.connect();

    db = client.db();

    console.log("✅ MongoDB Connected Successfully");

  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error);
    process.exit(1)
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };