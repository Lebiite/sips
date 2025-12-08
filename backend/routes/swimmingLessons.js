// import express from "express";
// import {
//   getLessons,
//   createLesson,
//   updateLesson,
//   deleteLesson,
// } from "../controllers/swimmingLessonsController.js";

// const router = express.Router();

// router.get("/", getLessons);
// router.post("/", createLesson);
// router.put("/:id", updateLesson);
// router.delete("/:id", deleteLesson);

// export default router;




import express from "express";
import {
  getSwimmingLessons,
  createSwimmingLesson,
  updateSwimmingLesson,
  deleteSwimmingLesson,
} from "../controllers/swimmingLessonsController.js";

const router = express.Router();

router.get("/", getSwimmingLessons);
router.post("/", createSwimmingLesson);
router.put("/:id", updateSwimmingLesson);
router.delete("/:id", deleteSwimmingLesson);

export default router;
