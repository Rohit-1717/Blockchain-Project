import express from "express";
import { createHackathon, getHackathons } from "../controllers/hackathonController.js";

const router = express.Router();

router.post("/", createHackathon);
router.get("/", getHackathons);

export default router;
