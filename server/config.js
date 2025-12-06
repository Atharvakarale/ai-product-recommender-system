// // Database and environment configuration
// const config = {
//   mongoUri: process.env.MONGODB_URI ,
//   port: process.env.PORT || 5000,
//   nodeEnv: process.env.NODE_ENV || "development",
//   openaiApiKey: process.env.OPENAI_API_KEY || "sk-demo-key",
//   corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
// }

// export default config

// config.js
import "dotenv/config";

const config = {
  // ✅ Support BOTH env variable names (fixes your issue permanently)
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ,

  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",

  // ✅ Do NOT hardcode secrets in prod
  openaiApiKey: process.env.OPENAI_API_KEY || "",

  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
};

export default config;
