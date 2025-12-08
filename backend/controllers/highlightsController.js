// // controllers/highlightsController.js
// import { getDB } from "../models/db.js";
// import { ObjectId } from "mongodb";

// // GET all homepage highlights
// export async function getAllHighlights(req, res) {
//   try {
//     const db = getDB();
//     const highlights = await db.collection("homepage_highlights").find().toArray();
//     res.json(highlights);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch highlights" });
//   }
// }

// // CREATE highlight
// export async function createHighlight(req, res) {
//   try {
//     const db = getDB();
//     const data = req.body;
//     const result = await db.collection("homepage_highlights").insertOne(data);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create highlight" });
//   }
// }

// // UPDATE highlight
// export async function updateHighlight(req, res) {
//   try {
//     const db = getDB();
//     const { id } = req.params;
//     const data = req.body;
//     const result = await db
//       .collection("homepage_highlights")
//       .updateOne({ _id: new ObjectId(id) }, { $set: data });
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update highlight" });
//   }
// }

// // DELETE highlight
// export async function deleteHighlight(req, res) {
//   try {
//     const db = getDB();
//     const { id } = req.params;
//     const result = await db
//       .collection("homepage_highlights")
//       .deleteOne({ _id: new ObjectId(id) });
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete highlight" });
//   }
// }




// import Highlight from "../models/Highlight.js";
// import mongoose from "mongoose";

// // ✅ GET ALL
// export const getHighlights = async (req, res) => {
//   try {
//     const highlights = await Highlight.find().sort({ order_index: 1 });
//     res.status(200).json(highlights || []);
//   } catch (error) {
//     console.error("GET Highlights Error:", error);
//     res.status(500).json({
//       message: "Failed to fetch highlights",
//       error: error.message,
//     });
//   }
// };

// // ✅ CREATE
// export const createHighlight = async (req, res) => {
//   try {
//     const { title, description, icon, order_index } = req.body;

//     if (!title) {
//       return res.status(400).json({ message: "Title is required" });
//     }

//     const highlight = new Highlight({
//       title,
//       description,
//       icon,
//       order_index,
//     });

//     await highlight.save();
//     res.status(201).json(highlight);
//   } catch (error) {
//     console.error("CREATE Highlight Error:", error);
//     res.status(400).json({
//       message: "Failed to create highlight",
//       error: error.message,
//     });
//   }
// };

// // ✅ UPDATE
// export const updateHighlight = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid highlight ID" });
//     }

//     const updated = await Highlight.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updated) {
//       return res.status(404).json({ message: "Highlight not found" });
//     }

//     res.status(200).json(updated);
//   } catch (error) {
//     console.error("UPDATE Highlight Error:", error);
//     res.status(400).json({
//       message: "Failed to update highlight",
//       error: error.message,
//     });
//   }
// };

// // ✅ DELETE
// export const deleteHighlight = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid highlight ID" });
//     }

//     const deleted = await Highlight.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Highlight not found" });
//     }

//     res.status(200).json({ message: "Highlight deleted successfully" });
//   } catch (error) {
//     console.error("DELETE Highlight Error:", error);
//     res.status(400).json({
//       message: "Failed to delete highlight",
//       error: error.message,
//     });
//   }
// };






import Highlight from "../models/Highlight.js";

// ✅ GET ALL
export const getHighlights = async (req, res) => {
  try {
    const highlights = await Highlight.find().sort({ order_index: 1 });
    res.json(highlights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ CREATE
export const createHighlight = async (req, res) => {
  try {
    const highlight = new Highlight(req.body);
    const saved = await highlight.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ UPDATE
export const updateHighlight = async (req, res) => {
  try {
    const updated = await Highlight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ DELETE
export const deleteHighlight = async (req, res) => {
  try {
    await Highlight.findByIdAndDelete(req.params.id);
    res.json({ message: "Highlight deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
