import Submission from "../models/Submission.js";

export const createSubmission = async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
