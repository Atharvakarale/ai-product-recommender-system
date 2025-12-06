import mongoose from "mongoose"

const recommendationLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    totalScore: {
      type: Number,
      default: 0,
    },
    factors: {
      categorySimilarity: { type: Number, default: 0 },
      behaviorScore: { type: Number, default: 0 },
      popularityScore: { type: Number, default: 0 },
      recencyScore: { type: Number, default: 0 },
    },
    llmExplanation: {
      type: String,
      default: "",
    },
    confidence: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
  },
  { timestamps: true },
)

export default mongoose.model("RecommendationLog", recommendationLogSchema)
