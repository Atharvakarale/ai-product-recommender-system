// import dotenv from 'dotenv';
// dotenv.config({ path: "./.env" });   
// dotenv.config();
// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
// import config from "./config.js"
// import productRoutes from "./routes/products.js"
// import userRoutes from "./routes/users.js"
// import eventRoutes from "./routes/events.js"
// import recommendRoutes from "./routes/recommend.js"
// import feedbackRoutes from "./routes/feedback.js"
// import { seedDatabase } from "./seed/seed.js";
//  // if you want default, tell me & I’ll modify export



// const app = express()

// // Middleware
// app.use(cors({ origin: config.corsOrigin }))
// app.use(express.json())

// // Database connection


// mongoose
//   .connect(config.mongoUri)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err))

// // Health check
// app.get("/api/health", (req, res) => {
//   res.json({ status: "OK", timestamp: new Date() })
// })



// app.get("/api/seed", async (req, res) => {
//   try {
//     await seedDatabase();
//     res.send("Database seeded successfully!");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Seeding failed");
//   }
// });


// // Routes
// app.use("/api/products", productRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/events", eventRoutes)
// app.use("/api/recommend", recommendRoutes)
// app.use("/api/feedback", feedbackRoutes)

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" })
// })

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err)
//   res.status(err.status || 500).json({
//     error: err.message || "Internal server error",
//   })
// })

// app.listen(config.port, () => {
//   console.log(`Server running on port ${config.port}`)
//   console.log(`Environment: ${config.nodeEnv}`)
// })

// server.js
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

// Routes
import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import eventRoutes from "./routes/events.js";
import recommendRoutes from "./routes/recommend.js";
import feedbackRoutes from "./routes/feedback.js";

import seedDatabase from "./seed/seed.js";
import config from "./config.js";

const app = express();

// -----------------------------------------------------------
// 🔥 UNIVERSAL CORS FIX — WORKS FOR VERCEL, RAILWAY, LOCAL
// -----------------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow ALL origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

// -----------------------------------------------------------
// MONGODB CONNECTION
// -----------------------------------------------------------
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// -----------------------------------------------------------
// HEALTH CHECK
// -----------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

// -----------------------------------------------------------
// RUN SEEDER (manual)
// -----------------------------------------------------------
app.get("/api/seed", async (req, res) => {
  try {
    console.log("Running database seed...");
    await seedDatabase();
    res.send("Database seeded successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
    res.status(500).send("Seeding failed.");
  }
});

// -----------------------------------------------------------
// API ROUTES
// -----------------------------------------------------------
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/feedback", feedbackRoutes);

// -----------------------------------------------------------
// 404 ROUTE HANDLER
// -----------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -----------------------------------------------------------
// GLOBAL ERROR HANDLER
// -----------------------------------------------------------
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
  });
});

// -----------------------------------------------------------
// START SERVER
// -----------------------------------------------------------
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`Mongo URI: ${config.mongoUri ? "Loaded" : "Missing"}`);
});
