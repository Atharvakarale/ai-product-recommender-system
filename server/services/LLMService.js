// LLMService.js – Gemini 2.5 Flash explanations

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize client with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use officially supported Gemini 2.5 Flash model
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"   // ✅ correct model name
});

// ---------------------------------------------------------
// MAIN FUNCTION
// ---------------------------------------------------------
export async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const prompt = `
You are an AI product recommendation engine.
Generate a unique 2–3 sentence explanation for WHY this product is recommended.

Avoid generic phrases like “matches your interests.”
Be specific. Reference at least one numeric factor.

USER SUMMARY:
${userSummary}

PRODUCT DETAILS:
- Name: ${product.name}
- Category: ${product.category}
- Price: $${product.price}
- Description: ${product.description}

SCORING FACTORS (0–1 scale):
- Category Match: ${factors.categorySimilarity}
- Behavior Match: ${factors.behaviorScore}
- Popularity: ${factors.popularityScore}
- Recency: ${factors.recencyScore}

CONFIDENCE LEVEL: ${confidence}
`;

    // Gemini v1 content API format (required for 2.5 models)
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = response.response.text();

    if (!text || text.trim().length === 0) {
      throw new Error("Gemini returned empty response");
    }

    return text.trim();
  } catch (error) {
    console.error("Gemini LLM error:", error);

    // fallback
    return (
      "This product is recommended based on a combination of your browsing behavior, " +
      "category preferences, and product popularity. (Fallback explanation)"
    );
  }
}

export default { generateExplanation };
