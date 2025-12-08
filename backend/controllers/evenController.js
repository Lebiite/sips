// import Even from "../models/Even.js";

// // GET all evens
// export const getAllEvens = async (req, res) => {
//   try {
//     const evens = await Even.find().sort({ createdAt: -1 });
//     res.json(evens);
//   } catch (err) {
//     console.error("Error fetching evens:", err.message);
//     res.status(500).json({ error: "Failed to fetch evens" });
//   }
// };

// // CREATE new even
// export const createEven = async (req, res) => {
//   try {
//     const { name, email, phone, eventType, date, guests, message } = req.body;

//     if (!name || !email || !eventType || !date) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const saved = await Even.create({
//       name,
//       email,
//       phone,
//       eventType,
//       date,
//       guests,
//       message,
//     });

//     console.log("✨ New 'event' saved.");

//     res.json({
//       success: true,
//       data: saved,
//     });
//   } catch (err) {
//     console.error("Even create error:", err.message);
//     res.status(500).json({ error: "Failed to save even" });
//   }
// };


// // nice working only dlete 
// import Even from "../models/Even.js";

// // GET all evens
// export const getAllEvens = async (req, res) => {
//   try {
//     const evens = await Even.find().sort({ createdAt: -1 });
//     res.json(evens);
//   } catch (err) {
//     console.error("Error fetching evens:", err.message);
//     res.status(500).json({ error: "Failed to fetch evens" });
//   }
// };

// // CREATE new even
// export const createEven = async (req, res) => {
//   try {
//     const { name, email, phone, eventType, date, guests, message } = req.body;

//     if (!name || !email || !eventType || !date) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const saved = await Even.create({
//       name,
//       email,
//       phone,
//       eventType,
//       date,
//       guests,
//       message,
//     });

//     console.log("✨ New 'event' saved.");

//     res.json({
//       success: true,
//       data: saved,
//     });
//   } catch (err) {
//     console.error("Even create error:", err.message);
//     res.status(500).json({ error: "Failed to save even" });
//   }
// };

// // UPDATE even
// export const updateEven = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updated = await Even.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updated) {
//       return res.status(404).json({ error: "Even not found" });
//     }

//     res.json({
//       success: true,
//       data: updated,
//     });
//   } catch (err) {
//     console.error("Even update error:", err.message);
//     res.status(500).json({ error: "Failed to update even" });
//   }
// };



// controllers/evenController.js
import Even from "../models/Even.js";

// GET all evens
export const getAllEvens = async (req, res) => {
  try {
    const evens = await Even.find().sort({ createdAt: -1 });
    res.json(evens);
  } catch (err) {
    console.error("Error fetching evens:", err.message);
    res.status(500).json({ error: "Failed to fetch evens" });
  }
};

// CREATE new even
export const createEven = async (req, res) => {
  try {
    const { name, email, phone, eventType, date, guests, message } = req.body;

    if (!name || !email || !eventType || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const saved = await Even.create({
      name,
      email,
      phone,
      eventType,
      date,
      guests,
      message,
    });

    res.json({
      success: true,
      data: saved,
    });
  } catch (err) {
    console.error("Even create error:", err.message);
    res.status(500).json({ error: "Failed to save even" });
  }
};

// UPDATE even
export const updateEven = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Even.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ error: "Even not found" });
    }

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    console.error("Even update error:", err.message);
    res.status(500).json({ error: "Failed to update even" });
  }
};

// DELETE even
export const deleteEven = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Even.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Even not found" });
    }

    res.json({
      success: true,
      message: "Even deleted successfully",
      id,
    });
  } catch (err) {
    console.error("Even delete error:", err.message);
    res.status(500).json({ error: "Failed to delete even" });
  }
};
