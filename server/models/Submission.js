import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    hackathon: { type: mongoose.Schema.Types.ObjectId, ref: "Hackathon", required: true },
    projectLink: { type: String, required: true },
    score: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Submission", submissionSchema);
