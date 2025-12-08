// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";

// dotenv.config();

// // ---------- DB CONNECTION ----------
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// // ---------- CATEGORY LIST (12 MAIN DISH CATEGORIES) ----------
// const categories = [
//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// // ---------- IMPORT YOUR 12×12 DISHES ----------
// import foodsPerCategory from "./data/foodsPerCategory.js";
// // Create this file next → I will generate it for you automatically below

// // ---------- SEED FUNCTION ----------
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];
//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         image: dish.img,
//         description: dish.title,
//         category: cat._id,
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("✅ SEED COMPLETE!");
//   process.exit();
// }

// seed();


// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";
// import foodsPerCategory from "./data/foodsPerCategory.js";

// // ---------- FIX __dirname for ES modules ----------
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ---------- FORCE dotenv TO LOAD backend/.env ----------
// dotenv.config({ path: path.join(__dirname, ".env") });

// // DEBUG: Show if env loaded properly
// console.log("DEBUG MONGODB_URI:", process.env.MONGODB_URI);

// // ---------- DB CONNECTION ----------
// async function connectDB() {
//   try {
//     if (!process.env.MONGODB_URI) {
//       throw new Error("MONGODB_URI is undefined. Check your .env file.");
//     }

//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// // ---------- CATEGORY LIST (12 MAIN DISH CATEGORIES) ----------
// const categories = [
//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// // ---------- SEED FUNCTION ----------
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];

//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         image: dish.img,
//         description: dish.title,
//         category: cat._id,
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("✅ SEED COMPLETE!");
//   process.exit();
// }

// seed();







// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";

// // Load .env the SAME WAY as server.js
// dotenv.config({
//   path: "./.env",
//   override: true,
// });

// // Debug log so we can see if .env loaded correctly
// console.log("DEBUG MONGODB_URI:", process.env.MONGODB_URI);

// // ---------- DB CONNECTION ----------
// async function connectDB() {
//   if (!process.env.MONGODB_URI) {
//     throw new Error("MONGODB_URI is undefined. Check backend/.env");
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// // ---------- CATEGORY LIST (12 MAIN DISH CATEGORIES) ----------
// const categories = [
//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// // ---------- IMPORT THE DISHES FOR EACH CATEGORY ----------
// import foodsPerCategory from "./data/foodsPerCategory.js";

// // ---------- SEED FUNCTION ----------
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];

//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         image: dish.img,
//         description: dish.title,
//         category: cat._id,
//       });
//     });
//   }

//   if (itemsToInsert.length > 0) {
//     await MenuItem.insertMany(itemsToInsert);
//   }

//   console.log("✅ SEED COMPLETE!");
//   process.exit();
// }

// seed();





// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";

// dotenv.config();

// // --- USE SAME VARIABLE NAME AS SERVER ---
// const MONGO_URI = process.env.MONGO_URI;

// // ---------- DB CONNECTION ----------
// async function connectDB() {
//   if (!MONGO_URI) {
//     console.error("❌ ERROR: MONGO_URI is undefined. Fix backend/.env");
//     process.exit(1);
//   }

//   console.log("DEBUG MONGO_URI:", MONGO_URI);

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// // ---------- CATEGORY LIST ----------
// const categories = [
//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// import foodsPerCategory from "./data/foodsPerCategory.js";

// // ---------- SEED FUNCTION ----------
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];
//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         image: dish.img,
//         description: dish.title,
//         category: cat._id,
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("✅ SEED COMPLETE!");
//   process.exit();
// }

// seed();




//perfect but no images 
// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";
// import foodsPerCategory from "./data/foodsPerCategory.js";

// dotenv.config();

// // --- USE SAME VARIABLE NAME AS SERVER ---
// const MONGO_URI = process.env.MONGO_URI;

// /* ----------------------------------------
//    CONNECT TO DATABASE
// ----------------------------------------- */
// async function connectDB() {
//   if (!MONGO_URI) {
//     console.error("❌ ERROR: MONGO_URI is undefined. Fix backend/.env");
//     process.exit(1);
//   }

//   console.log("DEBUG MONGO_URI:", MONGO_URI);

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// /* ----------------------------------------
//    CATEGORY LIST
// ----------------------------------------- */
// const categories = [
//   // ⭐ NEW MAIN DISHES CATEGORY ⭐
//   { title: "Main Dishes", slug: "main-dishes", image: "/uploads/all.png" },

//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// /* ----------------------------------------
//    SEED FUNCTION
// ----------------------------------------- */
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];

//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         image: dish.img, // /uploads/*.png
//         description: dish.title,
//         category: cat._id,
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("✅ SEED COMPLETE!");
//   process.exit();
// }

// seed();







// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";
// import foodsPerCategory from "./data/foodsPerCategory.js";

// dotenv.config();

// // --- READ SAME VARIABLE THAT SERVER USES ---
// const MONGO_URI = process.env.MONGO_URI;

// /* ----------------------------------------
//    CONNECT TO DATABASE
// ----------------------------------------- */
// async function connectDB() {
//   if (!MONGO_URI) {
//     console.error("❌ ERROR: MONGO_URI is undefined. Fix backend/.env");
//     process.exit(1);
//   }

//   console.log("DEBUG MONGO_URI:", MONGO_URI);

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// /* ----------------------------------------
//    CATEGORY LIST
// ----------------------------------------- */
// const categories = [
//   { title: "Main Dishes", slug: "main-dishes", image: "/uploads/all.png" },

//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// /* ----------------------------------------
//    SEED FUNCTION
// ----------------------------------------- */
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];

//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         description: dish.title,

//         // 🔥 FIXED IMAGE — NOW ALWAYS SAVED CORRECTLY
//         image_url: dish.img || `/uploads/${cat.slug}.png`,

//         category: cat._id,
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("🎉 SEED COMPLETE — Images will now show!");
//   process.exit();
// }

// seed();





// // backend/seedMenu.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/Category.js";
// import MenuItem from "./models/MenuItem.js";
// import foodsPerCategory from "./data/foodsPerCategory.js";

// dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;

// /* ----------------------------------------
//    CONNECT TO DATABASE
// ----------------------------------------- */
// async function connectDB() {
//   if (!MONGO_URI) {
//     console.error("❌ ERROR: MONGO_URI is undefined. Fix backend/.env");
//     process.exit(1);
//   }

//   console.log("DEBUG MONGO_URI:", MONGO_URI);

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1);
//   }
// }

// /* ----------------------------------------
//    CATEGORY LIST
// ----------------------------------------- */
// const categories = [
//   { title: "Main Dishes", slug: "main-dishes", image: "/uploads/all.png" },

//   { title: "Nyama Choma", slug: "nyama-choma", image: "/uploads/nyama-choma.png" },
//   { title: "Ugali Meals", slug: "ugali-meals", image: "/uploads/ugali-meals.png" },
//   { title: "Pilau", slug: "pilau", image: "/uploads/pilau.png" },
//   { title: "Biryani", slug: "biryani", image: "/uploads/biryani.png" },
//   { title: "Stews", slug: "stews", image: "/uploads/stews.png" },
//   { title: "Fish Dishes", slug: "fish-dishes", image: "/uploads/fish-dishes.png" },
//   { title: "Chapati Meals", slug: "chapati-meals", image: "/uploads/chapati-meals.png" },
//   { title: "Githeri & Muthokoi", slug: "githeri-muthokoi", image: "/uploads/githeri-muthokoi.png" },
//   { title: "Mukimo Meals", slug: "mukimo", image: "/uploads/mukimo.png" },
//   { title: "Rice Meals", slug: "rice-meals", image: "/uploads/rice-meals.png" },
//   { title: "Street Foods", slug: "street-foods", image: "/uploads/street-foods.png" },
//   { title: "All", slug: "all", image: "/uploads/all.png" },
// ];

// /* ----------------------------------------
//    SEED FUNCTION
// ----------------------------------------- */
// async function seed() {
//   await connectDB();

//   console.log("🧹 Clearing old menu...");
//   await Category.deleteMany({});
//   await MenuItem.deleteMany({});

//   console.log("📌 Inserting categories...");
//   const insertedCategories = await Category.insertMany(categories);

//   console.log("🍽 Inserting menu items...");
//   const itemsToInsert = [];

//   for (const cat of insertedCategories) {
//     const dishes = foodsPerCategory[cat.slug] || [];

//     dishes.forEach((dish) => {
//       itemsToInsert.push({
//         title: dish.title,
//         price: dish.price,
//         description: dish.title,
//         category: cat._id,

//         // IMPORTANT FIX:
//         image_url: dish.img, // backend will serve this
//       });
//     });
//   }

//   await MenuItem.insertMany(itemsToInsert);

//   console.log("🎉 SEED COMPLETE — Images will now show!");
//   process.exit();
// }

// seed();





// backend/seedMenu.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import MenuItem from "./models/MenuItem.js";
import foodsPerCategory from "./data/foodsPerCategory.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  if (!MONGO_URI) {
    console.error("❌ MONGO_URI missing in .env");
    process.exit(1);
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

const categoriesToInsert = [
  { title: "Main Dishes", slug: "main-dishes", image: "/uploads/main-dishes.png" },
  { title: "Pizza", slug: "pizza", image: "/uploads/pizza.png" },
  { title: "Snacks", slug: "snacks", image: "/uploads/snacks.png" },
  { title: "Breakfast", slug: "breakfast", image: "/uploads/breakfast.png" },
  { title: "Healthy Choices", slug: "healthy-choices", image: "/uploads/healthy-choices.png" },
  { title: "Desserts", slug: "desserts", image: "/uploads/desserts.png" },
  { title: "Drinks", slug: "drinks", image: "/uploads/drinks.png" },
  { title: "Full Menu", slug: "full-menu", image: "/uploads/all.png" },
];

async function seed() {
  await connectDB();

  console.log("🧹 Clearing categories & menu items...");
  await Category.deleteMany({});
  await MenuItem.deleteMany({});

  console.log("📌 Inserting categories...");
  const insertedCategories = await Category.insertMany(categoriesToInsert);

  console.log("🍽 Preparing menu items...");
  const menuDocs = [];

  for (const cat of insertedCategories) {
    // skip full-menu here — full-menu will return all items in controller
    if (cat.slug === "full-menu") continue;

    const foods = foodsPerCategory[cat.slug] || [];

    // if foodsPerCategory doesn't have items, create 12 fallback items
    const finalFoods = foods.length ? foods : Array.from({ length: 12 }).map((_, i) => ({
      title: `${cat.title} Item ${i + 1}`,
      price: 200 + i * 20,
      img: `/uploads/${cat.slug}_${i + 1}.png`,
    }));

    finalFoods.forEach((f) => {
      menuDocs.push({
        title: f.title,
        description: f.title,
        price: f.price,
        image_url: f.img,
        category: cat._id,
      });
    });
  }

  if (menuDocs.length > 0) {
    console.log(`📥 Inserting ${menuDocs.length} menu items...`);
    await MenuItem.insertMany(menuDocs);
  } else {
    console.log("⚠️ No menu items to insert.");
  }

  console.log("🎉 Seed finished.");
  process.exit(0);
}

seed();
