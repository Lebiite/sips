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















// // 
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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ PRODUCTION CORS (FINAL)
// // ==============================
// const allowedOrigins = [
//   "https://sips-eta.vercel.app",
//   "https://sips.vercel.app",
//   "https://theseasidesips.co.ke",
//   "https://www.theseasidesips.co.ke",
//   "http://localhost:5173",
//   "http://localhost:3000"
// ];

// app.use(
//   cors({
//     origin: (origin, cb) => {
//       if (!origin) return cb(null, true); // Server-to-server or curl
//       console.log("CORS Origin:", origin);

//       if (allowedOrigins.includes(origin)) {
//         return cb(null, true);
//       }

//       return cb(new Error(`❌ CORS Blocked Origin: ${origin}`));
//     },
//     credentials: true,
//     exposedHeaders: ["Content-Range", "X-Total-Count"]
//   })
// );

// // ==============================
// // Middleware
// // ==============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // Static uploads (local only)
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // MongoDB Connection
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // ==============================
// // API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);

// // Activity routes
// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);

// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);

// // Event bookings
// app.use("/api/even", evenRoutes);

// // Social + Lessons + Hours
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // Root test route
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ==============================
// // 404 Handler
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message
//   });
// });

// // ==============================
// // Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });














































// // 
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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ Middleware
// // ==============================

// // Custom CORS configuration
// const allowedOrigins = [
//   "https://sips-eta.vercel.app/",
//   "https://www.theseasidesips.co.ke",
//   "https://theseasidesips.co.ke/"
// ];

// app.use(
//   cors({
//     origin: (origin, cb) => {
//       if (!origin) return cb(null, true); // allow server-to-server requests or curl
//       if (allowedOrigins.includes(origin)) return cb(null, true);
//       cb(new Error("Not allowed by CORS"));
//     },
//     credentials: true
//   })
// );

// // Built-in middleware
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

// // Water aerobics routes
// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);
// // Alias (if needed)
// app.use("/api/water-aerobics", wineTastingRoutes);

// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);

// // Event bookings
// app.use("/api/even", evenRoutes);

// // Social Links & Swimming Lessons
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);

// // Opening Hours
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
//     error: err.message
//   });
// });

// // ==============================
// // ✅ Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // ==============================
// // Fix __dirname (ES modules)
// // ==============================
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ CORS — WORKS LOCAL + PROD
// // ==============================
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:3000",
//   "https://sips-eta.vercel.app",
//   "https://theseasidesips.co.ke",
//   "https://www.theseasidesips.co.ke"
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow server-to-server, Postman, curl
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       console.error("❌ Blocked by CORS:", origin);
//       return callback(new Error("CORS not allowed"));
//     },
//     credentials: true
//   })
// );

// // ==============================
// // Middleware
// // ==============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // Static uploads
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // MongoDB
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Error:", err));

// // ==============================
// // API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);

// // Activities
// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);

// // Core data
// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);

// // Events booking
// app.use("/api/even", evenRoutes);

// // Social / Lessons / Hours
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // Root health check
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running 🚀");
// });

// // ==============================
// // 404
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err.message);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message
//   });
// });

// // ==============================
// // Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ SAFE CORS (LOCAL + PROD)
// // ==============================
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:3000",
//   "https://sips-eta.vercel.app",
//   "https://theseasidesips.co.ke",
//   "https://www.theseasidesips.co.ke"
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow Postman / curl / server-to-server
//       if (!origin) {
//         return callback(null, true);
//       }

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       console.warn("⚠️ CORS blocked origin:", origin);
//       return callback(null, false);
//     },
//     credentials: true
//   })
// );

// // ==============================
// // Middleware
// // ==============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // Static uploads
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // MongoDB Connection
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // ==============================
// // API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);

// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);

// // Alias kept as-is
// app.use("/api/water-aerobics", wineTastingRoutes);

// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);
// app.use("/api/even", evenRoutes);
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // Root Test Route
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ==============================
// // 404 Handler
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message
//   });
// });

// // ==============================
// // Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });







// // working well still course for vercel
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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ FINAL, CORRECT CORS
// // ==============================
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:5173",
//   "http://localhost:8080",
//   "https://sips-eta.vercel.app",
//   "https://theseasidesips.co.ke",
//   "https://www.theseasidesips.co.ke"
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow server-to-server, Postman, curl
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }

//       console.warn("⚠️ CORS blocked origin:", origin);
//       return callback(new Error("CORS not allowed"), false);
//     },
//     credentials: true,
//   })
// );

// // ==============================
// // Middleware
// // ==============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // Static uploads
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // MongoDB Connection
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // ==============================
// // API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);

// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);

// // ⚠️ Alias kept intentionally (as in your working version)
// app.use("/api/water-aerobics", wineTastingRoutes);

// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);
// app.use("/api/even", evenRoutes);
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // Root Test Route
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ==============================
// // 404 Handler
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err.message);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message,
//   });
// });

// // ==============================
// // Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




// // super clean everything is working 
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
// import wineTastingRoutes from "./routes/wineTastingRoutes.js";
// import categoryRoutes from "./routes/categories.js";
// import orderRoutes from "./routes/order.js";
// import drinksRoutes from "./routes/drinks.js";
// import evenRoutes from "./routes/even.js";
// import socialLinksRoutes from "./routes/socialLinks.js";
// import swimmingLessonsRoutes from "./routes/swimmingLessons.js";
// import openingHoursRoutes from "./routes/openingHoursRoutes.js";

// dotenv.config();
// const app = express();

// // Fix dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ==============================
// // ✅ UPDATED CORS (Fixed for Vercel + Production)
// // ==============================
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:5173",
//   "http://localhost:8080",
//   // Your main Vercel deployment (replace with your actual project name if different)
//   "https://sips-eta.vercel.app",
//   // All Vercel preview deployments (essential for testing branches)
//   "https://sips-eta.vercel.app", // already included, but keep
//   // Add any other Vercel project names if you have multiple
//   // Production domain
//   "https://theseasidesips.co.ke",
//   "https://www.theseasidesips.co.ke",
// ];

// // Make it more flexible: allow any vercel.app subdomain of your project
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow non-browser requests (Postman, server-to-server, curl, etc.)
//       if (!origin) return callback(null, true);

//       // Allow localhost
//       if (origin.startsWith("http://localhost")) {
//         return callback(null, true);
//       }

//       // Allow your production domain
//       if (origin === "https://theseasidesips.co.ke" || origin === "https://www.theseasidesips.co.ke") {
//         return callback(null, true);
//       }

//       // Allow any Vercel deployment (main + previews)
//       if (origin.endsWith(".vercel.app")) {
//         return callback(null, true);
//       }

//       console.warn("⚠️ CORS blocked origin:", origin);
//       return callback(new Error("Not allowed by CORS"), false);
//     },
//     credentials: true,
//   })
// );

// // ==============================
// // Middleware
// // ==============================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ==============================
// // Static uploads
// // ==============================
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ==============================
// // MongoDB Connection
// // ==============================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ Mongo Error:", err));

// // ==============================
// // API Routes
// // ==============================
// app.use("/api/users", userRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/events", eventsRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/highlights", highlightsRoutes);
// app.use("/api/water-aerobics", waterAerobicsRoutes);
// app.use("/api/wine-tasting", wineTastingRoutes);
// // Removed incorrect alias: wineTastingRoutes was wrongly mounted on water-aerobics again
// app.use("/api/categories", categoryRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/drinks", drinksRoutes);
// app.use("/api/even", evenRoutes);
// app.use("/api/social-links", socialLinksRoutes);
// app.use("/api/swimming-lessons", swimmingLessonsRoutes);
// app.use("/api/hours", openingHoursRoutes);

// // ==============================
// // Root Test Route
// // ==============================
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ==============================
// // 404 Handler
// // ==============================
// app.use((req, res) => {
//   res.status(404).json({ message: "Route Not Found" });
// });

// // ==============================
// // Global Error Handler
// // ==============================
// app.use((err, req, res, next) => {
//   console.error("🔥 SERVER ERROR:", err.message);
//   res.status(500).json({
//     message: "Server Error",
//     error: err.message,
//   });
// });

// // ==============================
// // Start Server
// // ==============================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });



// super clean everything is working
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
// ✅ CLEAN & OPTIMIZED CORS
// ==============================
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (Postman, server-to-server, curl, etc.)
      if (!origin) return callback(null, true);

      // Allow all localhost ports
      if (origin.startsWith("http://localhost")) {
        return callback(null, true);
      }

      // Allow production domain + www
      if (
        origin === "https://theseasidesips.co.ke" ||
        origin === "https://www.theseasidesips.co.ke"
      ) {
        return callback(null, true);
      }

      // Allow ANY Vercel deployment (main + all previews)
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.warn("⚠️ CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"), false);
    },
    credentials: true,
  })
);

// ==============================
// Middleware
// ==============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// Static uploads
// ==============================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ==============================
// MongoDB Connection
// ==============================
// Check if MONGO_URI is set
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not set in .env! Cannot connect.");
  process.exit(1); // Exit to prevent running without DB
}

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,  // Timeout after 5s if DNS/SRV fails (prevents hang)
    socketTimeoutMS: 45000,          // General socket timeout
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));  // Logs full error object

// TIP: If ETIMEOUT persists, switch to standard mongodb:// URI (no +srv) from Atlas dashboard.
// Example: mongodb://<user>:<pass>@shard1.mongodb.net:27017,shard2.mongodb.net:27017/<db>?ssl=true&replicaSet=atlas-xxx&authSource=admin&retryWrites=true&w=majority

// ==============================
// API Routes
// ==============================
app.use("/api/users", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/highlights", highlightsRoutes);
app.use("/api/water-aerobics", waterAerobicsRoutes);
app.use("/api/wine-tasting", wineTastingRoutes);
// Removed incorrect alias: wineTastingRoutes was wrongly mounted on water-aerobics again
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/drinks", drinksRoutes);
app.use("/api/even", evenRoutes);
app.use("/api/social-links", socialLinksRoutes);
app.use("/api/swimming-lessons", swimmingLessonsRoutes);
app.use("/api/hours", openingHoursRoutes);

// ==============================
// Root Test Route
// ==============================
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ==============================
// 404 Handler
// ==============================
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// ==============================
// Global Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err.message);
  res.status(500).json({
    message: "Server Error",
    error: err.message,
  });
});

// ==============================
// Start Server
// ==============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});