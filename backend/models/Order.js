import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, default: null },
    },
  ],

  totalPrice: { type: Number, required: true },

  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String, default: "" },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
  },

  orderType: {
    type: String,
    enum: ["dine-in", "takeaway", "delivery"],
    required: true,
  },

  tableNumber: {
    type: Number,
    default: null,
  },

  status: {
    type: String,
    enum: ["Pending", "Preparing", "Ready", "Completed"],
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", OrderSchema);
