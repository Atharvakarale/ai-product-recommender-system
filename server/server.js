
// // server.js
// import "dotenv/config";
// import express from "express";
// import mongoose from "mongoose";

// // Routes
// import productRoutes from "./routes/products.js";
// import userRoutes from "./routes/users.js";
// import eventRoutes from "./routes/events.js";
// import recommendRoutes from "./routes/recommend.js";
// import feedbackRoutes from "./routes/feedback.js";

// import seedDatabase from "./seed/seed.js";
// import config from "./config.js";

// const app = express();

// // -----------------------------------------------------------
// // 🔥 UNIVERSAL CORS FIX — WORKS FOR VERCEL, RAILWAY, LOCAL
// // -----------------------------------------------------------
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // Allow ALL origins
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// app.use(express.json());

// // -----------------------------------------------------------
// // MONGODB CONNECTION
// // -----------------------------------------------------------
// mongoose
//   .connect(config.mongoUri)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err.message));

// // -----------------------------------------------------------
// // HEALTH CHECK
// // -----------------------------------------------------------
// app.get("/api/health", (req, res) => {
//   res.json({ status: "OK", timestamp: new Date() });
// });

// // -----------------------------------------------------------
// // RUN SEEDER (manual)
// // -----------------------------------------------------------
// app.get("/api/seed", async (req, res) => {
//   try {
//     console.log("Running database seed...");
//     await seedDatabase();
//     res.send("Database seeded successfully!");
//   } catch (err) {
//     console.error("Seeding error:", err);
//     res.status(500).send("Seeding failed.");
//   }
// });

// // -----------------------------------------------------------
// // API ROUTES
// // -----------------------------------------------------------
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/events", eventRoutes);
// app.use("/api/recommend", recommendRoutes);
// app.use("/api/feedback", feedbackRoutes);

// // -----------------------------------------------------------
// // 404 ROUTE HANDLER
// // -----------------------------------------------------------
// app.use((req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });

// // -----------------------------------------------------------
// // GLOBAL ERROR HANDLER
// // -----------------------------------------------------------
// app.use((err, req, res, next) => {
//   console.error("Unhandled error:", err);
//   res.status(err.status || 500).json({
//     error: err.message || "Internal server error",
//   });
// });

// // -----------------------------------------------------------
// // START SERVER
// // -----------------------------------------------------------
// app.listen(config.port, () => {
//   console.log(`Server running on port ${config.port}`);
//   console.log(`Environment: ${config.nodeEnv}`);
//   console.log(`Mongo URI: ${config.mongoUri ? "Loaded" : "Missing"}`);
// });

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
// 🌍 CORS — Works for Railway backend + Vercel frontend
// -----------------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

// -----------------------------------------------------------
// 🔗 MONGODB CONNECTION
// -----------------------------------------------------------
mongoose
  .connect(config.mongoUri, {
    serverSelectionTimeoutMS: 8000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.error("MongoDB connection error:", err.message)
  );

// -----------------------------------------------------------
// ❤️ HEALTH CHECK
// -----------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date(),
  });
});

// -----------------------------------------------------------
// 🌱 MANUAL DATABASE SEEDER
// -----------------------------------------------------------
app.get("/api/seed", async (req, res) => {
  try {
    console.log("Running database seed...");
    await seedDatabase(); // DO NOT CLOSE DB INSIDE SEED
    res.send("Database seeded successfully!");
  } catch (err) {
    console.error("Seeding error:", err);
    res.status(500).send("Seeding failed.");
  }
});

// -----------------------------------------------------------
// 📦 ROUTES
// -----------------------------------------------------------
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/recommend", recommendRoutes);
app.use("/api/feedback", feedbackRoutes);

// -----------------------------------------------------------
// ❌ 404 HANDLER
// -----------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -----------------------------------------------------------
// ⚠️ GLOBAL ERROR HANDLER
// -----------------------------------------------------------
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
  });
});

// -----------------------------------------------------------
// 🚀 START SERVER
// -----------------------------------------------------------
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
