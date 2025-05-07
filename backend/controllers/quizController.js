import Quiz from "../models/Quiz.js";

// @desc    Create new quiz
export const createQuiz = async (req, res) => {
  const { courseId, questions } = req.body;

  const quiz = await Quiz.create({
    courseId,
    questions,
  });

  res.status(201).json(quiz);
};

// @desc    Get quiz by course
export const getQuizByCourse = async (req, res) => {
  const { courseId } = req.params;

  const quiz = await Quiz.findOne({ courseId });
  res.json(quiz);
};
