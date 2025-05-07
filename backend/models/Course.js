import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
