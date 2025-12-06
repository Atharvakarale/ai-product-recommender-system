

# 📁 Project Structure

This document explains the complete folder and file structure of the **AI-Powered E-Commerce Product Recommender System**, covering both **frontend (React + Vite)** and **backend (Node.js + Express)**.

---

## 🗂 Directory Layout

```
recommender-system/
├── server/                          # Backend (Express.js + MongoDB)
│   ├── models/
│   │   ├── User.js                 # User profile schema
│   │   ├── Product.js              # Product catalog schema
│   │   ├── Event.js                # User behavior tracking
│   │   ├── RecommendationLog.js    # Recommendation scoring + LLM logs
│   │   └── Feedback.js             # Feedback on recommendations
│   ├── routes/
│   │   ├── products.js             # CRUD for products
│   │   ├── users.js                # User APIs
│   │   ├── events.js               # Event tracking APIs
│   │   ├── recommend.js            # Recommendation endpoint
│   │   └── feedback.js             # Feedback submission + stats
│   ├── services/
│   │   ├── RecommendationEngine.js # Weighted recommendation algorithm
│   │   └── LLMService.js           # LLM explanation generation
│   ├── seed/
│   │   └── seed.js                 # Database seeding script
│   ├── config.js                   # Environment + configuration
│   ├── server.js                   # Express server entry point
│   ├── package.json
│   └── .env.example
│
├── client/                         # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── UserSelect.jsx      # User profile selection page
│   │   │   ├── Dashboard.jsx       # Personalized recommendations
│   │   │   ├── Admin.jsx           # Admin analytics dashboard
│   │   │   └── NotFound.jsx        # 404 page
│   │   ├── components/
│   │   │   ├── ProductCard.jsx     # Product display card
│   │   │   ├── ExplanationCard.jsx # LLM explanation + confidence tag
│   │   │   ├── FeedbackButtons.jsx # Feedback submission UI
│   │   │   ├── RecommendationList.jsx # Renders all recommendations
│   │   │   ├── LoadingSpinner.jsx  # Global loader
│   │   │   ├── ErrorMessage.jsx    # Error UI
│   │   │   └── Charts/
│   │   │       ├── EventChart.jsx  # Event distribution chart
│   │   │       └── FeedbackChart.jsx # Feedback pie chart
│   │   ├── utils/
│   │   │   └── api.js              # Axios Client (All API calls)
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   └── App.jsx                 # App router + layout
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── .env.example
│
├── .env.setup.md                   # Guide for setting up environment variables
├── PROJECT_STRUCTURE.md            # (This file)
└── README.md                       # Main project documentation
```

---

# 🔍 Key Modules Overview

## 🛠 Backend (`server/`)

### **Models**

| Model                    | Description                                         |
| ------------------------ | --------------------------------------------------- |
| **User.js**              | User preferences, price ranges, browsing categories |
| **Product.js**           | Product catalog with rating, popularity, image      |
| **Event.js**             | Tracks views, cart actions, purchases               |
| **RecommendationLog.js** | Stores scores + LLM explanations                    |
| **Feedback.js**          | Stores “Relevant/Not Relevant/Skip” feedback        |

### **Routes**

* `/products` → Get/Add products
* `/users` → Get users + update preferences
* `/events` → Log/view events + distribution analytics
* `/recommend/:userId` → Generate recommendations
* `/feedback` → Submit + retrieve feedback statistics

### **Services**

* **RecommendationEngine.js**
  Implements the weighted scoring algorithm:

  ```
  Score = 0.4*Category + 0.3*Behavior + 0.2*Popularity + 0.1*Recency
  ```

* **LLMService.js**
  Generates natural-language explanations (OpenAI or mock).

---

## 🎨 Frontend (`client/`)

### Pages

* **UserSelect** → Choose user & start recommendation flow
* **Dashboard** → Main recommendations view
* **Admin** → Analytics dashboard
* **NotFound** → 404 fallback

### Components

* **ProductCard** → Product display UI
* **ExplanationCard** → Shows AI explanation + confidence
* **FeedbackButtons** → Records user feedback
* **RecommendationList** → Lists all recommendations
* **Charts** (Recharts):

  * Event distribution
  * Feedback pie chart

### Utilities

* **api.js** → Centralized Axios client for all API calls

---

# 🔄 Data Flow Overview

```
User Selects Profile
        ↓
Dashboard Requests Recommendations
        ↓
Backend → RecommendationEngine Calculates Score
        ↓
LLMService Generates Explanation
        ↓
Results Logged in RecommendationLog
        ↓
Frontend Displays Products + Explanations
        ↓
User Reacts (Relevant / Not Relevant / Skip)
        ↓
Feedback Stored in Feedback Collection
        ↓
Admin Dashboard Updates Analytics in Real-Time
```

---

# 🧠 Recommendation Algorithm Flow

```
1. Load user profile (categories, price range)
2. Load user's past behavior events
3. Filter all available products
4. For each product, compute:
     - Category similarity (0.4)
     - Behavioral affinity (0.3)
     - Popularity score (0.2)
     - Recency score (0.1)
5. Rank products by final weighted score
6. Generate explanation (LLM)
7. Save recommendation record
8. Return ranked list to frontend
```

---

# 🧰 Technology Stack

### **Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* OpenAI API (optional)
* CORS

### **Frontend**

* React 18
* Vite
* TailwindCSS 4
* Recharts
* Lucide React icons
* Axios

### **Developer Tools**

* ESLint
* Prettier
* Nodemon

---

# 🚀 Setup Instructions

For full setup, see `.env.setup.md`.

## Quick Start

### Backend

```bash
cd server
npm install
node seed/seed.js
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Visit:
👉 **[http://localhost:5173](http://localhost:5173)**


