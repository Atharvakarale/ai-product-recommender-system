# Getting Started Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- npm or yarn

### Step 1: Clone Repository
\`\`\`bash
git clone <repo-url>
cd recommender-system
\`\`\`

### Step 2: Backend Setup
\`\`\`bash
cd server
npm install

# Create .env file
cp .env.example .env

# Seed database with sample data
npm run seed

# Start backend server
npm run dev
\`\`\`

You should see: `Server running on port 5000`

### Step 3: Frontend Setup (New Terminal)
\`\`\`bash
cd client
npm install

# Create .env.local file
cp .env.example .env.local

# Start frontend dev server
npm run dev
\`\`\`

You should see: `Local: http://localhost:5173`

### Step 4: Open in Browser
Visit `http://localhost:5173` and start exploring recommendations!

## First Time Usage

1. **User Selection**: Choose from demo users or create a new one
2. **View Recommendations**: See personalized product suggestions
3. **Rate Recommendations**: Provide feedback to improve future suggestions
4. **Admin Dashboard**: Check analytics at `/admin`

## Database Seeding

The seed script creates:
- 5 demo users with different preferences
- 12 sample products across 4 categories
- 20 sample user events

Re-seed anytime:
\`\`\`bash
cd server
npm run seed
\`\`\`

## Troubleshooting

### MongoDB Connection Error
\`\`\`
Error: connect ECONNREFUSED 127.0.0.1:27017
\`\`\`
**Solution**: Start MongoDB
- macOS: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongod`
- Windows: Run MongoDB from Start Menu

### Frontend Can't Connect to Backend
\`\`\`
CORS error or 404 not found
\`\`\`
**Solution**: Check VITE_API_URL in `.env.local` matches backend URL

### No Recommendations Showing
**Solution**: Verify database is seeded and users exist

## API Testing

### Test Backend Health
\`\`\`bash
curl http://localhost:5000/api/health
\`\`\`

### Get All Users
\`\`\`bash
curl http://localhost:5000/api/users
\`\`\`

### Get Recommendations for User 1
\`\`\`bash
curl http://localhost:5000/api/recommend/<user_id>
\`\`\`

## Project Commands

### Backend
\`\`\`bash
npm run start    # Production mode
npm run dev      # Development mode with auto-reload
npm run seed     # Seed database with sample data
\`\`\`

### Frontend
\`\`\`bash
npm run dev      # Development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
\`\`\`

## Next Steps

1. **Customize Users**: Edit seed data in `server/seed/seed.js`
2. **Add Real LLM**: Set `OPENAI_API_KEY` in `.env`
3. **Deploy**: See `DEPLOYMENT.md`
4. **Extend Features**: Refer to `FEATURES.md`

## File Structure Reference

\`\`\`
client/                 - React frontend
├── src/pages/         - Page components
├── src/components/    - Reusable components
└── src/utils/         - API utilities

server/                - Express backend
├── models/            - Database schemas
├── routes/            - API endpoints
└── services/          - Business logic
\`\`\`

## Documentation

- **API Reference**: See Backend section in `README.md`
- **Architecture**: See `PROJECT_STRUCTURE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Environment Setup**: See `.env.setup.md`
