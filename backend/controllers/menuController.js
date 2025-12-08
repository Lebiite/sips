 // works 100% just trying to fix the main menu 
// backend/controllers/menuController.js
import Category from "../models/Category.js";
import MenuItem from "../models/MenuItem.js";

/* -------------------------------------------------------------------------- */
/*                              CATEGORY CONTROLLERS                          */
/* -------------------------------------------------------------------------- */

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching categories",
      error: err.message,
    });
  }
};

// Create new category
export const createCategory = async (req, res) => {
  try {
    const { title, slug, description, image } = req.body;

    const category = await Category.create({
      title,
      slug,
      description,
      image,
    });

    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json({
      message: "Error creating category",
      error: err.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                              MENU ITEM CONTROLLERS                         */
/* -------------------------------------------------------------------------- */

// Get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find({}).populate("category");
    return res.json(items);
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching menu items",
      error: err.message,
    });
  }
};

// Get single item by ID
export const getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id).populate("category");

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    return res.json(item);
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching item",
      error: err.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                        ITEMS BY CATEGORY SLUG (MAIN LOGIC)                 */
/* -------------------------------------------------------------------------- */

export const getItemsByCategorySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    // ---------- FULL MENU (special case) ----------
    if (slug === "full-menu") {
      const allItems = await MenuItem.find({})
        .populate("category")
        .lean();

      return res.json(allItems); // Always ARRAY
    }

    // ---------- FIND CATEGORY ----------
    const category = await Category.findOne({ slug });

    if (!category) {
      // Frontend expects array - never send 404 here
      return res.json([]);
    }

    // ---------- FIND ITEMS IN THIS CATEGORY ----------
    const items = await MenuItem.find({ category: category._id })
      .populate("category")
      .lean();

    return res.json(items);
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching items",
      error: err.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                        CREATE / UPDATE / DELETE MENU ITEMS                 */
/* -------------------------------------------------------------------------- */

// Create menu item
export const createMenuItem = async (req, res) => {
  try {
    const { title, description, price, categoryId } = req.body;

    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const item = await MenuItem.create({
      title,
      description,
      price,
      image_url,
      category: categoryId,
    });

    return res.status(201).json(item);
  } catch (err) {
    return res.status(400).json({
      message: "Error creating menu item",
      error: err.message,
    });
  }
};

// Update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const updates = req.body;

    if (req.file) {
      updates.image_url = `/uploads/${req.file.filename}`;
    }

    const item = await MenuItem.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    return res.json(item);
  } catch (err) {
    return res.status(400).json({
      message: "Error updating item",
      error: err.message,
    });
  }
};

// Delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({
      message: "Error deleting item",
      error: err.message,
    });
  }
};

