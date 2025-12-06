// config.js
import "dotenv/config";

const rawCors = (process.env.CORS_ORIGIN ?? "*").trim();

// Treat empty string as wildcard as well
const corsAllowAny = rawCors === "*" || rawCors === "";

// If not wildcard, split by comma into an array of trimmed origins
const corsOrigins = corsAllowAny
  ? []
  : rawCors.split(",").map((s) => s.trim()).filter(Boolean);

const config = {
  // Database (support both common env names)
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_URI || "",

  // Server
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",

  // Secrets
  openaiApiKey: process.env.OPENAI_API_KEY || "",

  // CORS helpers
  corsRaw: rawCors,        // original string from env (for logging)
  corsAllowAny,           // boolean: true when CORS_ORIGIN is "*"
  corsOrigins,            // array: when corsAllowAny === false

  // Convenience: a default client origin (useful locally)
  defaultClientOrigin: "http://localhost:5173",
};

export default config;
