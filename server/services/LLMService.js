// LLMService.js – Gemini-powered explanations

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Use the correct Gemini model (gemini-pro is deprecated!)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// MUST use 1.5 models (Flash or Pro)
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",   // <<< FIX — STOP USING "gemini-pro"
});

// ---------------------------------------------------------
// MAIN EXPLANATION FUNCTION
// ---------------------------------------------------------
export async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const prompt = `
You are an AI recommender system.
Generate a unique, human-like 2–3 sentence explanation for WHY this product 
is recommended to this user, based on the scoring factors.

Be specific and avoid generic phrases.

USER SUMMARY:
${userSummary}

PRODUCT:
Name: ${product.name}
Category: ${product.category}
Price: $${product.price}
Description: ${product.description}

FACTORS:
- Category Match: ${factors.categorySimilarity}
- Behavior Match: ${factors.behaviorScore}
- Popularity: ${factors.popularityScore}
- Recency: ${factors.recencyScore}

CONFIDENCE: ${confidence}

Write a friendly natural explanation.
Reference at least ONE factor from above.
`;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    return text.trim();
  } catch (error) {
    console.error("Gemini LLM error:", error);

    return (
      "This recommendation was generated based on your browsing behavior, " +
      "category interests, and product popularity. (Fallback explanation)"
    );
  }
}

export default { generateExplanation };
