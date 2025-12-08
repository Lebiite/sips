// import express from "express";
// import {
//   getAllHours,
//   createHours,
//   updateHours,
//   deleteHours,
// } from "../controllers/hoursController.js";

// const router = express.Router();

// router.get("/", getAllHours);
// router.post("/", createHours);
// router.put("/:id", updateHours);
// router.delete("/:id", deleteHours);

// export default router;



import express from "express";
import {
  getHighlights,
  createHighlight,
  updateHighlight,
  deleteHighlight,
} from "../controllers/highlightsController.js";

const router = express.Router();

// ✅ Health check
router.get("/test", (req, res) => {
  res.send("✅ Highlights routes working");
});

// ✅ CRUD
router.get("/", getHighlights);
router.post("/", createHighlight);
router.put("/:id", updateHighlight);
router.delete("/:id", deleteHighlight);

export default router;
