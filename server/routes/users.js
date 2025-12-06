import express from "express"
import User from "../models/User.js"

const router = express.Router()

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-__v")
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single user with populated events
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Update user preferences
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
