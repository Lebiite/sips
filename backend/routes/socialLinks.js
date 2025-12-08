// import express from "express";
// import {
//   getSocialLinks,
//   createSocialLink,
//   updateSocialLink,
//   deleteSocialLink,
// } from "../controllers/socialLinksController.js";

// const router = express.Router();

// router.get("/", getSocialLinks);
// router.post("/", createSocialLink);
// router.put("/:id", updateSocialLink);
// router.delete("/:id", deleteSocialLink);

// export default router;



// import express from "express";
// import mongoose from "mongoose";

// const router = express.Router();

// // ==== MONGODB MODEL ====
// const SocialLinkSchema = new mongoose.Schema(
//   {
//     platform: { type: String, required: true },
//     url: { type: String, required: true },
//     icon: { type: String },
//   },
//   { timestamps: true }
// );

// const SocialLink = mongoose.model("SocialLink", SocialLinkSchema);

// // ==== GET ALL ====
// router.get("/", async (req, res) => {
//   try {
//     const links = await SocialLink.find().sort({ createdAt: -1 });
//     res.json(links);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to load social links" });
//   }
// });

// // ==== CREATE ====
// router.post("/", async (req, res) => {
//   try {
//     const newLink = await SocialLink.create(req.body);
//     res.json(newLink);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create social link" });
//   }
// });

// // ==== UPDATE ====
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await SocialLink.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update social link" });
//   }
// });

// // ==== DELETE ====
// router.delete("/:id", async (req, res) => {
//   try {
//     await SocialLink.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete social link" });
//   }
// });

// export default router;




// import express from "express";
// const router = express.Router();

// const socialLinks = []; // temporary in-memory storage

// router.get("/", (req, res) => {
//   res.json(socialLinks);
// });

// router.post("/", (req, res) => {
//   const newLink = { _id: Date.now().toString(), ...req.body };
//   socialLinks.push(newLink);
//   res.json(newLink);
// });

// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const index = socialLinks.findIndex((l) => l._id === id);

//   if (index === -1) return res.status(404).json({ message: "Not found" });

//   socialLinks[index] = { ...socialLinks[index], ...req.body };
//   res.json(socialLinks[index]);
// });

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const index = socialLinks.findIndex((l) => l._id === id);

//   if (index === -1) return res.status(404).json({ message: "Not found" });

//   const deleted = socialLinks.splice(index, 1);
//   res.json(deleted[0]);
// });

// export default router;




// backend/routes/socialLinks.js
import express from "express";
import {
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink,
} from "../controllers/socialLinksController.js";

const router = express.Router();

/**
 * Use the controller functions (which use your Mongoose model).
 * This ensures GET /api/social-links returns an array (even empty).
 */

router.get("/", getSocialLinks);
router.post("/", createSocialLink);
router.put("/:id", updateSocialLink);
router.delete("/:id", deleteSocialLink);

export default router;
