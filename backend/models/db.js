
// models/db.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

// --- Native MongoDB client (for contacts) ---
const client = new MongoClient(process.env.MONGO_URI);
let db = null;

// --- Connect both MongoDB Native + Mongoose ---
export async function connectDB() {
  try {
    // Connect Native MongoDB Driver
    await client.connect();
    db = client.db(); // your database name is auto-read from URI
    console.log("✅ Native MongoDB connected");

    // Connect Mongoose to the SAME database
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: db.databaseName,
    });

    console.log("✅ Mongoose connected");

    return db;
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  }
}

// Return the native database
export function getDB() {
  if (!db) throw new Error("Database not connected!");
  return db;
}

export { ObjectId };
