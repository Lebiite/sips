// // controllers/wineTastingController.js
// import { getDB, ObjectId } from "../models/db.js";

// // GET all events
// export const getWineTastings = async (req, res) => {
//   try {
//     const db = getDB();
//     const events = await db
//       .collection("wine_tasting_events")
//       .find()
//       .sort({ event_date: 1 })
//       .toArray();

//     res.json(events);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch events" });
//   }
// };

// // CREATE event
// export const createWineTasting = async (req, res) => {
//   try {
//     const db = getDB();
//     const payload = {
//       ...req.body,
//       max_participants: req.body.max_participants
//         ? Number(req.body.max_participants)
//         : null,
//       price: req.body.price ? parseFloat(req.body.price) : null,
//       wines_featured: req.body.wines_featured
//         ? req.body.wines_featured.split(",").map((w) => w.trim())
//         : null,
//       created_at: new Date(),
//     };

//     const result = await db.collection("wine_tasting_events").insertOne(payload);
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create event" });
//   }
// };

// // UPDATE event
// export const updateWineTasting = async (req, res) => {
//   try {
//     const db = getDB();
//     const { id } = req.params;

//     const payload = {
//       ...req.body,
//       max_participants: req.body.max_participants
//         ? Number(req.body.max_participants)
//         : null,
//       price: req.body.price ? parseFloat(req.body.price) : null,
//       wines_featured: req.body.wines_featured
//         ? req.body.wines_featured.split(",").map((w) => w.trim())
//         : null,
//     };

//     const result = await db.collection("wine_tasting_events").updateOne(
//       { _id: new ObjectId(id) },
//       { $set: payload }
//     );

//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update event" });
//   }
// };

// // DELETE event
// export const deleteWineTasting = async (req, res) => {
//   try {
//     const db = getDB();
//     const { id } = req.params;

//     const result = await db.collection("wine_tasting_events").deleteOne({
//       _id: new ObjectId(id),
//     });

//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to delete event" });
//   }
// };


// import WineTasting from "../models/WineTasting.js";

// // ✅ GET ALL
// export const getWineTastings = async (req, res) => {
//   try {
//     const events = await WineTasting.find().sort({ createdAt: -1 });
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch wine tastings" });
//   }
// };

// // ✅ CREATE
// export const createWineTasting = async (req, res) => {
//   try {
//     const event = new WineTasting(req.body);
//     await event.save();
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to create wine tasting" });
//   }
// };

// // ✅ UPDATE
// export const updateWineTasting = async (req, res) => {
//   try {
//     const updated = await WineTasting.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updated);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to update wine tasting" });
//   }
// };

// // ✅ DELETE
// export const deleteWineTasting = async (req, res) => {
//   try {
//     await WineTasting.findByIdAndDelete(req.params.id);
//     res.json({ message: "Wine tasting deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: "Failed to delete wine tasting" });
//   }
// };





// import WineTasting from "../models/WineTasting.js";
// import mongoose from "mongoose";

// // ✅ GET ALL
// export const getWineTastings = async (req, res) => {
//   try {
//     const events = await WineTasting.find().sort({ createdAt: -1 });

//     // ✅ Always return array (prevents events.map crash)
//     res.status(200).json(events || []);
//   } catch (error) {
//     console.error("GET Wine Tastings Error:", error);
//     res.status(500).json({
//       message: "Failed to fetch wine tastings",
//       error: error.message,
//     });
//   }
// };

// // ✅ CREATE
// export const createWineTasting = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       event_date,
//       max_participants,
//       price,
//       wines_featured,
//     } = req.body;

//     // ✅ Required validation
//     if (!title || !event_date) {
//       return res.status(400).json({
//         message: "Title and Event Date are required",
//       });
//     }

//     const event = new WineTasting({
//       title,
//       description,
//       event_date,
//       max_participants,
//       price,
//       wines_featured,
//     });

//     await event.save();

//     res.status(201).json(event);
//   } catch (error) {
//     console.error("CREATE Wine Tasting Error:", error);
//     res.status(400).json({
//       message: "Failed to create wine tasting",
//       error: error.message,
//     });
//   }
// };

// // ✅ UPDATE
// export const updateWineTasting = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // ✅ Prevent Mongo crash on invalid IDs
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid wine tasting ID" });
//     }

//     const updated = await WineTasting.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updated) {
//       return res.status(404).json({ message: "Wine tasting not found" });
//     }

//     res.status(200).json(updated);
//   } catch (error) {
//     console.error("UPDATE Wine Tasting Error:", error);
//     res.status(400).json({
//       message: "Failed to update wine tasting",
//       error: error.message,
//     });
//   }
// };

// // ✅ DELETE
// export const deleteWineTasting = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // ✅ Prevent Mongo crash on invalid IDs
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid wine tasting ID" });
//     }

//     const deleted = await WineTasting.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Wine tasting not found" });
//     }

//     res.status(200).json({
//       message: "Wine tasting deleted successfully",
//     });
//   } catch (error) {
//     console.error("DELETE Wine Tasting Error:", error);
//     res.status(400).json({
//       message: "Failed to delete wine tasting",
//       error: error.message,
//     });
//   }
// };



import WineTasting from "../models/WineTasting.js";
import mongoose from "mongoose";

// ✅ GET ALL
export const getWineTastings = async (req, res) => {
  try {
    const events = await WineTasting.find().sort({ createdAt: -1 });

    // ✅ Always return array (prevents events.map crash)
    res.status(200).json(Array.isArray(events) ? events : []);
  } catch (error) {
    console.error("GET Wine Tastings Error:", error);
    res.status(500).json({
      message: "Failed to fetch wine tastings",
      error: error.message,
    });
  }
};

// ✅ CREATE
export const createWineTasting = async (req, res) => {
  try {
    const {
      title,
      description,
      event_date,
      max_participants,
      price,
      wines_featured,
    } = req.body;

    // ✅ Required validation
    if (!title || !event_date) {
      return res.status(400).json({
        message: "Title and Event Date are required",
      });
    }

    const event = new WineTasting({
      title,
      description,
      event_date,
      max_participants: max_participants
        ? Number(max_participants)
        : undefined,
      price: price ? Number(price) : undefined,

      // ✅ ALWAYS FORCE ARRAY
      wines_featured: Array.isArray(wines_featured)
        ? wines_featured
        : [],
    });

    await event.save();

    res.status(201).json(event);
  } catch (error) {
    console.error("CREATE Wine Tasting Error:", error);
    res.status(400).json({
      message: "Failed to create wine tasting",
      error: error.message,
    });
  }
};

// ✅ UPDATE
export const updateWineTasting = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Prevent Mongo crash on invalid IDs
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid wine tasting ID" });
    }

    const updated = await WineTasting.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Wine tasting not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("UPDATE Wine Tasting Error:", error);
    res.status(400).json({
      message: "Failed to update wine tasting",
      error: error.message,
    });
  }
};

// ✅ DELETE
export const deleteWineTasting = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Prevent Mongo crash on invalid IDs
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid wine tasting ID" });
    }

    const deleted = await WineTasting.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Wine tasting not found" });
    }

    res.status(200).json({
      message: "Wine tasting deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Wine Tasting Error:", error);
    res.status(400).json({
      message: "Failed to delete wine tasting",
      error: error.message,
    });
  }
};
