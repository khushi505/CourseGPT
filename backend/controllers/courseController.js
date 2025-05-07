import Course from "../models/Course.js";

// @desc    Create new course
export const createCourse = async (req, res) => {
  const { title, description } = req.body;

  const course = await Course.create({
    title,
    description,
    creator: req.user._id,
  });

  res.status(201).json(course);
};

// @desc    Get all courses
export const getCourses = async (req, res) => {
  const courses = await Course.find({ creator: req.user._id });
  res.json(courses);
};
