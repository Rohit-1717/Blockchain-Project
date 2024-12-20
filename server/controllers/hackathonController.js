import Hackathon from "../models/Hackathon.js";

export const createHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.create(req.body);
    res.status(201).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
