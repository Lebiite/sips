
//backend/models/socialLink.js
// import mongoose from "mongoose";

// const SocialLinkSchema = new mongoose.Schema({
//   platform: { type: String, required: true },
//   url: { type: String, required: true }
// }, { timestamps: true });

// export default mongoose.model("SocialLink", SocialLinkSchema);







import mongoose from "mongoose";

const SocialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      default: "", // ✅ allows empty but saves when provided
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SocialLink", SocialLinkSchema);
