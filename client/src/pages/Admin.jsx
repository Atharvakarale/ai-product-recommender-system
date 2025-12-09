

"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import {
  BarChart3,
  PieChartIcon,
  TrendingUp,
  LogOut,
  PlusCircle,
  Activity,
  Users,
  ShoppingCart,
  Eye,
} from "lucide-react";

import { getEventDistribution, getFeedbackStats, getEvents } from "../utils/api";
import { useNavigate } from "react-router-dom";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function Admin() {
  const navigate = useNavigate();

  const [eventDistribution, setEventDistribution] = useState([]);
  const [feedbackStats, setFeedbackStats] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const [events, feedback, recent] = await Promise.all([
        getEventDistribution(),
        getFeedbackStats(),
        getEvents({ limit: 20 }),
      ]);

      setEventDistribution(events);
      setFeedbackStats(feedback);
      setRecentEvents(recent);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const transformEventData = () =>
    eventDistribution.map((e) => ({
      name: e._id.charAt(0).toUpperCase() + e._id.slice(1),
      value: e.count,
    }));

  const transformFeedbackData = () =>
    feedbackStats.map((f) => ({
      name:
        f._id === "up"
          ? "Relevant"
          : f._id === "down"
          ? "Not Relevant"
          : f._id === "skip"
          ? "Skipped"
          : "Other",
      value: f.count,
    }));

  const totalEvents = eventDistribution.reduce((sum, e) => sum + e.count, 0);
  const totalFeedback = feedbackStats.reduce((sum, f) => sum + f.count, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-medium text-white/80">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-30 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/25">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-sm text-white/50">Analytics & Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/add-product")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95"
            >
              <PlusCircle className="w-5 h-5" />
              Add Product
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-all duration-300 active:scale-95"
            >
              <LogOut className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <Activity className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-white/60 text-sm font-medium">Total Events</span>
            </div>
            <p className="text-3xl font-bold text-white">{totalEvents.toLocaleString()}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-white/60 text-sm font-medium">Feedback</span>
            </div>
            <p className="text-3xl font-bold text-white">{totalFeedback.toLocaleString()}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <ShoppingCart className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-white/60 text-sm font-medium">Recent</span>
            </div>
            <p className="text-3xl font-bold text-white">{recentEvents.length}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-pink-500/20">
                <Eye className="w-5 h-5 text-pink-400" />
              </div>
              <span className="text-white/60 text-sm font-medium">Categories</span>
            </div>
            <p className="text-3xl font-bold text-white">{eventDistribution.length}</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Event Distribution Card */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
              </div>
              Event Distribution
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transformEventData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15,15,35,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Feedback Stats Card */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <PieChartIcon className="w-5 h-5 text-purple-400" />
              </div>
              Recommendation Feedback
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={transformFeedbackData()}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {transformFeedbackData().map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15,15,35,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Legend
                  wrapperStyle={{ color: "rgba(255,255,255,0.7)" }}
                  formatter={(value) => <span style={{ color: "rgba(255,255,255,0.7)" }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            Recent Activity
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-medium text-white/60">User</th>
                  <th className="text-left py-4 px-4 font-medium text-white/60">Product</th>
                  <th className="text-left py-4 px-4 font-medium text-white/60">Category</th>
                  <th className="text-left py-4 px-4 font-medium text-white/60">Event Type</th>
                  <th className="text-left py-4 px-4 font-medium text-white/60">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentEvents.map((event) => (
                  <tr
                    key={event._id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-white/80">{event.userId?.username || "—"}</td>
                    <td className="py-4 px-4 text-white/80">{event.productId?.name || "—"}</td>
                    <td className="py-4 px-4 text-white/80">{event.productId?.category || "—"}</td>

                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          event.eventType === "purchase"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : event.eventType === "cart"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                        }`}
                      >
                        {event.eventType}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-white/50">
                      {new Date(event.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}