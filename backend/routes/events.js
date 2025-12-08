// routes/events.js
import express from "express";
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/eventsController.js";

const router = express.Router();

// GET all events
router.get("/", getAllEvents);

// CREATE new event
router.post("/", createEvent);

// UPDATE event
router.put("/:id", updateEvent);

// DELETE event
router.delete("/:id", deleteEvent);

export default router; // IMPORTANT!
