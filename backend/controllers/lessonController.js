import Lesson from "../models/Lesson.js";

// @desc    Create new lesson
export const createLesson = async (req, res) => {
  const { courseId, title, content } = req.body;

  const lesson = await Lesson.create({
    courseId,
    title,
    content,
  });

  res.status(201).json(lesson);
};

// @desc    Get lessons by course
export const getLessonsByCourse = async (req, res) => {
  const { courseId } = req.params;

  const lessons = await Lesson.find({ courseId });
  res.json(lessons);
};
