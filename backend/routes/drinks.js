// import express from "express";
// import { getDrinksByCategory } from "../controllers/drinkController.js";

// const router = express.Router();

// router.get("/:category", getDrinksByCategory);

// export default router;



// import express from "express";
// import { getDrinksByCategory, getAllDrinks, addDrink } from "../controllers/drinkController.js";

// const router = express.Router();

// router.get("/", getAllDrinks);
// router.get("/:category", getDrinksByCategory);
// router.post("/", addDrink);

// export default router;



// import express from "express";
// import { 
//   getDrinksByCategory, 
//   getAllDrinks, 
//   addDrink 
// } from "../controllers/drinksController.js";

// const router = express.Router();

// router.get("/", getAllDrinks);
// router.get("/:category", getDrinksByCategory);
// router.post("/", addDrink);

// export default router;



// backend/routes/drinks.js
import express from "express";
import { getDrinksByCategory, getAllDrinks, addDrink } from "../controllers/drinksController.js";

const router = express.Router();

router.get("/", getAllDrinks);
router.get("/:category", getDrinksByCategory);
router.post("/", addDrink);

export default router;
