import { verifyToken } from "@clerk/clerk-sdk-node";

export const verifyClerkToken = async (token) => {
  return await verifyToken(token);
};
