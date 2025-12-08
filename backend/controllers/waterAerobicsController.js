// import WaterAerobics from "../models/WaterAerobics.js";

// // GET all schedules
// export const getWaterAerobics = async (req, res) => {
//   try {
//     const schedules = await WaterAerobics.find().sort({ createdAt: -1 });
//     res.json(schedules);
//   } catch (err) {
//     console.error("Water Aerobics fetch error:", err.message);
//     res.status(500).json({ error: "Failed to fetch schedules" });
//   }
// };

// // CREATE schedule
// export const createWaterAerobics = async (req, res) => {
//   try {
//     const payload = {
//       title: req.body.title,
//       instructor: req.body.instructor,
//       date: req.body.date,
//       time: req.body.time,
//       max_participants: req.body.max_participants
//         ? Number(req.body.max_participants)
//         : null,
//     };

//     const created = await WaterAerobics.create(payload);
//     res.json(created);
//   } catch (err) {
//     console.error("Create error:", err.message);
//     res.status(500).json({ error: "Failed to create schedule" });
//   }
// };

// // UPDATE schedule
// export const updateWaterAerobics = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const payload = {
//       title: req.body.title,
//       instructor: req.body.instructor,
//       date: req.body.date,
//       time: req.body.time,
//       max_participants: req.body.max_participants
//         ? Number(req.body.max_participants)
//         : null,
//     };

//     const updated = await WaterAerobics.findByIdAndUpdate(id, payload, {
//       new: true,
//     });

//     res.json(updated);
//   } catch (err) {
//     console.error("Update error:", err.message);
//     res.status(500).json({ error: "Failed to update schedule" });
//   }
// };

// // DELETE schedule
// export const deleteWaterAerobics = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const removed = await WaterAerobics.findByIdAndDelete(id);
//     res.json(removed);
//   } catch (err) {
//     console.error("Delete error:", err.message);
//     res.status(500).json({ error: "Failed to delete schedule" });
//   }
// };




// import WaterAerobics from "../models/WaterAerobics.js";

// // ✅ GET ALL
// export const getWaterAerobics = async (req, res) => {
//   try {
//     const items = await WaterAerobics.find().sort({ createdAt: -1 });
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ CREATE
// export const createWaterAerobics = async (req, res) => {
//   try {
//     const item = await WaterAerobics.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ UPDATE
// export const updateWaterAerobics = async (req, res) => {
//   try {
//     const item = await WaterAerobics.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!item) return res.status(404).json({ message: "Not found" });

//     res.json(item);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ DELETE
// export const deleteWaterAerobics = async (req, res) => {
//   try {
//     const item = await WaterAerobics.findByIdAndDelete(req.params.id);

//     if (!item) return res.status(404).json({ message: "Not found" });

//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };






// backend/controllers/waterAerobicsController.js
import WaterAerobics from "../models/WaterAerobics.js";

// ✅ GET ALL
export const getWaterAerobics = async (req, res) => {
  try {
    const items = await WaterAerobics.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ message: "Failed to fetch water aerobics" });
  }
};

// ✅ CREATE
export const createWaterAerobics = async (req, res) => {
  try {
    const {
      title,
      description,
      schedule,
      instructor,
      max_participants,
    } = req.body;

    if (!title || !schedule) {
      return res.status(400).json({ message: "Title and schedule are required" });
    }

    const newItem = new WaterAerobics({
      title,
      description,
      schedule,
      instructor,
      max_participants,
    });

    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ message: "Failed to create water aerobics" });
  }
};

// ✅ UPDATE
export const updateWaterAerobics = async (req, res) => {
  try {
    const updated = await WaterAerobics.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: "Failed to update water aerobics" });
  }
};

// ✅ DELETE
export const deleteWaterAerobics = async (req, res) => {
  try {
    const deleted = await WaterAerobics.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Failed to delete water aerobics" });
  }
};
