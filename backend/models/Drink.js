// import mongoose from "mongoose";

// const DrinkSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     slug: { type: String, required: true },
//     category: { type: String, required: true }, // mocktails, cocktails, beers...
//     price: { type: Number, required: true },
//     description: { type: String },
//     image: { type: String },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Drink", DrinkSchema);



// import mongoose from "mongoose";

// const drinkSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: { type: String, required: true }, // example: "mocktails"
//     price: { type: Number, required: true },
//     image: { type: String },
//     description: { type: String },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Drink", drinkSchema);



// // backend/models/Drink.js
// import mongoose from "mongoose";

// const drinkSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: { type: String, required: true }, // example: "mocktails"
//     price: { type: Number, required: true },
//     image: { type: String },
//     description: { type: String },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Drink", drinkSchema);




// backend/models/Drink.js
import mongoose from "mongoose";

const drinkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true }, // example: "mocktails"
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Drink", drinkSchema);
