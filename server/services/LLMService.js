// LLMService.js

const generateExplanation = async (userSummary, product, factors, confidence) => {
  const useRealOpenAI =
    process.env.OPENAI_API_KEY &&
    process.env.OPENAI_API_KEY !== "sk-demo-key";

  if (useRealOpenAI) {
    return generateWithOpenAI(userSummary, product, factors, confidence);
  }

  return generateMockExplanation(userSummary, product, factors, confidence);
};

// ---------------------------------------------------------
// REAL OPENAI CALL (when enabled)
// ---------------------------------------------------------
const generateWithOpenAI = async (userSummary, product, factors, confidence) => {
  try {
    const prompt = `
User Profile:
${userSummary}

Product:
${product.name} (${product.category}) - $${product.price}

Scoring Factors:
${JSON.stringify(factors, null, 2)}

Confidence Level: ${confidence}

Generate a short 1–2 sentence explanation of *why* this product fits the user.
`;

    // 🧪 For now, still use mock explanation
    return generateMockExplanation(userSummary, product, factors, confidence);
  } catch (error) {
    console.error("LLM error:", error);
    return generateMockExplanation(userSummary, product, factors, confidence);
  }
};

// ---------------------------------------------------------
// MOCK EXPLANATION (default mode)
// ---------------------------------------------------------
const generateMockExplanation = (userSummary, product, factors, confidence) => {
  const reasons = [];

  if (factors.categorySimilarity > 0.4)
    reasons.push("matches your preferred shopping categories");

  if (factors.behaviorScore > 0.3)
    reasons.push("aligns with items you've interacted with recently");

  if (factors.popularityScore > 0.7)
    reasons.push("is a popular and well-liked product among users");

  if (factors.recencyScore > 0.5)
    reasons.push("is one of the newest and most updated items available");

  const reasonText =
    reasons.length > 0
      ? reasons.join(" and ")
      : "fits well with your interests and budget";

  return `We recommended "${product.name}" because it ${reasonText}. This ${product.category} item offers strong value based on your profile. (${confidence} confidence)`;
};

export default generateExplanation;
