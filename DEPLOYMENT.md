# Deployment Guide

## Frontend Deployment (Vercel)

1. **Push code to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Set root directory to `client`
   - Add environment variables:
     - `VITE_API_URL` = your backend URL
   - Click Deploy

3. **Update CORS in backend:**
   - Add your Vercel domain to `CORS_ORIGIN`

## Backend Deployment (Railway)

1. **Install Railway CLI:**
   \`\`\`bash
   npm install -g @railway/cli
   \`\`\`

2. **Login and create project:**
   \`\`\`bash
   railway login
   railway init
   \`\`\`

3. **Set up MongoDB (Atlas):**
   - Create MongoDB Atlas account
   - Create cluster and get connection string
   - Add to Railway variables: `MONGODB_URI`

4. **Add environment variables in Railway:**
   - `PORT` = 5000
   - `NODE_ENV` = production
   - `CORS_ORIGIN` = your Vercel URL
   - `OPENAI_API_KEY` = your key (optional)

5. **Deploy:**
   \`\`\`bash
   railway up
   \`\`\`

## Environment Variables Checklist

### Backend Production
- [ ] `MONGODB_URI` (MongoDB Atlas)
- [ ] `PORT` = 5000
- [ ] `NODE_ENV` = production
- [ ] `CORS_ORIGIN` = your frontend URL
- [ ] `OPENAI_API_KEY` (optional)

### Frontend Production
- [ ] `VITE_API_URL` = your backend URL

## Monitoring

- **Backend**: Use Railway dashboard
- **Frontend**: Use Vercel dashboard
- **Database**: Use MongoDB Atlas dashboard

## Troubleshooting

**API connection failed:**
- Check backend deployment logs
- Verify `VITE_API_URL` matches deployed backend
- Check CORS origin settings

**Database connection failed:**
- Verify MongoDB Atlas connection string
- Check IP whitelist in Atlas
- Ensure database exists

**Recommendations not generating:**
- Verify database is seeded
- Check backend logs for errors
- Ensure users have valid profiles

\`\`\`
