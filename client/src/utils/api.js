import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Users
export const getUsers = async () => {
  const { data } = await apiClient.get("/users")
  return data
}

export const getUser = async (userId) => {
  const { data } = await apiClient.get(`/users/${userId}`)
  return data
}

// Products
export const getProducts = async (filters = {}) => {
  const { data } = await apiClient.get("/products", { params: filters })
  return data
}

export const getProduct = async (productId) => {
  const { data } = await apiClient.get(`/products/${productId}`)
  return data
}

export const createProduct = async (productData) => {
  const { data } = await apiClient.post("/products", productData)
  return data
}

// Events
export const logEvent = async (userId, productId, eventType) => {
  const { data } = await apiClient.post("/events", {
    userId,
    productId,
    eventType,
  })
  return data
}

export const getEvents = async (filters = {}) => {
  const { data } = await apiClient.get("/events", { params: filters })
  return data
}

export const getEventDistribution = async () => {
  const { data } = await apiClient.get("/events/analytics/distribution")
  return data
}

// Recommendations
export const getRecommendations = async (userId) => {
  const { data } = await apiClient.get(`/recommend/${userId}`)
  return data
}

// Feedback
export const sendFeedback = async (recommendationId, reaction, comment = "") => {
  const { data } = await apiClient.post("/feedback", {
    recommendationId,
    reaction,
    comment,
  })
  return data
}

export const getFeedbackStats = async () => {
  const { data } = await apiClient.get("/feedback/stats/all")
  return data
}
