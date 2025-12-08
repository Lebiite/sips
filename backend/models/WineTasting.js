// import mongoose from "mongoose";

// const WineTastingSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String },
//     event_date: { type: Date, required: true },
//     max_participants: { type: Number },
//     price: { type: Number },
//     wines_featured: [{ type: String }],
//   },
//   { timestamps: true }
// );

// export default mongoose.model("WineTasting", WineTastingSchema);



// import mongoose from "mongoose";

// const WineTastingSchema = new mongoose.Schema(
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

//     event_date: {
//       type: Date,
//       required: [true, "Event date is required"],
//     },

//     max_participants: {
//       type: Number,
//       default: null,
//       min: [1, "Max participants must be at least 1"],
//     },

//     price: {
//       type: Number,
//       default: null,
//       min: [0, "Price cannot be negative"],
//     },

//     wines_featured: {
//       type: [String],
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("WineTasting", WineTastingSchema);



import mongoose from "mongoose";

const WineTastingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    event_date: {
      type: Date,
      required: [true, "Event date is required"],
    },

    max_participants: {
      type: Number,
      default: null,
      min: [1, "Max participants must be at least 1"],
    },

    price: {
      type: Number,
      default: null,
      min: [0, "Price cannot be negative"],
    },

    wines_featured: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("WineTasting", WineTastingSchema);
