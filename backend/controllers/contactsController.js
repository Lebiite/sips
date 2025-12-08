import Contact from "../models/Contact.js";

// GET all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// CREATE new contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const saved = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    console.log("📩 New contact submission saved.");

    res.json({
      success: true,
      data: saved,
    });
  } catch (err) {
    console.error("Contact create error:", err.message);
    res.status(500).json({ error: "Failed to save contact" });
  }
};
