import { db } from "../server.js";

export const getDashboardStats = async (req, res) => {
  try {
    const menuCount = await db.collection("menu_items").countDocuments();
    const eventsCount = await db.collection("events").countDocuments();
    const contactsCount = await db.collection("contact_submissions").countDocuments();
    const ordersCount = await db.collection("food_orders").countDocuments();

    res.json({
      menuCount,
      eventsCount,
      contactsCount,
      ordersCount,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load dashboard stats" });
  }
};
