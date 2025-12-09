// LLMService.js – Gemini-powered explanations

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// USE a valid Gemini model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",   // <<< FIXED MODEL NAME
});

// ---------------------------------------------------------
// MAIN EXPLANATION GENERATOR
// ---------------------------------------------------------
async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const prompt = `
You are an AI product recommendation engine.
Generate a UNIQUE, human-like 2–3 sentence explanation for WHY this product 
is recommended to the user based on scoring factors.

Be specific. Do NOT repeat generic phrases.

USER PROFILE:
${userSummary}

PRODUCT:
Name: ${product.name}
Category: ${product.category}
Price: $${product.price}
Description: ${product.description}

SCORING FACTORS:
• Category Match = ${factors.categorySimilarity}
• Behavior Score = ${factors.behaviorScore}
• Popularity Score = ${factors.popularityScore}
• Recency Score = ${factors.recencyScore}

CONFIDENCE: ${confidence}

Write a natural explanation in friendly tone.
Highlight at least ONE specific factor.
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response.trim();
  } catch (error) {
    console.error("Gemini LLM error:", error);
    return "This product was recommended using your browsing patterns, category interests, and popularity trends. (Fallback Explanation)";
  }
}

export default {
  generateExplanation,
};
