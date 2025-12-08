import { db, ObjectId } from "../server.js";

// GET all hours
export const getAllHours = async (req, res) => {
  try {
    const hours = await db.collection("opening_hours")
      .find()
      .sort({ day_of_week: 1 })
      .toArray();

    res.json(hours);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch opening hours" });
  }
};

// CREATE hours
export const createHours = async (req, res) => {
  try {
    const result = await db.collection("opening_hours").insertOne(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to create opening hours" });
  }
};

// UPDATE hours
export const updateHours = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.collection("opening_hours").updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update opening hours" });
  }
};

// DELETE hours
export const deleteHours = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.collection("opening_hours").deleteOne({
      _id: new ObjectId(id),
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete opening hours" });
  }
};
