# Next.js Integration Guide

This project combines a **Next.js frontend** with a **separate Express backend** for a complete AI-powered recommendation system.

## Architecture Overview

\`\`\`
┌─────────────────────────────────┐
│  Next.js Frontend (v0.app)      │
│  ├── Landing Page               │
│  ├── Interactive Demo            │
│  └── Admin Analytics             │
└──────────────┬──────────────────┘
               │ (HTTP)
┌──────────────▼──────────────────┐
│  Express Backend (Separate)     │
│  ├── /api/products              │
│  ├── /api/users                 │
│  ├── /api/recommend             │
│  └── /api/feedback              │
└──────────────┬──────────────────┘
               │ (MongoDB)
┌──────────────▼──────────────────┐
│  MongoDB Database               │
│  ├── Users                      │
│  ├── Products                   │
│  ├── Events                     │
│  ├── RecommendationLogs         │
│  └── Feedback                   │
└─────────────────────────────────┘
\`\`\`

## Running the Project

### Option 1: Development (Recommended)

**Terminal 1: Backend Server**
\`\`\`bash
cd server
npm install
npm run seed          # Seed demo data
npm run dev          # Starts on http://localhost:5000
\`\`\`

**Terminal 2: Next.js Frontend**
\`\`\`bash
npm install
npm run dev          # Starts on http://localhost:3000
\`\`\`

Visit http://localhost:3000 to see the application.

### Option 2: Production Build

**Backend (same as above, or deploy to Railway/Render)**

**Frontend:**
\`\`\`bash
npm run build
npm start
\`\`\`

## Project Files

### Frontend (Next.js)
\`\`\`
app/
├── page.tsx              # Landing page with features & CTA
├── demo/page.tsx         # Interactive demo with mock data
├── layout.tsx            # Root layout
└── globals.css           # Global styles
\`\`\`

### Backend (Express)
\`\`\`
server/
├── models/               # MongoDB schemas
├── routes/               # API endpoints
├── services/             # Business logic
├── seed/                 # Database seeding
├── config.js             # Configuration
└── server.js             # Express app entry
\`\`\`

## Using the Demo

The `/demo` page includes an interactive demo using mock data:
- Select from 3 pre-configured users
- View personalized recommendations
- See AI explanations for each product
- Rate recommendations with feedback buttons

No backend connection needed for the demo!

## Connecting to Real Backend

To connect the Next.js app to your running Express backend:

1. **Environment Setup:**
   Create `.env.local` in the root:
   \`\`\`
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   \`\`\`

2. **Create API Routes (Optional):**
   Create `app/api/[...path]/route.ts` to proxy requests to the backend

3. **Update Components:**
   Modify demo page to call the backend instead of mock data

## Deploying

### Frontend (Vercel)
\`\`\`bash
git push                # Push to GitHub
# On vercel.com, import repository and deploy
\`\`\`

### Backend (Railway or Render)
\`\`\`bash
# Create .env with production values
MONGODB_URI=your-atlas-url
PORT=5000
CORS_ORIGIN=your-vercel-url

# Deploy to Railway or Render
\`\`\`

## Files Structure

- **Landing Page** (`app/page.tsx`) - Main marketing page
- **Demo Page** (`app/demo/page.tsx`) - Interactive demo
- **Full Backend** (`server/`) - Complete API and recommendation engine

## Next Steps

1. **Explore Demo**: Visit `/demo` page
2. **Run Backend**: Follow "Running the Project"
3. **Integrate API**: Connect frontend to backend
4. **Deploy**: Follow deployment guides in backend README

## Support

Refer to:
- Backend README.md for API documentation
- FEATURES.md for extension ideas
- TROUBLESHOOTING.md for common issues
