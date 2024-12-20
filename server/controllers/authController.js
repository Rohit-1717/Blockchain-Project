import User from "../models/User.js";
import { verifyClerkToken } from "../utils/clerkVerify.js";

export const getUserDetails = async (req, res) => {
  try {
    const { clerkId } = req; // Ensure clerkId is attached to req by middleware
    if (!clerkId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Clerk ID missing" });
    }

    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user); // Success response
  } catch (error) {
    console.error("Error fetching user details:", error.message); // Log error for debugging
    res.status(500).json({ error: "Internal server error" });
  }
};
