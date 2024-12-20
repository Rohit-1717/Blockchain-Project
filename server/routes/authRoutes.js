import express from "express";
import { getUserDetails } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authmiddlewares.js";

const router = express.Router();

router.get("/me", authMiddleware, getUserDetails);

export default router;
