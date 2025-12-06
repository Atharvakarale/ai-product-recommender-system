

"use client"

import { useState, useEffect } from "react"
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
} from "recharts"
import { getEventDistribution, getFeedbackStats, getEvents } from "../utils/api"
import {
  BarChart3,
  PieChartIcon,
  TrendingUp,
  LogOut,
  PlusCircle,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"]

export default function Admin() {
  const navigate = useNavigate()
  const [eventDistribution, setEventDistribution] = useState([])
  const [feedbackStats, setFeedbackStats] = useState([])
  const [recentEvents, setRecentEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const [events, feedback, recent] = await Promise.all([
        getEventDistribution(),
        getFeedbackStats(),
        getEvents({ limit: 20 }),
      ])
      setEventDistribution(events)
      setFeedbackStats(feedback)
      setRecentEvents(recent)
    } catch (error) {
      console.error("Error fetching analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  const transformEventData = () =>
    eventDistribution.map((e) => ({
      name: e._id.charAt(0).toUpperCase() + e._id.slice(1),
      value: e.count,
    }))

  // ✅ FIXED FEEDBACK LABELS
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
    }))

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Loading analytics...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Admin Dashboard
          </h1>

          <div className="flex items-center gap-3">
            {/* Add Product */}
            <button
              onClick={() => navigate("/admin/add-product")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              Add Product
            </button>

            {/* Back to Home */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Event Distribution */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Event Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transformEventData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Feedback Stats */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-primary" />
              Recommendation Feedback
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={transformFeedbackData()}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {transformFeedbackData().map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Recent Activity
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">User</th>
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Event Type</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.map((event) => (
                  <tr key={event._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{event.userId?.username || "—"}</td>
                    <td className="py-3 px-4">{event.productId?.name || "—"}</td>
                    <td className="py-3 px-4">{event.productId?.category || "—"}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          event.eventType === "purchase"
                            ? "bg-green-100 text-green-700"
                            : event.eventType === "cart"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {event.eventType}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {new Date(event.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
