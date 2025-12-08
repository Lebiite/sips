// import express from "express";
// import {
//   getWaterAerobics,
//   createWaterAerobics,
//   updateWaterAerobics,
//   deleteWaterAerobics,
// } from "../controllers/waterAerobicsController.js";

// const router = express.Router();

// router.get("/", getWaterAerobics);
// router.post("/", createWaterAerobics);
// router.put("/:id", updateWaterAerobics);
// router.delete("/:id", deleteWaterAerobics);

// export default router;




// import express from "express";
// import {
//   getWaterAerobics,
//   createWaterAerobics,
//   updateWaterAerobics,
//   deleteWaterAerobics,
// } from "../controllers/waterAerobicsController.js";

// const router = express.Router();

// // ✅ GET all
// router.get("/", getWaterAerobics);

// // ✅ CREATE
// router.post("/", createWaterAerobics);

// // ✅ UPDATE
// router.put("/:id", updateWaterAerobics);

// // ✅ DELETE
// router.delete("/:id", deleteWaterAerobics);

// export default router;




import express from "express";
import {
  getWaterAerobics,
  createWaterAerobics,
  updateWaterAerobics,
  deleteWaterAerobics,
} from "../controllers/waterAerobicsController.js";

const router = express.Router();

// ✅ GET all
router.get("/", getWaterAerobics);

// ✅ CREATE
router.post("/", createWaterAerobics);

// ✅ UPDATE
router.put("/:id", updateWaterAerobics);

// ✅ DELETE
router.delete("/:id", deleteWaterAerobics);

export default router;
