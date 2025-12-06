# Project Structure

## Directory Layout

\`\`\`
recommender-system/
├── server/                          # Backend (Express.js)
│   ├── models/
│   │   ├── User.js                 # User profile schema
│   │   ├── Product.js              # Product catalog schema
│   │   ├── Event.js                # User behavior events
│   │   ├── RecommendationLog.js    # Recommendation records
│   │   └── Feedback.js             # User feedback on recommendations
│   ├── routes/
│   │   ├── products.js             # Product endpoints
│   │   ├── users.js                # User endpoints
│   │   ├── events.js               # Event tracking endpoints
│   │   ├── recommend.js            # Recommendation endpoints
│   │   └── feedback.js             # Feedback endpoints
│   ├── services/
│   │   ├── RecommendationEngine.js # Core recommendation logic
│   │   └── LLMService.js           # LLM explanation generation
│   ├── seed/
│   │   └── seed.js                 # Database seeding script
│   ├── config.js                   # Configuration management
│   ├── server.js                   # Express server entry point
│   ├── package.json
│   └── .env.example
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── UserSelect.jsx      # User selection page
│   │   │   ├── Dashboard.jsx       # Main recommendations page
│   │   │   ├── Admin.jsx           # Analytics dashboard
│   │   │   └── NotFound.jsx        # 404 page
│   │   ├── components/
│   │   │   ├── ProductCard.jsx     # Product display card
│   │   │   ├── ExplanationCard.jsx # AI explanation display
│   │   │   ├── FeedbackButtons.jsx # Feedback submission
│   │   │   ├── RecommendationList.jsx # Recommendations container
│   │   │   ├── LoadingSpinner.jsx  # Loading indicator
│   │   │   ├── ErrorMessage.jsx    # Error display
│   │   │   └── Charts/
│   │   │       ├── EventChart.jsx  # Event distribution chart
│   │   │       └── FeedbackChart.jsx # Feedback pie chart
│   │   ├── utils/
│   │   │   └── api.js              # Axios API client
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   └── App.jsx                 # Root component
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── .env.example
│
├── .env.setup.md                   # Environment setup guide
├── PROJECT_STRUCTURE.md            # This file
└── README.md                        # Main project documentation
\`\`\`

## Key Files Explanation

### Backend Files

#### Models (`server/models/`)
- **User.js**: Stores user profiles, preferences, and price ranges
- **Product.js**: Product catalog with ratings and popularity scores
- **Event.js**: Tracks user interactions (views, cart adds, purchases)
- **RecommendationLog.js**: Records all recommendations with scores and explanations
- **Feedback.js**: Stores user feedback on recommendations

#### Routes (`server/routes/`)
- **products.js**: GET all/single product, POST new product
- **users.js**: GET all/single user, POST new user, PATCH user preferences
- **events.js**: POST event, GET events, analytics distribution
- **recommend.js**: GET recommendations for a user
- **feedback.js**: POST feedback, GET feedback statistics

#### Services (`server/services/`)
- **RecommendationEngine.js**: Implements the weighted scoring algorithm
- **LLMService.js**: Generates natural language explanations for recommendations

### Frontend Files

#### Pages (`client/src/pages/`)
- **UserSelect.jsx**: Initial page for user selection
- **Dashboard.jsx**: Main page showing personalized recommendations
- **Admin.jsx**: Analytics dashboard with charts
- **NotFound.jsx**: 404 error page

#### Components (`client/src/components/`)
- **ProductCard.jsx**: Displays product information
- **ExplanationCard.jsx**: Shows AI explanation and confidence
- **FeedbackButtons.jsx**: Allows users to rate recommendations
- **RecommendationList.jsx**: Maps and displays all recommendations
- **LoadingSpinner.jsx**: Loading state indicator
- **ErrorMessage.jsx**: Error state display
- **Charts/**: Recharts visualization components

#### Utilities (`client/src/utils/`)
- **api.js**: Axios client with all API methods

## Data Flow

\`\`\`
User selects profile
    ↓
Frontend fetches user recommendations
    ↓
Backend calls RecommendationEngine
    ↓
Engine calculates scores for all products
    ↓
LLMService generates explanations
    ↓
Results saved to RecommendationLog
    ↓
Frontend displays recommendations
    ↓
User provides feedback
    ↓
Backend saves feedback to database
\`\`\`

## Recommendation Algorithm Flow

\`\`\`
1. Fetch user profile (categories, price range)
2. Fetch user behavior (view, cart, purchase events)
3. Fetch candidate products (not yet viewed, in price range)
4. For each product, calculate:
   - Category similarity (40%)
   - Behavior score (30%)
   - Popularity score (20%)
   - Recency score (10%)
5. Rank products by total score
6. Generate LLM explanations for top 10
7. Save to database and return to frontend
\`\`\`

## Technology Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin request handling
- **Node.js** - Runtime

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Lucide React** - Icons

### Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Nodemon** - Auto-reload for development

## Setup Instructions

See `.env.setup.md` for detailed environment configuration.

Quick start:
\`\`\`bash
# Backend
cd server
npm install
npm run seed
npm run dev

# Frontend (in new terminal)
cd client
npm install
npm run dev
\`\`\`

Visit `http://localhost:5173` to access the application.
