

"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUsers } from "../utils/api"
import { Users, LogIn, BarChart3, Sparkles } from "lucide-react"

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
      onSelectUser(selectedUser)
      navigate("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/25">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-400" />
          Product Recommender
        </h1>
        <p className="text-center text-white/50 mb-8">Select a user to view personalized recommendations</p>

        <div className="space-y-5">
          {loading ? (
            <div className="text-center py-8">
              <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-white/50">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 px-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-400">No users found. Please seed the database first.</p>
            </div>
          ) : (
            <>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '20px',
                }}
              >
                <option value="" className="bg-slate-800 text-white">Select a user...</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id} className="bg-slate-800 text-white">
                    {user.username} ({user.email})
                  </option>
                ))}
              </select>

              <button
                onClick={handleSelect}
                disabled={!selectedUser}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold
                           disabled:opacity-40 disabled:cursor-not-allowed
                           hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 active:scale-[0.98]
                           flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                View Recommendations
              </button>
            </>
          )}
        </div>

        {/* Admin Link */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <a 
            href="/admin" 
            className="flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors text-sm group"
          >
            <BarChart3 className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
            View Analytics Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
