// LLMService.js — Gemini Version
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ Missing GEMINI_API_KEY in .env file");
}

const genAI = new GoogleGenerativeAI(apiKey);

// ---------------------------------------------------------
// MAIN FUNCTION — Calls Gemini 1.5 Flash
// ---------------------------------------------------------
async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
User Profile Summary:
${userSummary}

Product:
${product.name} — Category: ${product.category}, Price: $${product.price}

Scoring Factors (0–1 scale):
${JSON.stringify(factors, null, 2)}

Confidence Level: ${confidence}

TASK:
Write a friendly, simple, 1–2 sentence explanation of WHY this product was recommended for the user.
Avoid technical details, make it personalized, and reference the user’s interests.
`;

    const result = await model.generateContent(prompt);
    const explanation = result.response.text().trim();

    return explanation || "Recommended because it matches your interests.";
  } catch (error) {
    console.error("Gemini LLM error:", error);
    return "Recommended because it matches your interests.";
  }
}

export default {
  generateExplanation,
};
