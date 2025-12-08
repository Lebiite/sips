// import mongoose from "mongoose";

// const WaterAerobicsSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     instructor: String,
//     max_participants: Number,
//     date: String,
//     time: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("WaterAerobics", WaterAerobicsSchema);



// import mongoose from "mongoose";

// const WaterAerobicsSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     schedule: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     instructor: {
//       type: String,
//       default: "",
//       trim: true,
//     },
//     max_participants: {
//       type: Number,
//       default: null,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("WaterAerobics", WaterAerobicsSchema);





// backend/models/WaterAerobics.js
import mongoose from "mongoose";

const WaterAerobicsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    schedule: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      default: "",
    },

    max_participants: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("WaterAerobics", WaterAerobicsSchema);
