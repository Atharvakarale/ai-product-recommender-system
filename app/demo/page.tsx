"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react"
import Link from "next/link"

// Mock demo data - in production, this would call the actual API
const DEMO_USERS = [
  { id: "1", name: "Tech Enthusiast", email: "tech@example.com", category: "Electronics" },
  { id: "2", name: "Fashion Lover", email: "fashion@example.com", category: "Fashion" },
  { id: "3", name: "Home Chef", email: "chef@example.com", category: "Home & Kitchen" },
]

const DEMO_PRODUCTS = {
  "1": [
    {
      id: "p1",
      name: 'Pro Laptop 15"',
      price: 1299,
      category: "Electronics",
      rating: 4.8,
      score: 0.92,
      explanation:
        "This laptop matches your preference for high-performance electronics and falls within your typical price range.",
    },
    {
      id: "p2",
      name: "Gaming Laptop RTX",
      price: 2499,
      category: "Electronics",
      rating: 4.9,
      score: 0.88,
      explanation:
        "Based on your recent interest in premium tech products, this high-end gaming laptop is a perfect fit.",
    },
  ],
  "2": [
    {
      id: "p3",
      name: "Designer T-Shirt",
      price: 79,
      category: "Fashion",
      rating: 4.6,
      score: 0.85,
      explanation:
        "Your browsing history shows interest in luxury fashion items. This designer piece matches your style.",
    },
    {
      id: "p4",
      name: "Winter Jacket",
      price: 199,
      category: "Fashion",
      rating: 4.7,
      score: 0.89,
      explanation: "Popular seasonal item with excellent ratings. Aligns with your fashion category preferences.",
    },
  ],
  "3": [
    {
      id: "p5",
      name: "Stainless Steel Cookware",
      price: 249,
      category: "Home & Kitchen",
      rating: 4.6,
      score: 0.87,
      explanation:
        "Professional-grade cookware for home chefs. Your activity shows consistent interest in kitchen products.",
    },
    {
      id: "p6",
      name: "Coffee Maker Pro",
      price: 199,
      category: "Home & Kitchen",
      rating: 4.8,
      score: 0.91,
      explanation: "Premium coffee maker matching your interest in quality kitchen appliances.",
    },
  ],
}

export default function DemoPage() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (selectedUser) {
      setRecommendations(DEMO_PRODUCTS[selectedUser as keyof typeof DEMO_PRODUCTS] || [])
      setFeedback({})
    }
  }, [selectedUser])

  const handleFeedback = (productId: string, reaction: string) => {
    setFeedback({ ...feedback, [productId]: reaction })
  }

  const user = DEMO_USERS.find((u) => u.id === selectedUser)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-75">
            <Home className="w-5 h-5 text-slate-600" />
            <span className="text-sm text-slate-600">Back Home</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Interactive Demo</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Select a User Profile</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {DEMO_USERS.map((user) => (
              <button
                key={user.id}
                onClick={() => setSelectedUser(user.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedUser === user.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <h3 className="font-semibold text-slate-900">{user.name}</h3>
                <p className="text-sm text-slate-600">{user.email}</p>
                <p className="text-xs text-slate-500 mt-2">Interested in: {user.category}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {selectedUser && (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Personalized Recommendations for {user?.name}
            </h2>
            <div className="space-y-4">
              {recommendations.map((product) => (
                <Card key={product.id} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {product.category} • ${product.price}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">
                          Score: {(product.score * 100).toFixed(0)}%
                        </div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">★ {product.rating}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-700 flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        {product.explanation}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={feedback[product.id] === "up" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleFeedback(product.id, "up")}
                        className="flex items-center gap-1"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        Relevant
                      </Button>
                      <Button
                        variant={feedback[product.id] === "down" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleFeedback(product.id, "down")}
                        className="flex items-center gap-1"
                      >
                        <ThumbsDown className="w-4 h-4" />
                        Not Relevant
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!selectedUser && (
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="py-12 text-center">
              <p className="text-slate-600">Select a user profile above to see personalized recommendations</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
