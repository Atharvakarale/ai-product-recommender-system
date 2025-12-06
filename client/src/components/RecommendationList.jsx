


"use client";

import { useEffect, useState } from "react";
import { getRecommendations, sendFeedback, logEvent } from "../utils/api";
import ProductCard from "./ProductCard";
import ExplanationCard from "./ExplanationCard";
import FeedbackButtons from "./FeedbackButtons";

export default function RecommendationList({ userId }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommendations();
  }, [userId]);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      const data = await getRecommendations(userId);
      setRecommendations(data);
    } catch (err) {
      setError(err.message || "Failed to load recommendations");
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = async (logId, reaction) => {
    try {
      await sendFeedback(logId, reaction);
    } catch (err) {
      console.error("Feedback error:", err);
    }
  };

  const handleProductView = async (productId) => {
    try {
      await logEvent(userId, productId, "view");
    } catch (err) {
      console.error("Error logging view:", err);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12 text-muted">
        Loading personalized recommendations…
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error: {error}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center py-12 text-muted">
        No recommendations yet. Start browsing products to personalize suggestions!
      </div>
    );
  }

  const isColdStart = recommendations.every(
    (r) => r.factors?.behaviorScore === 0
  );

  return (
    <div className="space-y-8">
      {isColdStart && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800">
          👋 Showing popular & highly rated products until we learn more about
          your preferences.
        </div>
      )}

      {recommendations.map((rec, index) => (
        <div
          key={rec.product._id}
          className="bg-white rounded-xl border border-border p-6"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Product */}
            <div className="md:col-span-2">
              <ProductCard
                product={rec.product}
                rank={index + 1}
                confidence={rec.confidence}
                onViewClick={() =>
                  handleProductView(rec.product._id)
                }
              />
            </div>

            {/* Explanation + Feedback */}
            <div className="space-y-4">
              <ExplanationCard
                explanation={rec.explanation}
                confidence={rec.confidence}
              />

              {/* Score Breakdown */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">
                  Score Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <ScoreRow label="Category Match" value={rec.factors.categorySimilarity} />
                  <ScoreRow label="Behavior" value={rec.factors.behaviorScore} />
                  <ScoreRow label="Popularity" value={rec.factors.popularityScore} />
                  <ScoreRow label="Recency" value={rec.factors.recencyScore} />
                </div>
              </div>

              <FeedbackButtons
                onFeedback={(reaction) =>
                  handleFeedback(rec.logId, reaction)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const ScoreRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-muted">{label}:</span>
    <span className="font-medium">
      {(value * 100).toFixed(0)}%
    </span>
  </div>
);
