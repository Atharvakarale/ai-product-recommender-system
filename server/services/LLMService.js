// LLMService.js – Gemini-powered explanations

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// ---------------------------------------------------------
// MAIN EXPLANATION GENERATOR
// ---------------------------------------------------------
async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    const prompt = `
You are an AI product recommendation engine. 
Generate a UNIQUE 2–3 sentence explanation for WHY this product is recommended 
to this user based on the scoring factors.

Avoid generic text like "matches your interest". Be specific.

USER PROFILE SUMMARY:
${userSummary}

PRODUCT DETAILS:
Name: ${product.name}
Category: ${product.category}
Price: $${product.price}
Description: ${product.description}
Brand: ${product.brand}

SCORING FACTORS (0–1 scale):
- Category Match: ${factors.categorySimilarity}
- Behavior Score: ${factors.behaviorScore}
- Popularity Score: ${factors.popularityScore}
- Recency Score: ${factors.recencyScore}

CONFIDENCE LEVEL: ${confidence}

Generate:
1. A friendly natural explanation.
2. Mention at least *one specific factor* influencing the recommendation.
3. Do NOT repeat the same explanation for different products.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response.trim();
  } catch (error) {
    console.error("Gemini LLM error:", error);

    return `This product is recommended based on your interests, price range, and browsing activity. (Fallback explanation)`;
  }
}

export default {
  generateExplanation,
};
