// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Drink from "./models/Drink.js";

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
//     if (!process.env.MONGO_URI) {
//       console.error("❌ MONGO_URI is missing in .env");
//       process.exit(1);
//     }

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     await Drink.deleteMany();
//     await Drink.insertMany(mocktails);

//     console.log("🎉 Mocktails inserted successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Seed error:", error);
//     process.exit(1);
//   }
// })();




// first to work for drinks
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Drink from "./models/Drink.js";

// dotenv.config();

// // =========================
// // REAL BAR MENU DATA (WITH pilau.png IMAGE)
// // =========================

// // 🥂 Cocktails
// const cocktails = [
//   { name: "Mojito", category: "cocktails", price: 850, image: "/uploads/pilau.png", description: "White rum, lime, mint, sugar & soda." },
//   { name: "Long Island Iced Tea", category: "cocktails", price: 1100, image: "/uploads/pilau.png", description: "Vodka, gin, rum, tequila & coke." },
//   { name: "Whisky Sour", category: "cocktails", price: 950, image: "/uploads/pilau.png", description: "Whisky, lemon juice & sugar." },
//   { name: "Pina Colada", category: "cocktails", price: 900, image: "/uploads/pilau.png", description: "Rum, coconut cream & pineapple." },
//   { name: "Dawa", category: "cocktails", price: 750, image: "/uploads/pilau.png", description: "Kenyan favorite—vodka, lime & honey." },
//   { name: "Margarita", category: "cocktails", price: 1000, image: "/uploads/pilau.png", description: "Tequila, lime & triple sec." },
//   { name: "Sex on the Beach", category: "cocktails", price: 950, image: "/uploads/pilau.png", description: "Vodka, orange juice & cranberry." },
//   { name: "Blue Lagoon", category: "cocktails", price: 980, image: "/uploads/pilau.png", description: "Vodka, blue curaçao & lemonade." }
// ];

// // 🍹 Mocktails
// const mocktails = [
//   { name: "Virgin Mojito", category: "mocktails", price: 550, image: "/uploads/pilau.png", description: "Mint, lime & soda." },
//   { name: "Passion Delight", category: "mocktails", price: 500, image: "/uploads/pilau.png", description: "Passion juice & mint." },
//   { name: "Strawberry Fizz", category: "mocktails", price: 600, image: "/uploads/pilau.png", description: "Fresh strawberry & lemonade." },
//   { name: "Tropical Cooler", category: "mocktails", price: 650, image: "/uploads/pilau.png", description: "Mango, pineapple & lime." },
//   { name: "Mint Lemonade", category: "mocktails", price: 450, image: "/uploads/pilau.png", description: "Mint blended with lemon." }
// ];

// // 🍺 Beers
// const beers = [
//   { name: "Tusker Lager", category: "beers", price: 300, image: "/uploads/pilau.png", description: "500ml — Classic Kenyan lager." },
//   { name: "Tusker Malt", category: "beers", price: 330, image: "/uploads/pilau.png", description: "Premium rich malt beer." },
//   { name: "Whitecap", category: "beers", price: 320, image: "/uploads/pilau.png", description: "Smooth European-style lager." },
//   { name: "Guinness", category: "beers", price: 350, image: "/uploads/pilau.png", description: "Premium stout." },
//   { name: "Heineken", category: "beers", price: 400, image: "/uploads/pilau.png", description: "Imported premium lager." },
//   { name: "Corona", category: "beers", price: 450, image: "/uploads/pilau.png", description: "Mexican beer served with lime." }
// ];

// // 🥃 Spirits (Shots)
// const spiritsShots = [
//   { name: "Jameson (Shot)", category: "spirits", price: 350, image: "/uploads/pilau.png", description: "Irish whiskey." },
//   { name: "Captain Morgan (Shot)", category: "spirits", price: 300, image: "/uploads/pilau.png", description: "Spiced rum." },
//   { name: "Gordons (Shot)", category: "spirits", price: 250, image: "/uploads/pilau.png", description: "London dry gin." },
//   { name: "Tequila Gold (Shot)", category: "spirits", price: 400, image: "/uploads/pilau.png", description: "Premium golden tequila." }
// ];

// // 🥃 Spirits (Bottles)
// const spiritsBottles = [
//   { name: "Jameson 750ml", category: "bottles", price: 3500, image: "/uploads/pilau.png", description: "Irish whiskey bottle." },
//   { name: "Johnnie Walker Black 1L", category: "bottles", price: 6500, image: "/uploads/pilau.png", description: "Premium Scotch whisky." },
//   { name: "Captain Morgan 750ml", category: "bottles", price: 2300, image: "/uploads/pilau.png", description: "Caribbean spiced rum." },
//   { name: "Smirnoff Vodka 750ml", category: "bottles", price: 1800, image: "/uploads/pilau.png", description: "Triple distilled vodka." }
// ];

// // 🍷 Wines
// const wines = [
//   { name: "Four Cousins Sweet Red", category: "wines", price: 1600, image: "/uploads/pilau.png", description: "South African sweet red wine." },
//   { name: "Robertson Chardonnay", category: "wines", price: 2000, image: "/uploads/pilau.png", description: "Crisp & fruity white wine." },
//   { name: "Frontera Cabernet Sauvignon", category: "wines", price: 1900, image: "/uploads/pilau.png", description: "Full-bodied Chilean red wine." }
// ];

// // 🥤 Soft Drinks
// const softdrinks = [
//   { name: "Coca-Cola", category: "soft_drinks", price: 120, image: "/uploads/pilau.png", description: "350ml soda." },
//   { name: "Sprite", category: "soft_drinks", price: 120, image: "/uploads/pilau.png", description: "Refreshing lemon-lime." },
//   { name: "Fanta Orange", category: "soft_drinks", price: 120, image: "/uploads/pilau.png", description: "Orange soda." },
//   { name: "Mineral Water", category: "soft_drinks", price: 100, image: "/uploads/pilau.png", description: "500ml bottled water." }
// ];

// // ☕ Coffee & Tea
// const hotDrinks = [
//   { name: "Latte", category: "coffee", price: 300, image: "/uploads/pilau.png", description: "Milk coffee." },
//   { name: "Cappuccino", category: "coffee", price: 320, image: "/uploads/pilau.png", description: "Foamy Italian coffee." },
//   { name: "Black Tea", category: "tea", price: 150, image: "/uploads/pilau.png", description: "Traditional Kenyan tea." },
//   { name: "Lemon Ginger Tea", category: "tea", price: 180, image: "/uploads/pilau.png", description: "Freshly brewed lemon ginger." }
// ];

// // MERGE ALL
// const barMenu = [
//   ...cocktails,
//   ...mocktails,
//   ...beers,
//   ...spiritsShots,
//   ...spiritsBottles,
//   ...wines,
//   ...softdrinks,
//   ...hotDrinks
// ];

// // =========================
// // SEED SCRIPT
// // =========================

// (async () => {
//   try {
//     if (!process.env.MONGO_URI) {
//       console.error("❌ MONGO_URI missing in .env");
//       process.exit(1);
//     }

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     console.log("🔥 Deleting old drink data...");
//     await Drink.deleteMany({});

//     console.log("📥 Inserting fresh real bar menu...");
//     await Drink.insertMany(barMenu);

//     console.log("🎉 Real bar menu inserted successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Seed error:", error);
//     process.exit(1);
//   }
// })();



// drinksSeed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Drink from "./models/Drink.js";

dotenv.config();

const img = "/uploads/pilau.png";

// =====================================
// 10 CATEGORIES × 12 REAL DRINKS EACH
// =====================================

// 🥃 WHISKEY (12)
const whiskey = [
  { name: "Jameson", category: "whiskey", price: 350, image: img },
  { name: "Jameson Black Barrel", category: "whiskey", price: 450, image: img },
  { name: "Johnnie Walker Red", category: "whiskey", price: 300, image: img },
  { name: "Johnnie Walker Black", category: "whiskey", price: 450, image: img },
  { name: "Johnnie Walker Gold", category: "whiskey", price: 600, image: img },
  { name: "Jack Daniel's", category: "whiskey", price: 400, image: img },
  { name: "Chivas Regal 12", category: "whiskey", price: 500, image: img },
  { name: "Glenfiddich 12", category: "whiskey", price: 650, image: img },
  { name: "Glenlivet 12", category: "whiskey", price: 650, image: img },
  { name: "Singleton 12", category: "whiskey", price: 600, image: img },
  { name: "Ballantine's", category: "whiskey", price: 280, image: img },
  { name: "Vat 69", category: "whiskey", price: 250, image: img }
];

// 🍸 RUM & VODKA (12)
const rumVodka = [
  { name: "Captain Morgan Spiced", category: "rum_vodka", price: 300, image: img },
  { name: "Captain Morgan Dark", category: "rum_vodka", price: 320, image: img },
  { name: "Bacardi Rum", category: "rum_vodka", price: 350, image: img },
  { name: "Smirnoff Vodka Red", category: "rum_vodka", price: 250, image: img },
  { name: "Smirnoff Vodka Black", category: "rum_vodka", price: 350, image: img },
  { name: "Absolut Vodka", category: "rum_vodka", price: 350, image: img },
  { name: "Ciroc Vodka", category: "rum_vodka", price: 600, image: img },
  { name: "Konyagi", category: "rum_vodka", price: 150, image: img },
  { name: "Gilbey's Vodka", category: "rum_vodka", price: 200, image: img },
  { name: "Malibu Rum", category: "rum_vodka", price: 400, image: img },
  { name: "Myers Rum", category: "rum_vodka", price: 380, image: img },
  { name: "Havana Club Rum 5yr", category: "rum_vodka", price: 550, image: img }
];

// 🔥 SPECIALTY SHOTS (12)
const specialtyShots = [
  { name: "Tequila Silver Shot", category: "specialty_shots", price: 350, image: img },
  { name: "Tequila Gold Shot", category: "specialty_shots", price: 400, image: img },
  { name: "Jägermeister Shot", category: "specialty_shots", price: 450, image: img },
  { name: "Fireball Shot", category: "specialty_shots", price: 450, image: img },
  { name: "Jameson Shot", category: "specialty_shots", price: 300, image: img },
  { name: "Captain Morgan Shot", category: "specialty_shots", price: 250, image: img },
  { name: "Absolut Vodka Shot", category: "specialty_shots", price: 250, image: img },
  { name: "Ciroc Shot", category: "specialty_shots", price: 450, image: img },
  { name: "Bacardi Shot", category: "specialty_shots", price: 300, image: img },
  { name: "Kahlua Shot", category: "specialty_shots", price: 350, image: img },
  { name: "Sambuca Shot", category: "specialty_shots", price: 400, image: img },
  { name: "Irish Cream Shot", category: "specialty_shots", price: 300, image: img }
];

// 🥤 FRESH JUICES (12)
const freshJuices = [
  { name: "Fresh Orange Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Fresh Mango Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Fresh Pineapple Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Fresh Passion Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Watermelon Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Lemon Mint Juice", category: "fresh_juices", price: 300, image: img },
  { name: "Avocado Juice", category: "fresh_juices", price: 350, image: img },
  { name: "Apple Juice Fresh", category: "fresh_juices", price: 300, image: img },
  { name: "Carrot Juice", category: "fresh_juices", price: 250, image: img },
  { name: "Beetroot Juice", category: "fresh_juices", price: 280, image: img },
  { name: "Tropical Mix", category: "fresh_juices", price: 350, image: img },
  { name: "Ginger Lemon Juice", category: "fresh_juices", price: 300, image: img }
];

// 🍹 COCKTAILS (12)
const cocktails = [
  { name: "Mojito", category: "cocktails", price: 850, image: img },
  { name: "Long Island Iced Tea", category: "cocktails", price: 1100, image: img },
  { name: "Pina Colada", category: "cocktails", price: 900, image: img },
  { name: "Whisky Sour", category: "cocktails", price: 950, image: img },
  { name: "Dawa", category: "cocktails", price: 750, image: img },
  { name: "Margarita", category: "cocktails", price: 1000, image: img },
  { name: "Sex on the Beach", category: "cocktails", price: 950, image: img },
  { name: "Blue Lagoon", category: "cocktails", price: 980, image: img },
  { name: "Cosmopolitan", category: "cocktails", price: 1000, image: img },
  { name: "Tequila Sunrise", category: "cocktails", price: 950, image: img },
  { name: "Mai Tai", category: "cocktails", price: 1200, image: img },
  { name: "Negroni", category: "cocktails", price: 1100, image: img }
];

// 🍺 BEERS (12)
const beers = [
  { name: "Tusker Lager", category: "beers", price: 300, image: img },
  { name: "Tusker Malt", category: "beers", price: 330, image: img },
  { name: "Whitecap", category: "beers", price: 320, image: img },
  { name: "Guinness", category: "beers", price: 350, image: img },
  { name: "Heineken", category: "beers", price: 400, image: img },
  { name: "Corona", category: "beers", price: 450, image: img },
  { name: "Smirnoff Ice", category: "beers", price: 300, image: img },
  { name: "Bavaria", category: "beers", price: 250, image: img },
  { name: "Kronenbourg 1664", category: "beers", price: 500, image: img },
  { name: "Desperados", category: "beers", price: 450, image: img },
  { name: "Savanna Dry", category: "beers", price: 350, image: img },
  { name: "Windhoek", category: "beers", price: 350, image: img }
];

// 🍷 WINES (12)
const wines = [
  { name: "Four Cousins Sweet Red", category: "wines", price: 1600, image: img },
  { name: "Four Cousins Sweet White", category: "wines", price: 1600, image: img },
  { name: "Robertson Chardonnay", category: "wines", price: 2000, image: img },
  { name: "Frontera Cabernet Sauvignon", category: "wines", price: 1900, image: img },
  { name: "Frontera Chardonnay", category: "wines", price: 1900, image: img },
  { name: "Nederburg Cabernet", category: "wines", price: 2500, image: img },
  { name: "Nederburg Rosé", category: "wines", price: 2500, image: img },
  { name: "Drostdy-Hof Red", category: "wines", price: 1800, image: img },
  { name: "Asconi Moscato", category: "wines", price: 2300, image: img },
  { name: "Santa Carolina Sauvignon Blanc", category: "wines", price: 2100, image: img },
  { name: "Robertson Sweet Red", category: "wines", price: 1900, image: img },
  { name: "Robertson Sweet White", category: "wines", price: 1900, image: img }
];

// 🍸 GIN (12)
const gin = [
  { name: "Gordons Dry Gin", category: "gin", price: 250, image: img },
  { name: "Gordons Pink Gin", category: "gin", price: 300, image: img },
  { name: "Beefeater Gin", category: "gin", price: 350, image: img },
  { name: "Tanqueray Gin", category: "gin", price: 400, image: img },
  { name: "Bombay Sapphire", category: "gin", price: 450, image: img },
  { name: "Hendrick's Gin", category: "gin", price: 650, image: img },
  { name: "Walker’s Gin", category: "gin", price: 150, image: img },
  { name: "Chrome Gin", category: "gin", price: 200, image: img },
  { name: "Brokers Gin", category: "gin", price: 450, image: img },
  { name: "Gilbey’s Gin", category: "gin", price: 200, image: img },
  { name: "Tanqueray No. Ten", category: "gin", price: 700, image: img },
  { name: "Strathmore Gin", category: "gin", price: 180, image: img }
];

// 🔥 TEQUILA (12)
const tequila = [
  { name: "Tequila Silver", category: "tequila", price: 350, image: img },
  { name: "Tequila Gold", category: "tequila", price: 400, image: img },
  { name: "Olmeca Silver", category: "tequila", price: 450, image: img },
  { name: "Olmeca Gold", category: "tequila", price: 500, image: img },
  { name: "Jose Cuervo Silver", category: "tequila", price: 450, image: img },
  { name: "Jose Cuervo Gold", category: "tequila", price: 500, image: img },
  { name: "Don Julio Silver", category: "tequila", price: 900, image: img },
  { name: "Don Julio Reposado", category: "tequila", price: 1200, image: img },
  { name: "Patron Silver", category: "tequila", price: 1100, image: img },
  { name: "Patron Reposado", category: "tequila", price: 1300, image: img },
  { name: "El Jimador Silver", category: "tequila", price: 600, image: img },
  { name: "El Jimador Reposado", category: "tequila", price: 700, image: img }
];

// 🥃 BRANDY (12)
const brandy = [
  { name: "Viceroy Brandy", category: "brandy", price: 250, image: img },
  { name: "Richot Brandy", category: "brandy", price: 230, image: img },
  { name: "KWV 3 Years", category: "brandy", price: 300, image: img },
  { name: "KWV 5 Years", category: "brandy", price: 400, image: img },
  { name: "Hennessy VS", category: "brandy", price: 800, image: img },
  { name: "Hennessy VSOP", category: "brandy", price: 1500, image: img },
  { name: "Courvoisier VS", category: "brandy", price: 900, image: img },
  { name: "Courvoisier VSOP", category: "brandy", price: 1600, image: img },
  { name: "Remy Martin VS", category: "brandy", price: 850, image: img },
  { name: "Remy Martin VSOP", category: "brandy", price: 1700, image: img },
  { name: "Three Barrels Brandy", category: "brandy", price: 300, image: img },
  { name: "Brandy Napoleon", category: "brandy", price: 280, image: img }
];

// =========================
// MERGE ALL
// =========================

const barMenu = [
  ...whiskey,
  ...rumVodka,
  ...specialtyShots,
  ...freshJuices,
  ...cocktails,
  ...beers,
  ...wines,
  ...gin,
  ...tequila,
  ...brandy
];

// =========================
// SEED SCRIPT
// =========================

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Drink.deleteMany({});
    console.log("🔥 Deleted old data");

    await Drink.insertMany(barMenu);
    console.log("🎉 Inserted fresh real 120 drinks!");

    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
})();
