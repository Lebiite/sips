// import { db, ObjectId } from "../server.js";

// // GET all links
// export const getSocialLinks = async (req, res) => {
//   try {
//     const links = await db.collection("social_links")
//       .find()
//       .sort({ created_at: -1 })
//       .toArray();

//     res.json(links);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch social links" });
//   }
// };

// // CREATE
// export const createSocialLink = async (req, res) => {
//   try {
//     const payload = {
//       ...req.body,
//       created_at: new Date(),
//     };

//     const result = await db.collection("social_links").insertOne(payload);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create social link" });
//   }
// };

// // UPDATE
// export const updateSocialLink = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await db.collection("social_links").updateOne(
//       { _id: new ObjectId(id) },
//       { $set: req.body }
//     );

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update social link" });
//   }
// };

// // DELETE
// export const deleteSocialLink = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await db.collection("social_links").deleteOne({
//       _id: new ObjectId(id),
//     });

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete social link" });
//   }
// };



// backend/controllers/socialLinksController.js
import SocialLink from "../models/SocialLink.js";

export const getSocialLinks = async (req, res) => {
  try {
    const links = await SocialLink.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createSocialLink = async (req, res) => {
  try {
    const link = await SocialLink.create(req.body);
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateSocialLink = async (req, res) => {
  try {
    const link = await SocialLink.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteSocialLink = async (req, res) => {
  try {
    await SocialLink.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
