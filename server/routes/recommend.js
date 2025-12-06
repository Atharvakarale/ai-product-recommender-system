import express from "express"
import User from "../models/User.js"
import RecommendationEngine from "../services/RecommendationEngine.js"

const router = express.Router()

// Get recommendations for a user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const recommendations = await RecommendationEngine.getRecommendations(user)
    res.json(recommendations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
