

"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUsers } from "../utils/api"
import { Users, LogIn } from "lucide-react"

export default function UserSelect({ onSelectUser }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = () => {
    if (selectedUser) {
      onSelectUser(selectedUser)       // Save userId to App.jsx
      navigate("/dashboard")           // ✅ Redirect to dashboard
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-primary p-3 rounded-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-foreground mb-2">Product Recommender</h1>
        <p className="text-center text-muted mb-6">Select a user to view personalized recommendations</p>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-muted">Loading users...</div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-red-600">No users found. Please seed the database first.</div>
          ) : (
            <>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a user...</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.username} ({user.email})
                  </option>
                ))}
              </select>

              <button
                onClick={handleSelect}
                disabled={!selectedUser}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark 
                           disabled:bg-gray-300 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <LogIn className="w-5 h-5" />
                View Recommendations
              </button>
            </>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <a href="/admin" className="text-center block text-primary hover:underline text-sm">
            View Analytics Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
