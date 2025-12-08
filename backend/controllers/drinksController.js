// import Drink from "../models/Drink.js";

// export const getDrinksByCategory = async (req, res) => {
//   try {
//     const category = req.params.category;
//     const drinks = await Drink.find({ category });

//     res.json(drinks);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching drinks", error: err });
//   }
// };



// import Drink from "../models/Drink.js";

// // GET drinks by category
// export const getDrinksByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const drinks = await Drink.find({ category });

//     res.json(drinks);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// // GET all drinks
// export const getAllDrinks = async (req, res) => {
//   try {
//     const drinks = await Drink.find();
//     res.json(drinks);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// // ADD new drink
// export const addDrink = async (req, res) => {
//   try {
//     const drink = new Drink(req.body);
//     const saved = await drink.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ message: "Error adding drink", error: err.message });
//   }
// };



// import Drink from "../models/Drink.js";

// export const getDrinksByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;
//     const drinks = await Drink.find({ category });
//     res.json(drinks);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// export const getAllDrinks = async (req, res) => {
//   try {
//     const drinks = await Drink.find();
//     res.json(drinks);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// export const addDrink = async (req, res) => {
//   try {
//     const drink = new Drink(req.body);
//     const saved = await drink.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ message: "Error adding drink", error: err.message });
//   }
// };



// backend/controllers/drinksController.js
import Drink from "../models/Drink.js";

// GET all drinks
export const getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find().sort({ createdAt: -1 });
    res.json(drinks);
  } catch (err) {
    console.error("getAllDrinks error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// GET drinks by category (e.g. /api/drinks/mocktails)
export const getDrinksByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (!category) return res.status(400).json({ message: "Category required" });

    // Case-insensitive match
    const drinks = await Drink.find({ category: { $regex: `^${category}$`, $options: "i" } }).sort({ createdAt: -1 });

    res.json(drinks);
  } catch (err) {
    console.error("getDrinksByCategory error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// POST add new drink
export const addDrink = async (req, res) => {
  try {
    const { name, category, price, image, description } = req.body;
    if (!name || !category || typeof price === "undefined") {
      return res.status(400).json({ message: "Missing required fields: name, category, price" });
    }

    const d = new Drink({ name, category, price, image, description });
    const saved = await d.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("addDrink error:", err);
    res.status(500).json({ message: "Error adding drink", error: err.message });
  }
};
