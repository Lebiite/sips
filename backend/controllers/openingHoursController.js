// import OpeningHours from "../models/OpeningHours.js";

// // ✅ GET ALL
// export const getOpeningHours = async (req, res) => {
//   try {
//     const hours = await OpeningHours.find().sort({ createdAt: 1 });
//     res.json(hours);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch opening hours" });
//   }
// };

// // ✅ CREATE
// export const createOpeningHours = async (req, res) => {
//   try {
//     const created = await OpeningHours.create(req.body);
//     res.status(201).json(created);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to create opening hours" });
//   }
// };

// // ✅ UPDATE
// export const updateOpeningHours = async (req, res) => {
//   try {
//     const updated = await OpeningHours.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updated);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to update opening hours" });
//   }
// };

// // ✅ DELETE
// export const deleteOpeningHours = async (req, res) => {
//   try {
//     await OpeningHours.findByIdAndDelete(req.params.id);
//     res.json({ message: "Opening hours deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete opening hours" });
//   }
// };




import OpeningHour from "../models/OpeningHour.js";

// ✅ GET ALL
export const getOpeningHours = async (req, res) => {
  try {
    const hours = await OpeningHour.find().sort({ createdAt: 1 });
    res.json(hours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ CREATE
export const createOpeningHour = async (req, res) => {
  try {
    const hour = new OpeningHour(req.body);
    const saved = await hour.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ UPDATE
export const updateOpeningHour = async (req, res) => {
  try {
    const updated = await OpeningHour.findByIdAndUpdate(
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
export const deleteOpeningHour = async (req, res) => {
  try {
    await OpeningHour.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
