// controllers/users.js
import { ObjectId } from "mongodb";
import { getDB } from "../models/db.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;
    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const db = getDB();
    const newUser = req.body;
    const result = await db.collection("users").insertOne(newUser);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;
    const updatedData = req.body;
    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;
    const result = await db.collection("users").deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
