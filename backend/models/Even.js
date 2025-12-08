// import mongoose from "mongoose";

// const EvenSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: String,

//     eventType: { type: String, required: true },
//     date: { type: String, required: true },
//     guests: String,

//     message: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Even", EvenSchema);



import mongoose from "mongoose";

const EvenSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,

    eventType: { type: String, required: true },
    date: { type: String, required: true },
    guests: String,

    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Even", EvenSchema);
