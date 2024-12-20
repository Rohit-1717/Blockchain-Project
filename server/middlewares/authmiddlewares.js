import { verifyClerkToken } from "../utils/clerkVerify.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const clerkId = await verifyClerkToken(token);
    req.clerkId = clerkId; // Attach clerkId to req object
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};
