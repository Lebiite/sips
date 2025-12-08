// // routes/highlights.js
// import express from "express";
// import {
//   getAllHighlights,
//   createHighlight,
//   updateHighlight,
//   deleteHighlight
// } from "../controllers/highlightsController.js";

// const router = express.Router();

// router.get("/", getAllHighlights);
// router.post("/", createHighlight);
// router.put("/:id", updateHighlight);
// router.delete("/:id", deleteHighlight);

// export default router;



import express from "express";
import {
  getHighlights,
  createHighlight,
  updateHighlight,
  deleteHighlight,
} from "../controllers/highlightsController.js";

const router = express.Router();

router.get("/", getHighlights);
router.post("/", createHighlight);
router.put("/:id", updateHighlight);
router.delete("/:id", deleteHighlight);

export default router;
