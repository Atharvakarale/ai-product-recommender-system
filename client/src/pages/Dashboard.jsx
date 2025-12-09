

"use client";

import { LogOut, Home, Sparkles, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecommendationList from "../components/RecommendationList";

export default function Dashboard({ userId, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-30 border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/25">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                AI Product Recommender
              </h1>
              <p className="text-xs text-white/50">Personalized for you</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 active:scale-95"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            Personalized Recommendations
          </h2>

          <p className="text-white/50 ml-12">
            Products selected using your preferences, activity history, ratings,
            and overall popularity.
          </p>
        </div>

        {/* Explainability Banner */}
        <div className="mb-8 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl px-5 py-4 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20 mt-0.5">
            <Lightbulb className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-sm text-white/80">
              <strong className="text-white">Why these products?</strong>{" "}
              Each recommendation includes a short explanation explaining how it
              matches your interests. New users see trending and highly-rated items.
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <RecommendationList userId={userId} />
      </main>
    </div>
  );
}
