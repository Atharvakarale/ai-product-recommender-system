import express from "express"
import Feedback from "../models/Feedback.js"
import RecommendationLog from "../models/RecommendationLog.js"

const router = express.Router()

// Submit feedback on a recommendation
router.post("/", async (req, res) => {
  try {
    const { recommendationId, reaction, comment } = req.body

    // Validate recommendation exists
    const rec = await RecommendationLog.findById(recommendationId)
    if (!rec) {
      return res.status(404).json({ error: "Recommendation not found" })
    }

    const feedback = await Feedback.create({
      recommendationId,
      reaction,
      comment,
    })

    res.status(201).json(feedback)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get feedback statistics
router.get("/stats/all", async (req, res) => {
  try {
    const stats = await Feedback.aggregate([
      {
        $group: {
          _id: "$reaction",
          count: { $sum: 1 },
        },
      },
    ])
    res.json(stats)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
