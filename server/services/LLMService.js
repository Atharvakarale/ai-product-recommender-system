// LLMService.js
// REAL OpenAI explanation generator (NO MOCK FALLBACK)

import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ Missing OPENAI_API_KEY in environment variables.");
  throw new Error("OPENAI_API_KEY is required to run LLM explanations.");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ---------------------------------------------------------
// ALWAYS USE REAL OPENAI — NO FALLBACK
// ---------------------------------------------------------
async function generateExplanation(userSummary, product, factors, confidence) {

  const prompt = `
You are an AI assistant that explains WHY a product is recommended.

USER PROFILE:
${userSummary}

PRODUCT DETAILS:
Name: ${product.name}
Category: ${product.category}
Price: $${product.price}

MATCHING FACTORS:
${JSON.stringify(factors, null, 2)}

CONFIDENCE LEVEL: ${confidence}

TASK:
Write a friendly, natural, concise 1–2 sentence explanation describing
*why this product is a good match* for the user, based on their preferences,
behavior, product popularity, rating, or relevance.

Do NOT repeat product details already given.
Do NOT summarize—the output must be a clean explanation only.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 80,
      temperature: 0.6,
    });

    const explanation = response.choices?.[0]?.message?.content?.trim();

    if (!explanation) {
      throw new Error("LLM returned an empty explanation");
    }

    return explanation;

  } catch (err) {
    console.error("❌ OpenAI LLM Error:", err);
    throw err; // NO FALLBACK → break so you know it failed
  }
}

// ---------------------------------------------------------
// EXPORT CORRECTLY
// ---------------------------------------------------------
export default {
  generateExplanation,
};
