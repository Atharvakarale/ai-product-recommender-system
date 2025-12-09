// LLMService.js
// Generates natural-language explanations for recommended products

// ---------------------------------------------------------
// MAIN EXPLANATION FUNCTION
// ---------------------------------------------------------
async function generateExplanation(userSummary, product, factors, confidence) {
  try {
    return generateMockExplanation(userSummary, product, factors, confidence);
  } catch (err) {
    console.error("LLMService error:", err);
    return generateMockExplanation(userSummary, product, factors, confidence);
  }
}

// ---------------------------------------------------------
// MOCK EXPLANATION (ALWAYS SAFE)
// ---------------------------------------------------------
function generateMockExplanation(userSummary, product, factors, confidence) {
  const { categorySimilarity, behaviorScore, popularityScore, recencyScore } = factors;

  const reasons = [];

  if (categorySimilarity > 0.6)
    reasons.push("matches your preferred categories");

  if (behaviorScore > 0.4)
    reasons.push("aligns with products you've interacted with recently");

  if (popularityScore > 0.7)
    reasons.push("is a popular and well-liked product");

  if (recencyScore > 0.5)
    reasons.push("is one of the more recent products available");

  const reasonText =
    reasons.length > 0 ? reasons.join(" and ") : "fits your current shopping patterns";

  return `We recommend "${product.name}" because it ${reasonText}. This ${product.category} item is a strong match for your interests. (Confidence: ${confidence})`;
}

// ---------------------------------------------------------
// EXPORT CORRECTLY
// ---------------------------------------------------------
export default {
  generateExplanation,
};
