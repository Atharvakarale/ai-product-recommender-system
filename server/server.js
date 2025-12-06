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
import cors from "cors";
import mongoose from "mongoose";

import config from "./config.js";

import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import eventRoutes from "./routes/events.js";
import recommendRoutes from "./routes/recommend.js";
import feedbackRoutes from "./routes/feedback.js";

import seedDatabase from "./seed/seed.js"; // default export


const app = express();

// -----------------------------------------------------------
// CORS SETUP (Smart handling based on config)
// -----------------------------------------------------------
let corsOptions = {};

if (config.corsAllowAny) {
  // Allow any origin (NO credentials allowed!)
  corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  };
} else {
  // Allow only specific origins
  corsOptions = {
    origin: config.corsOrigins,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  };
}

console.log("CORS configuration:", corsOptions);

app.use(cors(corsOptions));
app.use(express.json());

// -----------------------------------------------------------
// MONGODB CONNECTION
// -----------------------------------------------------------
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.error("MongoDB connection error:", err.message)
  );

// -----------------------------------------------------------
// HEALTH CHECK ROUTE
// -----------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

// -----------------------------------------------------------
// MANUAL SEEDING ROUTE
// -----------------------------------------------------------
app.get("/api/seed", async (req, res) => {
  try {
    console.log("Running database seed...");
    await seedDatabase();
    return res.send("Database seeded successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
    return res.status(500).send("Seeding failed.");
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
// ERROR MIDDLEWARE
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
