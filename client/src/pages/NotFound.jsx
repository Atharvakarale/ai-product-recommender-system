"use client"

import { useNavigate } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-6">Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors mx-auto"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  )
}
