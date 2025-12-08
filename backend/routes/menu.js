
// wors 100% just making sure working on full-menu
import express from "express";
import Category from "../models/Category.js";
import MenuItem from "../models/MenuItem.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

/* ------------------ GET ITEMS BY CATEGORY SLUG ------------------ */
router.get("/:slug", async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });

    if (!category)
      return res.status(404).json({ message: "Category not found" });

    const items = await MenuItem.find({ category: category._id });

    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ CREATE ITEM ------------------ */
router.post("/items", upload.single("image"), async (req, res) => {
  try {
    const { title, description, price, categoryId } = req.body;

    if (!categoryId)
      return res.status(400).json({ error: "categoryId is required" });

    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await MenuItem.create({
      title,
      description,
      price,
      category: categoryId,
      image_url,
    });

    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ------------------ UPDATE ITEM ------------------ */
router.put("/items/:id", upload.single("image"), async (req, res) => {
  try {
    const updates = req.body;

    if (req.file) {
      updates.image_url = `/uploads/${req.file.filename}`;
    }

    const updated = await MenuItem.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ------------------ DELETE ITEM ------------------ */
router.delete("/items/:id", async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
