import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema(
  {
    recommendationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RecommendationLog",
      required: true,
    },
    reaction: {
      type: String,
      enum: ["up", "down", "not_relevant"],
      required: true,
    },
    comment: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
)

export default mongoose.model("Feedback", feedbackSchema)
