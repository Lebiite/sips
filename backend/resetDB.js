import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import MenuItem from "./models/MenuItem.js";

dotenv.config();

async function reset() {
  if (!process.env.MONGO_URI) {
    console.log("❌ MONGO_URI missing in .env");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected to MongoDB");

  await Category.deleteMany({});
  await MenuItem.deleteMany({});
  console.log("🧹 All categories & menu items cleared!");

  process.exit();
}

reset();
