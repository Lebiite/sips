// // super workig but cors error 
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

// // Routes
// import userRoutes from "./routes/users.js";
// import menuRoutes from "./routes/menu.js";
// import eventsRoutes from "./routes/events.js";
// import contactsRoutes from "./routes/contacts.js";
// import highlightsRoutes from "./routes/highlights.js";
// import waterAerobicsRoutes from "./routes/waterAerobicsRoutes.js";

// // ✅ ✅ ✅ FIXED HERE
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";

// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";

// // ✅ Social Links
// import socialLinksRoutes from "./routes/socialLinks.js";

// // ✅ Swimming Lessons
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";

// // ✅ ✅ ✅ OPENING HOURS ROUTE (ONLY THING ADDED)
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ Middleware
// // ==============================
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // ✅ Static uploads
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // ✅ MongoDB Connection
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // ==============================
// // ✅ API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);

// // ✅ Original water aerobics route (UNCHANGED)
// app.use("/api/water-aerobics", waterAerobicsRoutes);

// // ✅ Wine tasting route
// app.use("/api/wine-tasting", wineTastingRoutes);

// // ✅ ✅ ✅ WATER AEROBICS ALIAS FIX (UNCHANGED)
// app.use("/api/water-aerobics", wineTastingRoutes);

// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);

// // Event bookings
// app.use("/api/even", evenRoutes);

// // ✅ Social Links API
// app.use("/api/social-links", socialLinksRoutes);

// // ✅ Swimming Lessons API
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);

// // ✅ ✅ ✅ OPENING HOURS API (ONLY NEW ROUTE)
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // ✅ Root Test Route
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ==============================
// // ✅ 404 Handler
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // ✅ Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message,
//   });
// });

// // ==============================
// // ✅ Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });






// 
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import userRoutes from "./routes/users.js";
import menuRoutes from "./routes/menu.js";
import eventsRoutes from "./routes/events.js";
import contactsRoutes from "./routes/contacts.js";
import highlightsRoutes from "./routes/highlights.js";
import waterAerobicsRoutes from "./routes/waterAerobicsRoutes.js";
import wineTastingRoutes from "./routes/wineTastingRoutes.js";
import categoryRoutes from "./routes/categories.js";
import orderRoutes from "./routes/order.js";
import drinksRoutes from "./routes/drinks.js";
import evenRoutes from "./routes/even.js";
import socialLinksRoutes from "./routes/socialLinks.js";
import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
import openingHoursRoutes from "./routes/openingHoursRoutes.js";

dotenv.config();
const app = express();

// Fix dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==============================
// ✅ Middleware
// ==============================

// Custom CORS configuration
const allowedOrigins = [
  "https://sips-eta.vercel.app/",
  "https://www.theseasidesips.co.ke",
  "https://theseasidesips.co.ke/"
];

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // allow server-to-server requests or curl
      if (allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// ✅ Static uploads
// ==============================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ==============================
// ✅ MongoDB Connection
// ==============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// ==============================
// ✅ API Routes
// ==============================
app.use("/api/users", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/highlights", highlightsRoutes);

// Water aerobics routes
app.use("/api/water-aerobics", waterAerobicsRoutes);
app.use("/api/wine-tasting", wineTastingRoutes);
// Alias (if needed)
app.use("/api/water-aerobics", wineTastingRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/drinks", drinksRoutes);

// Event bookings
app.use("/api/even", evenRoutes);

// Social Links & Swimming Lessons
app.use("/api/social-links", socialLinksRoutes);
app.use("/api/swimming-lessons", swimmingLessonsRoutes);

// Opening Hours
app.use("/api/hours", openingHoursRoutes);

// ==============================
// ✅ Root Test Route
// ==============================
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ==============================
// ✅ 404 Handler
// ==============================
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// ==============================
// ✅ Global Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({
    message: "Server Error",
    error: err.message
  });
});

// ==============================
// ✅ Start Server
// ==============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
