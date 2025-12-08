import mongoose from "mongoose";

const SwimmingLessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    schedule: {
      type: String,
      required: true,
      trim: true,
    },
    instructor: {
      type: String,
      default: "",
      trim: true,
    },
    max_participants: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SwimmingLesson", SwimmingLessonSchema);
