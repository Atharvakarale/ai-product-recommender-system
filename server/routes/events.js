import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// -------------------------------------------------------------
// ⭐ 1. Log a user event (view, cart, purchase)
// -------------------------------------------------------------
router.post("/", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    await event.populate("userId productId");
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// ⭐ 2. Get events (general filtering, used by dashboard)
// -------------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const { userId, eventType, limit = 100 } = req.query;
    const filter = {};

    if (userId) filter.userId = userId;
    if (eventType) filter.eventType = eventType;

    const events = await Event.find(filter)
      .populate("userId", "username")
      .populate("productId", "name category")
      .sort({ createdAt: -1 })
      .limit(Number.parseInt(limit));

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// ⭐ 3. EVENT DISTRIBUTION for Analytics (pie chart)
// GET /api/events/analytics/distribution
// -------------------------------------------------------------
router.get("/analytics/distribution", async (req, res) => {
  try {
    const distribution = await Event.aggregate([
      {
        $group: {
          _id: "$eventType",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(distribution);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -------------------------------------------------------------
// ⭐ 4. RECENT ACTIVITY for Admin Dashboard
// GET /api/events/recent
// -------------------------------------------------------------
router.get("/recent", async (req, res) => {
  try {
    const recentEvents = await Event.find()
      .populate("userId", "username")
      .populate("productId", "name category")
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(recentEvents);
  } catch (error) {
    console.error("Recent Events Error:", error);
    res.status(500).json({ error: "Failed to fetch recent events" });
  }
});

export default router;
