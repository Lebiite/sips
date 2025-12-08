// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Drink from "../models/Drink.js";

// dotenv.config();

// const mocktails = [
//   { name: "Virgin Mojito", category: "mocktails", price: 450, image: "/images/mojito.jpg", description: "Lime, mint, soda." },
//   { name: "Sunset Cooler", category: "mocktails", price: 480, image: "/images/sunset.jpg", description: "Orange, grenadine, soda." },
//   { name: "Berry Fizz", category: "mocktails", price: 500, image: "/images/berry.jpg", description: "Mixed berries & lemonade." },
//   { name: "Mint Lemonade", category: "mocktails", price: 400, image: "/images/mint.jpg", description: "Crushed mint & lemon." },
//   { name: "Tropical Breeze", category: "mocktails", price: 520, image: "/images/tropical.jpg", description: "Pineapple, mango & lime." },
//   { name: "Shirley Temple", category: "mocktails", price: 450, image: "/images/temple.jpg", description: "Grenadine & lemonade." },
//   { name: "Peach Cooler", category: "mocktails", price: 520, image: "/images/peach.jpg", description: "Peach, soda, lime." },
//   { name: "Strawberry Virgin Daiquiri", category: "mocktails", price: 550, image: "/images/daiquiri.jpg", description: "Crushed strawberry & lime." },
//   { name: "Coconut Splash", category: "mocktails", price: 580, image: "/images/coconut.jpg", description: "Coconut cream & pineapple." },
//   { name: "Orange Mint Fusion", category: "mocktails", price: 470, image: "/images/orange.jpg", description: "Orange, mint & soda." },
//   { name: "Ginger Zing", category: "mocktails", price: 430, image: "/images/ginger.jpg", description: "Ginger, lime, soda." },
//   { name: "Blue Lagoon Mocktail", category: "mocktails", price: 550, image: "/images/lagoon.jpg", description: "Blue Curaçao syrup & lemonade." }
// ];

// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to DB…");

//     await Drink.deleteMany();
//     await Drink.insertMany(mocktails);

//     console.log("Mocktails inserted!");
//     process.exit();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// })();




// backend/seed/drinksSeed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Drink from "../models/Drink.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI missing in .env — add MONGO_URI and retry");
  process.exit(1);
}

const mocktails = [
  { name: "Virgin Mojito", category: "mocktails", price: 450, image: "/images/mojito.jpg", description: "Lime, mint, soda." },
  { name: "Sunset Cooler", category: "mocktails", price: 480, image: "/images/sunset.jpg", description: "Orange, grenadine, soda." },
  { name: "Berry Fizz", category: "mocktails", price: 500, image: "/images/berry.jpg", description: "Mixed berries & lemonade." },
  { name: "Mint Lemonade", category: "mocktails", price: 400, image: "/images/mint.jpg", description: "Crushed mint & lemon." },
  { name: "Tropical Breeze", category: "mocktails", price: 520, image: "/images/tropical.jpg", description: "Pineapple, mango & lime." },
  { name: "Shirley Temple", category: "mocktails", price: 450, image: "/images/temple.jpg", description: "Grenadine & lemonade." },
  { name: "Peach Cooler", category: "mocktails", price: 520, image: "/images/peach.jpg", description: "Peach, soda, lime." },
  { name: "Strawberry Virgin Daiquiri", category: "mocktails", price: 550, image: "/images/daiquiri.jpg", description: "Crushed strawberry & lime." },
  { name: "Coconut Splash", category: "mocktails", price: 580, image: "/images/coconut.jpg", description: "Coconut cream & pineapple." },
  { name: "Orange Mint Fusion", category: "mocktails", price: 470, image: "/images/orange.jpg", description: "Orange, mint & soda." },
  { name: "Ginger Zing", category: "mocktails", price: 430, image: "/images/ginger.jpg", description: "Ginger, lime, soda." },
  { name: "Blue Lagoon Mocktail", category: "mocktails", price: 550, image: "/images/lagoon.jpg", description: "Blue Curaçao syrup & lemonade." }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { dbName: undefined }); // default DB from URI
    console.log("✅ Connected to MongoDB for seeding");

    // Optional: ONLY delete drinks in the mocktails category to avoid interfering with food/menu data
    await Drink.deleteMany({ category: "mocktails" });
    console.log("🧹 Cleared existing mocktails (only mocktails).");

    await Drink.insertMany(mocktails);
    console.log(`📥 Inserted ${mocktails.length} mocktails.`);
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
