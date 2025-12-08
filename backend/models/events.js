// models/events.js
// A lightweight model helper for the "events" collection (NOT Mongoose)

import { getDB } from "./db.js";
import { ObjectId } from "mongodb";

// Collection name
const COLLECTION = "events";

// Get collection instance
export function eventsCollection() {
  const db = getDB();
  return db.collection(COLLECTION);
}

// Validation (optional but recommended)
export function buildEvent(data) {
  return {
    name: data.name || "",
    phone: data.phone || "",
    email: data.email || "",
    date: data.date || "",
    guests: data.guests || "",
    message: data.message || "",
    createdAt: new Date(),
  };
}

// Basic CRUD helpers (optional but useful)
export async function findAllEvents() {
  return eventsCollection().find().toArray();
}

export async function insertEvent(data) {
  return eventsCollection().insertOne(data);
}

export async function updateEventById(id, updates) {
  return eventsCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );
}

export async function deleteEventById(id) {
  return eventsCollection().deleteOne({ _id: new ObjectId(id) });
}
