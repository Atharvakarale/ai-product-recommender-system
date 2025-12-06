

"use client";

import { LogOut, Home, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecommendationList from "../components/RecommendationList";

export default function Dashboard({ userId, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              AI Product Recommender
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-600" />
            Personalized Recommendations
          </h2>

          <p className="text-muted">
            Products selected using your preferences, activity history, ratings,
            and overall popularity.
          </p>
        </div>

        {/* Explainability Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800">
          💡 <strong>Why these products?</strong>  
          Each recommendation includes a short explanation explaining how it
          matches your interests. New users see trending and highly-rated items.
        </div>

        {/* Recommendations */}
        <RecommendationList userId={userId} />
      </div>
    </div>
  );
}
