// import mongoose from "mongoose";

// const OpeningHoursSchema = new mongoose.Schema(
//   {
//     day_of_week: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },

//     open_time: {
//       type: String,
//       default: "",
//     },

//     close_time: {
//       type: String,
//       default: "",
//     },

//     is_closed: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("OpeningHours", OpeningHoursSchema);







import mongoose from "mongoose";

const openingHourSchema = new mongoose.Schema(
  {
    day_of_week: {
      type: String,
      required: true,
      trim: true,
    },
    open_time: {
      type: String,
      default: "",
    },
    close_time: {
      type: String,
      default: "",
    },
    is_closed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("OpeningHour", openingHourSchema);
