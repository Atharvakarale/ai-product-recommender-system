
import Product from "../models/Product.js";
import Event from "../models/Event.js";
import LLMService from "./LLMService.js";
import RecommendationLog from "../models/RecommendationLog.js";

const getRecommendations = async (user) => {
  try {
    // 1️⃣ Fetch user behavior
    const userEvents = await Event.find({ userId: user._id })
      .populate("productId")
      .sort({ createdAt: -1 })
      .limit(50);

    const isColdStart = userEvents.length === 0;

    // 2️⃣ COLD START STRATEGY
    if (isColdStart) {
      const popularProducts = await Product.find({
        price: { $gte: user.priceMin, $lte: user.priceMax },
      })
        .sort({ popularityScore: -1, rating: -1 })
        .limit(10);

      return popularProducts.map((product) => ({
        product,
        totalScore: 0.5,
        factors: {
          categorySimilarity: 0,
          behaviorScore: 0,
          popularityScore: product.popularityScore / 100,
          ratingScore: product.rating / 5,
          recencyScore: 0.5,
        },
        explanation: "Recommended because this product is popular and highly rated.",
        confidence: "Medium",
      }));
    }

    // 3️⃣ Build user profile
    const viewedProductIds = new Set(
      userEvents.map((e) => e.productId._id.toString())
    );

    const userCategoryScores = {};
    let totalEventWeight = 0;

    userEvents.forEach((event) => {
      const category = event.productId.category;
      const weight =
        event.eventType === "purchase"
          ? 3
          : event.eventType === "cart"
          ? 2
          : 1;

      userCategoryScores[category] =
        (userCategoryScores[category] || 0) + weight;
      totalEventWeight += weight;
    });

    // 4️⃣ Fetch candidate products
    const candidates = await Product.find({
      _id: { $nin: Array.from(viewedProductIds) },
      price: { $gte: user.priceMin, $lte: user.priceMax },
    }).limit(100);

    // 5️⃣ Score products
    const recommendations = candidates.map((product) => {
      const factors = calculateFactors(
        product,
        user,
        userCategoryScores,
        totalEventWeight,
        userEvents
      );

      const totalScore =
        0.35 * factors.categorySimilarity +
        0.25 * factors.behaviorScore +
        0.2 * factors.popularityScore +
        0.1 * factors.ratingScore +
        0.1 * factors.recencyScore;

      return {
        product,
        totalScore,
        factors,
      };
    });

    // 6️⃣ Pick top results
    const top = recommendations
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 10);

    // 7️⃣ Explanation + logging
    const withExplanations = await Promise.all(
      top.map(async (rec) => {
        const confidence =
          rec.totalScore > 0.75
            ? "High"
            : rec.totalScore > 0.45
            ? "Medium"
            : "Low";

        const userSummary = buildUserSummary(userCategoryScores);

        const explanation =
          await LLMService.generateExplanation(
            userSummary,
            rec.product,
            rec.factors,
            confidence
          );

        await RecommendationLog.create({
          userId: user._id,
          productId: rec.product._id,
          totalScore: rec.totalScore,
          factors: rec.factors,
          llmExplanation: explanation,
          confidence,
        });

        return {
          ...rec,
          explanation,
          confidence,
        };
      })
    );

    return withExplanations;
  } catch (error) {
    console.error("Recommendation engine error:", error);
    throw error;
  }
};

const calculateFactors = (
  product,
  user,
  userCategoryScores,
  totalEventWeight,
  userEvents
) => {
  // Category similarity (0–1)
  const totalCategoryScore =
    Object.values(userCategoryScores).reduce((a, b) => a + b, 0) || 1;

  const categorySimilarity =
    (userCategoryScores[product.category] || 0) / totalCategoryScore;

  // Behavior score
  const recentViews = userEvents.filter(
    (e) =>
      e.productId.category === product.category &&
      e.eventType === "view"
  ).length;

  const behaviorScore = Math.min(recentViews / 8, 1);

  // Popularity
  const popularityScore = product.popularityScore / 100;

  // Rating
  const ratingScore = product.rating / 5;

  // Recency
  const productAge = Date.now() - product.createdAt.getTime();
  const maxAge = 90 * 24 * 60 * 60 * 1000;
  const recencyScore = Math.max(1 - productAge / maxAge, 0);

  return {
    categorySimilarity,
    behaviorScore,
    popularityScore,
    ratingScore,
    recencyScore,
  };
};

const buildUserSummary = (categoryScores) => {
  const topCategories = Object.entries(categoryScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([cat]) => cat);

  return topCategories.length
    ? `You frequently explore ${topCategories.join(", ")} products.`
    : "You are exploring products across different categories.";
};

export default { getRecommendations };
