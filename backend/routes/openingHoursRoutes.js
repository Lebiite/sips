// import express from "express";
// import {
//   getOpeningHours,
//   createOpeningHours,
//   updateOpeningHours,
//   deleteOpeningHours,
// } from "../controllers/openingHoursController.js";

// const router = express.Router();

// // ✅ Test Route
// router.get("/test", (req, res) => {
//   res.send("✅ Opening hours routes working");
// });

// // ✅ CRUD ROUTES
// router.get("/", getOpeningHours);
// router.post("/", createOpeningHours);
// router.put("/:id", updateOpeningHours);
// router.delete("/:id", deleteOpeningHours);

// export default router;



import express from "express";
import {
  getOpeningHours,
  createOpeningHour,
  updateOpeningHour,
  deleteOpeningHour,
} from "../controllers/openingHoursController.js";

const router = express.Router();

// ✅ TEST ROUTE (VERY IMPORTANT)
router.get("/test", (req, res) => {
  res.send("✅ Opening Hours Routes Working");
});

// ✅ CRUD
router.get("/", getOpeningHours);
router.post("/", createOpeningHour);
router.put("/:id", updateOpeningHour);
router.delete("/:id", deleteOpeningHour);

export default router;
