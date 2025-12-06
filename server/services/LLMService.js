

const generateExplanation = async (
  userSummary,
  product,
  factors,
  confidence
) => {
  const useRealOpenAI =
    process.env.OPENAI_API_KEY &&
    process.env.OPENAI_API_KEY !== "sk-demo-key";

  if (useRealOpenAI) {
    return generateWithOpenAI(
      userSummary,
      product,
      factors,
      confidence
    );
  }

  return generateMockExplanation(
    userSummary,
    product,
    factors,
    confidence
  );
};

const generateWithOpenAI = async (
  userSummary,
  product,
  factors,
  confidence
) => {
  try {
    const prompt = `
User Profile:
${userSummary}

Product:
${product.name} (${product.category}) - $${product.price}

Scoring Factors:
${JSON.stringify(factors, null, 2)}

Confidence Level: ${confidence}

Generate a 1–2 sentence natural explanation explaining *why* this product fits the user.
`;

    // 🔒 Replace with actual OpenAI call when ready
    return generateMockExplanation(
      userSummary,
      product,
      factors,
      confidence
    );
  } catch (error) {
    console.error("LLM error:", error);
    return generateMockExplanation(
      userSummary,
      product,
      factors,
      confidence
    );
  }
};

const generateMockExplanation = (
  userSummary,
  product,
  factors,
  confidence
) => {
  const reasons = [];

  if (factors.categorySimilarity > 0.4)
    reasons.push("matches your preferred category");

  if (factors.behaviorScore > 0.3)
    reasons.push("is similar to products you viewed recently");

  if (factors.ratingScore > 0.85)
    reasons.push("is highly rated by users");

  if (factors.popularityScore > 0.7)
    reasons.push("is a popular choice");

  const reasonText =
    reasons.length > 0
      ? reasons.join(" and ")
      : "fits well with your current interests";

  return `We recommended "${product.name}" because it ${reasonText}. This ${product.category} product offers great value within your budget. (${confidence} confidence)`;
};

export default { generateExplanation };
