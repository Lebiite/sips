// import mongoose from "mongoose";

// const HighlightSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true,
//     },

//     description: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     icon: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     order_index: {
//       type: Number,
//       default: null,
//       min: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Highlight", HighlightSchema);




import mongoose from "mongoose";

const highlightSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    order_index: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Highlight", highlightSchema);
