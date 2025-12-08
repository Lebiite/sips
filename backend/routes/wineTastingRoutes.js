// import express from "express";
// import {
//   getWineTastings,
//   createWineTasting,
//   updateWineTasting,
//   deleteWineTasting,
// } from "../controllers/wineTastingController.js";

// const router = express.Router();

// router.get("/", getWineTastings);
// router.post("/", createWineTasting);
// router.put("/:id", updateWineTasting);
// router.delete("/:id", deleteWineTasting);

// export default router;




// import express from "express";
// import {
//   getWineTastings,
//   createWineTasting,
//   updateWineTasting,
//   deleteWineTasting,
// } from "../controllers/wineTastingController.js";

// const router = express.Router();

// router.get("/", getWineTastings);
// router.post("/", createWineTasting);
// router.put("/:id", updateWineTasting);
// router.delete("/:id", deleteWineTasting);

// export default router;





// import express from "express";
// import {
//   getWineTastings,
//   createWineTasting,
//   updateWineTasting,
//   deleteWineTasting,
// } from "../controllers/wineTastingController.js";

// const router = express.Router();

// router.get("/", getWineTastings);
// router.post("/", createWineTasting);
// router.put("/:id", updateWineTasting);
// router.delete("/:id", deleteWineTasting);

// export default router;




//wineTastingRoutes.js
import express from "express";
import {
  getWineTastings,
  createWineTasting,
  updateWineTasting,
  deleteWineTasting,
} from "../controllers/wineTastingController.js";

const router = express.Router();

// ✅ Health check (optional but recommended)
router.get("/test", (req, res) => {
  res.send("✅ Wine tasting routes working");
});

// ✅ GET ALL
router.get("/", getWineTastings);

// ✅ CREATE
router.post("/", createWineTasting);

// ✅ UPDATE
router.put("/:id", updateWineTasting);

// ✅ DELETE
router.delete("/:id", deleteWineTasting);

export default router;
