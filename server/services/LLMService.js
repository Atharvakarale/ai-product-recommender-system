// LLMService.js – Gemini-powered explanations

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use stable text model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ---------------------------------------------------------
// MAIN FUNCTION
// ---------------------------------------------------------
export async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const prompt = `
You are an AI recommender system.
Generate a unique, non-repetitive 2–3 sentence explanation for WHY this product is recommended.

Be specific. Reference at least ONE of the numeric factors.

USER SUMMARY:
${userSummary}

PRODUCT:
- Name: ${product.name}
- Category: ${product.category}
- Price: $${product.price}
- Description: ${product.description}

FACTORS (0–1 scale):
- Category Match: ${factors.categorySimilarity}
- Behavior Match: ${factors.behaviorScore}
- Popularity: ${factors.popularityScore}
- Recency: ${factors.recencyScore}

CONFIDENCE: ${confidence}
`;

    // ⛔ Old syntax (does NOT work reliably):
    // const result = await model.generateContent(prompt);

    // ✅ Correct updated Gemini syntax
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = result.response.text();

    if (!text || text.trim().length === 0) throw new Error("Empty response");

    return text.trim();
  } catch (error) {
    console.error("Gemini LLM error:", error);
    return "This recommendation was generated using your browsing behavior, category interests, and product popularity. (Fallback explanation)";
  }
}

export default { generateExplanation };
