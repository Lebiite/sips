import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, orderType, tableNumber, customer } = req.body;

    if (!items || items.length === 0)
      return res.status(400).json({ error: "Items missing" });

    if (!totalPrice)
      return res.status(400).json({ error: "Total price required" });

    if (!orderType)
      return res.status(400).json({ error: "Order type required" });

    if (!customer?.firstName || !customer?.phone)
      return res.status(400).json({ error: "Customer details missing" });

    const order = await Order.create({
      items,
      totalPrice,
      orderType,
      tableNumber: orderType === "dine-in" ? tableNumber : null,
      customer,
      status: "Pending",
    });

    res.status(201).json({
      message: "Order created",
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL ORDERS
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) return res.status(400).json({ error: "Status required" });

    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json({
      message: "Status updated",
      order,
    });
  } catch (error) {
    console.error("Update Status Error:", error);
    res.status(500).json({ error: "Update failed" });
  }
};
