import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    prizePool: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Hackathon", hackathonSchema);
