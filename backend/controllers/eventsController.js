// controllers/eventsController.js
import { getDB } from "../models/db.js";
import { ObjectId } from "mongodb";

// GET all events
export async function getAllEvents(req, res) {
  try {
    const db = getDB();
    const events = await db.collection("events").find().toArray();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
}

// CREATE event
export async function createEvent(req, res) {
  try {
    const db = getDB();
    const data = req.body;
    const result = await db.collection("events").insertOne(data);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to create event" });
  }
}

// UPDATE event
export async function updateEvent(req, res) {
  try {
    const db = getDB();
    const { id } = req.params;
    const data = req.body;
    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(id) }, { $set: data });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update event" });
  }
}

// DELETE event
export async function deleteEvent(req, res) {
  try {
    const db = getDB();
    const { id } = req.params;
    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete event" });
  }
}
