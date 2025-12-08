// import express from "express";
// import { getAllEvens, createEven } from "../controllers/evenController.js";

// const router = express.Router();

// router.get("/", getAllEvens);
// router.post("/", createEven);

// export default router;


// // nice working only delete
// import express from "express";
// import { getAllEvens, createEven, updateEven } from "../controllers/evenController.js";

// const router = express.Router();

// // GET all
// router.get("/", getAllEvens);

// // CREATE
// router.post("/", createEven);

// // UPDATE
// router.put("/:id", updateEven);

// export default router;




// routes/even.js
import express from "express";
import {
  getAllEvens,
  createEven,
  updateEven,
  deleteEven,
} from "../controllers/evenController.js";

const router = express.Router();

// GET all
router.get("/", getAllEvens);

// CREATE
router.post("/", createEven);

// UPDATE
router.put("/:id", updateEven);

// DELETE
router.delete("/:id", deleteEven);

export default router;
