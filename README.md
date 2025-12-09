

# 🚀 AI-Powered E-Commerce Product Recommender System

**🌐 Live Demo:** [https://ai-product-recommender-system.vercel.app](https://ai-product-recommender-system.vercel.app)

A full-stack AI-driven product recommendation system that analyzes user behavior and preferences to generate **personalized product suggestions**, complete with **LLM explanations**, confidence scores, and an **admin analytics dashboard**.

## 🎥 Demo Video  
Watch the full demo here:  
👉 https://drive.google.com/file/d/1D0pRcszIMeCBIOcieu-1LItdqTC1xF6J/view?usp=sharing


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

* **Frontend → Vercel**
* **Backend → Railway**
* **Database → MongoDB Atlas**

---

# ⭐ Features

### 👤 User-Facing

* AI-powered personalized product recommendations
* LLM-generated explanations
* Confidence scores
* Score breakdown
* Feedback system
* Modern UI

### 🛠 Admin Panel

* Analytics charts
* Feedback statistics
* Recent user activity
* Add product interface

### 🤖 Intelligent Backend

* Behavioral scoring
* Category similarity
* Popularity & recency weighting
* LLM-based rationale

---

# 🧮 Recommendation Algorithm

```
Total Score = 0.4 × Category Similarity
            + 0.3 × Behavior Score
            + 0.2 × Popularity Score
            + 0.1 × Recency Score
```

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

Start dev server:

```bash
npm run dev
```

👉 Visit: [http://localhost:5173](http://localhost:5173)

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

(unchanged—same as your original, preserved exactly)

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

* JWT authentication
* Collaborative filtering
* Redis caching
* Incremental training
* Multilingual support
* Mobile app

---




