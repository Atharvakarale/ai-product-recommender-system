

# 🚀 AI-Powered E-Commerce Product Recommender System

A full-stack AI-driven product recommendation system that analyzes user behavior and preferences to generate **personalized product suggestions**, complete with **LLM explanations**, confidence scores, and an **admin analytics dashboard**.

---

## 📌 Table of Contents

* [Overview](#overview)
* [Architecture](#architecture)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Recommendation Algorithm](#recommendation-algorithm)
* [Screenshots](#screenshots)
* [Getting Started](#getting-started)
* [API Endpoints](#api-endpoints)
* [Database Models](#database-models)
* [Environment Variables](#environment-variables)
* [Future Enhancements](#future-enhancements)
* [Troubleshooting](#troubleshooting)
* [License](#license)

---

# 📘 Overview

This project delivers an **end-to-end AI recommendation engine**, combining:

* ML-inspired scoring algorithms
* LLM-generated natural explanations
* Real-time analytics
* Fully responsive frontend
* Clean modular backend

Users receive **ranked product recommendations** along with **why** the product was suggested.

Admins get a **live analytics dashboard** with charts for user events and feedback.

---

# 🏗 Architecture

```
Frontend (React + Vite + Tailwind)
│
├── UserSelect Page
├── Recommendation Dashboard
└── Admin Analytics Dashboard
       │
       ▼
Backend (Node + Express)
│
├── Routes
│   ├── /products
│   ├── /users
│   ├── /events
│   ├── /feedback
│   └── /recommend
│
├── Services
│   ├── RecommendationEngine (scoring)
│   └── LLMService (OpenAI or mock)
│
└── Models (MongoDB)
    ├── User
    ├── Product
    ├── Event
    ├── Feedback
    └── RecommendationLog
```

---

# 🧰 Tech Stack

### **Frontend**

* React 18
* Vite
* TailwindCSS 4
* shadcn/ui
* Axios
* Recharts
* React Router

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* OpenAI API (optional)
* CORS

### **Deployment**

* Frontend → Vercel
* Backend → Railway / Render
* Database → MongoDB Atlas

---

# ⭐ Features

### 👤 User-Facing

* AI-powered personalized product recommendations
* LLM-generated explanations
* Confidence scores (High / Medium / Low)
* Score breakdown per recommendation
* “Relevant / Not Relevant / Skip” feedback system
* Modern responsive UI

### 🛠 Admin Panel

* Event distribution charts (views/cart/purchases)
* Feedback analytics with pie chart
* Recent user activity table
* Add new product interface

### 🤖 Intelligent Backend

* Behavioral scoring
* Category similarity scoring
* Popularity and recency weighting
* LLM text explanation generation

---

# 🧮 Recommendation Algorithm

```
Total Score = 0.4 × Category Similarity
            + 0.3 × Behavior Score
            + 0.2 × Popularity Score
            + 0.1 × Recency Score
```

### Factors:

* **Category Similarity (40%)**
* **Behavior Score (30%)**
* **Popularity Score (20%)**
* **Recency Score (10%)**

---

# 🖼 Screenshots


* User selection page
![alt text](<Screenshot 2025-12-06 125624.png>)


* Product cards
![alt text](<Screenshot 2025-12-06 125654.png>)

* Admin analytics charts
![alt text](<Screenshot 2025-12-06 125714.png>)

![alt text](<Screenshot 2025-12-06 125757.png>)

* Add Product
![alt text](<Screenshot 2025-12-06 125725.png>)

---

# ⚙ Getting Started

## 1️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env`:

```
MONGODB_URI=mongodb://localhost:27017/recommender_db
PORT=5000
CORS_ORIGIN=http://localhost:5173
OPENAI_API_KEY=your_api_key_here
```

Seed database:

```bash
node seed/seed.js
```

Start server:

```bash
npm start
```

---

## 2️⃣ Frontend Setup

```bash
cd client
npm install
```

Create `.env.local`:

```
VITE_API_URL=http://localhost:5000/api
```

Start development:

```bash
npm run dev
```

Visit:
👉 `http://localhost:5173`

---

# 📡 API Endpoints

### Users

| Method | Endpoint         | Description  |
| ------ | ---------------- | ------------ |
| GET    | `/api/users`     | List users   |
| GET    | `/api/users/:id` | User details |

### Products

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/api/products` |
| POST   | `/api/products` |

### Recommendations

| Method | Endpoint                 |
| ------ | ------------------------ |
| GET    | `/api/recommend/:userId` |

### Feedback

| Method | Endpoint                  |
| ------ | ------------------------- |
| POST   | `/api/feedback`           |
| GET    | `/api/feedback/stats/all` |

### Events

| Method | Endpoint                             |
| ------ | ------------------------------------ |
| POST   | `/api/events`                        |
| GET    | `/api/events`                        |
| GET    | `/api/events/analytics/distribution` |

---

# 🗂 Database Models

### User

```json
{
  "username": "string",
  "email": "string",
  "preferredCategories": ["string"],
  "priceMin": "number",
  "priceMax": "number"
}
```

### Product

```json
{
  "name": "string",
  "category": "string",
  "price": "number",
  "rating": "number",
  "popularityScore": "number",
  "image": "string"
}
```

### Event

```json
{
  "userId": "ObjectId",
  "productId": "ObjectId",
  "eventType": "view | cart | purchase",
  "createdAt": "Date"
}
```

### Feedback

```json
{
  "recommendationId": "ObjectId",
  "reaction": "up | down | skip"
}
```

### RecommendationLog

```json
{
  "userId": "ObjectId",
  "productId": "ObjectId",
  "totalScore": "number",
  "factors": {
    "categorySimilarity": "number",
    "behaviorScore": "number",
    "popularityScore": "number",
    "recencyScore": "number"
  },
  "llmExplanation": "string",
  "confidence": "High | Medium | Low"
}
```

---

# 🔧 Environment Variables

### Backend `.env`

```
MONGODB_URI=
PORT=
CORS_ORIGIN=
OPENAI_API_KEY=
```

### Frontend `.env.local`

```
VITE_API_URL=
```

---

# 🔮 Future Enhancements

* JWT-based authentication
* Advanced ML models (collaborative filtering, embeddings)
* Redis caching for faster recommendations
* Incremental training pipeline
* Multi-language support
* In-app A/B testing
* React Native mobile app

---

# 🐞 Troubleshooting

### MongoDB errors

* Ensure `mongod` is running
* Check `.env` variables
* If using Atlas, whitelist IP

### Frontend can't reach API

* Check `VITE_API_URL`
* Ensure backend is running on correct port

### No recommendations

* Run seeder again
* Ensure user has valid preferred categories




