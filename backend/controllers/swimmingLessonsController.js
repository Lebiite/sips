// import { db, ObjectId } from "../server.js";

// // GET all lessons
// export const getLessons = async (req, res) => {
//   try {
//     const lessons = await db.collection("swimming_lessons")
//       .find()
//       .sort({ created_at: -1 })
//       .toArray();

//     res.json(lessons);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch lessons" });
//   }
// };

// // CREATE
// export const createLesson = async (req, res) => {
//   try {
//     const payload = {
//       ...req.body,
//       max_participants: req.body.max_participants ? Number(req.body.max_participants) : null,
//       price: req.body.price ? Number(req.body.price) : null,
//       created_at: new Date(),
//     };

//     const result = await db.collection("swimming_lessons").insertOne(payload);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create lesson" });
//   }
// };

// // UPDATE
// export const updateLesson = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const payload = {
//       ...req.body,
//       max_participants: req.body.max_participants ? Number(req.body.max_participants) : null,
//       price: req.body.price ? Number(req.body.price) : null,
//     };

//     const result = await db.collection("swimming_lessons").updateOne(
//       { _id: new ObjectId(id) },
//       { $set: payload }
//     );

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update lesson" });
//   }
// };

// // DELETE
// export const deleteLesson = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await db.collection("swimming_lessons").deleteOne({
//       _id: new ObjectId(id),
//     });

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete lesson" });
//   }
// };







import SwimmingLesson from "../models/SwimmingLesson.js";

// ✅ GET ALL LESSONS
export const getSwimmingLessons = async (req, res) => {
  try {
    const lessons = await SwimmingLesson.find().sort({ createdAt: -1 });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch lessons", error: error.message });
  }
};

// ✅ CREATE LESSON
export const createSwimmingLesson = async (req, res) => {
  try {
    const lesson = new SwimmingLesson(req.body);
    const savedLesson = await lesson.save();
    res.status(201).json(savedLesson);
  } catch (error) {
    res.status(400).json({ message: "Failed to create lesson", error: error.message });
  }
};

// ✅ UPDATE LESSON
export const updateSwimmingLesson = async (req, res) => {
  try {
    const updatedLesson = await SwimmingLesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: "Failed to update lesson", error: error.message });
  }
};

// ✅ DELETE LESSON
export const deleteSwimmingLesson = async (req, res) => {
  try {
    const deletedLesson = await SwimmingLesson.findByIdAndDelete(req.params.id);

    if (!deletedLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete lesson", error: error.message });
  }
};






