// import Product from "../models/Product.js";
// import Event from "../models/Event.js";
// import LLMService from "./LLMService.js";
// import RecommendationLog from "../models/RecommendationLog.js";

// const getRecommendations = async (user) => {
//   try {
//     const userEvents = await Event.find({ userId: user._id })
//       .populate("productId")
//       .sort({ createdAt: -1 })
//       .limit(50);

//     const viewed = new Set(userEvents.map((e) => e.productId._id.toString()));
//     const categoryScores = {};
//     let weightSum = 0;

//     userEvents.forEach((event) => {
//       const cat = event.productId.category;
//       categoryScores[cat] = (categoryScores[cat] || 0) + event.weight;
//       weightSum += event.weight;
//     });

//     const candidates = await Product.find({
//       _id: { $nin: Array.from(viewed) },
//       price: { $gte: user.priceMin, $lte: user.priceMax },
//     }).limit(100);

//     const scored = candidates.map((product) => {
//       const factors = calculateFactors(product, categoryScores, userEvents);
//       const totalScore =
//         0.4 * factors.categorySimilarity +
//         0.3 * factors.behaviorScore +
//         0.2 * factors.popularityScore +
//         0.1 * factors.recencyScore;

//       return { product, factors, totalScore };
//     });

//     const top = scored.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);

//     const withExplanations = await Promise.all(
//       top.map(async (rec) => {
//         const confidence =
//           rec.totalScore > 0.75
//             ? "High"
//             : rec.totalScore > 0.45
//             ? "Medium"
//             : "Low";

//         const userSummary = buildUserSummary(categoryScores);

//         // 💡 FIXED — This now WORKS permanently
//         const explanation = await LLMService.generateExplanation(
//           userSummary,
//           rec.product,
//           rec.factors,
//           confidence
//         );

//         await RecommendationLog.create({
//           userId: user._id,
//           productId: rec.product._id,
//           totalScore: rec.totalScore,
//           factors: rec.factors,
//           llmExplanation: explanation,
//           confidence,
//         });

//         return { ...rec, explanation, confidence };
//       })
//     );

//     return withExplanations;
//   } catch (err) {
//     console.error("Recommendation engine error:", err);
//     throw err;
//   }
// };

// function calculateFactors(product, categoryScores, userEvents) {
//   const total = Object.values(categoryScores).reduce((a, b) => a + b, 0) || 1;

//   const categorySimilarity = (categoryScores[product.category] || 0) / total;

//   const recentViews = userEvents.filter(
//     (e) => e.productId.category === product.category && e.eventType === "view"
//   ).length;

//   const behaviorScore = Math.min(recentViews / 10, 1);
//   const popularityScore = product.popularityScore / 100;
//   const recencyScore = Math.max(
//     1 - (Date.now() - product.createdAt) / (90 * 24 * 60 * 60 * 1000),
//     0
//   );

//   return {
//     categorySimilarity,
//     behaviorScore,
//     popularityScore,
//     recencyScore,
//   };
// }

// function buildUserSummary(scores) {
//   const topCats = Object.entries(scores)
//     .sort(([, a], [, b]) => b - a)
//     .slice(0, 3)
//     .map(([c]) => c);

//   if (topCats.length === 0) return "You browse many different product types.";

//   return `You frequently explore ${topCats.join(", ")} products.`;
// }

// export default { getRecommendations };


import Product from "../models/Product.js";
import Event from "../models/Event.js";
import RecommendationLog from "../models/RecommendationLog.js";
import LLMService from "./LLMService.js";

const getRecommendations = async (user) => {
  try {
    const userEvents = await Event.find({ userId: user._id })
      .populate("productId")
      .sort({ createdAt: -1 })
      .limit(50);

    const viewed = new Set(userEvents.map((e) => e.productId._id.toString()));
    const categoryScores = {};
    let weightSum = 0;

    // Build user category profile
    userEvents.forEach((event) => {
      const cat = event.productId.category;
      categoryScores[cat] = (categoryScores[cat] || 0) + event.weight;
      weightSum += event.weight;
    });

    // Fetch candidate products
    const candidates = await Product.find({
      _id: { $nin: Array.from(viewed) },
      price: { $gte: user.priceMin, $lte: user.priceMax },
    }).limit(100);

    // Score products
    const scored = candidates.map((product) => {
      const factors = calculateFactors(product, categoryScores, userEvents);
      const totalScore =
        0.4 * factors.categorySimilarity +
        0.3 * factors.behaviorScore +
        0.2 * factors.popularityScore +
        0.1 * factors.recencyScore;

      return { product, factors, totalScore };
    });

    // Top 10 recommendations
    const top = scored.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);

    // Generate explanations
    const finalResults = await Promise.all(
      top.map(async (rec) => {
        const confidence =
          rec.totalScore > 0.75
            ? "High"
            : rec.totalScore > 0.45
            ? "Medium"
            : "Low";

        const userSummary = buildUserSummary(categoryScores);

        // -----------------------------------------------------
        // CACHE LAYER (Prevents repeated Gemini API calls)
        // -----------------------------------------------------
        const existing = await RecommendationLog.findOne({
          userId: user._id,
          productId: rec.product._id,
        });

        let explanation;

        if (existing && existing.llmExplanation) {
          console.log("🔵 Using cached explanation");
          explanation = existing.llmExplanation;
        } else {
          console.log("🟢 Generating NEW AI explanation");

          explanation = await LLMService.generateExplanation(
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
        }

        return { ...rec, explanation, confidence };
      })
    );

    return finalResults;
  } catch (err) {
    console.error("Recommendation engine error:", err);
    throw err;
  }
};

function calculateFactors(product, categoryScores, userEvents) {
  const total = Object.values(categoryScores).reduce((a, b) => a + b, 0) || 1;

  const categorySimilarity = (categoryScores[product.category] || 0) / total;

  const recentViews = userEvents.filter(
    (e) => e.productId.category === product.category && e.eventType === "view"
  ).length;

  const behaviorScore = Math.min(recentViews / 10, 1);
  const popularityScore = product.popularityScore / 100;
  const recencyScore = Math.max(
    1 - (Date.now() - product.createdAt) / (90 * 24 * 60 * 60 * 1000),
    0
  );

  return {
    categorySimilarity,
    behaviorScore,
    popularityScore,
    recencyScore,
  };
}

function buildUserSummary(scores) {
  const topCats = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([c]) => c);

  return topCats.length
    ? `You frequently explore ${topCats.join(", ")} products.`
    : "You explore a wide variety of product categories.";
}

export default { getRecommendations };
