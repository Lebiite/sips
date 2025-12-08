// routes/contacts.js
import express from "express";
import { getAllContacts, createContact } from "../controllers/contactsController.js";

const router = express.Router();

// GET all contacts
router.get("/", getAllContacts);

// POST new contact
router.post("/", createContact);

// export router as default
export default router;
