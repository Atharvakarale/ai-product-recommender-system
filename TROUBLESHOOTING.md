# Troubleshooting Guide

## Common Issues and Solutions

### Backend Won't Start

**Error: Port 5000 already in use**
\`\`\`
Error: listen EADDRINUSE :::5000
\`\`\`
Solution:
\`\`\`bash
# Find and kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm run dev
\`\`\`

**Error: Cannot find module**
\`\`\`
Error: Cannot find module 'mongoose'
\`\`\`
Solution:
\`\`\`bash
cd server
npm install
\`\`\`

### MongoDB Connection Issues

**Error: connect ECONNREFUSED**
\`\`\`
Error: connect ECONNREFUSED 127.0.0.1:27017
\`\`\`
Solutions:
- Start MongoDB service
- Check MongoDB is installed
- Verify connection string in .env

**Error: Authentication failed**
\`\`\`
Error: authentication failed
\`\`\`
- Check username/password
- Verify IP whitelist (if using Atlas)
- Check database name

### Frontend Issues

**Page shows "Cannot GET /"**
- Ensure frontend dev server is running on port 5173
- Check browser console for errors
- Clear browser cache

**API calls return 404**
- Verify backend is running
- Check `VITE_API_URL` in `.env.local`
- Ensure correct API endpoint path

**Styles not loading**
- Clear node_modules: `rm -rf node_modules && npm install`
- Rebuild Tailwind: `npm run build`
- Check tailwind.config.js

### Recommendations Not Generating

**Empty recommendations list**
1. Verify database is seeded: `npm run seed` in server directory
2. Check users exist: `curl http://localhost:5000/api/users`
3. Check products exist: `curl http://localhost:5000/api/products`
4. Check user has preferred categories set

**Always showing same recommendations**
- Clear browser cache
- Check recommendation log in database
- Verify event tracking is working

### CORS Errors

**Error: No 'Access-Control-Allow-Origin' header**
Solution: Update `CORS_ORIGIN` in backend `.env`
\`\`\`
CORS_ORIGIN=http://localhost:5173
\`\`\`

For production:
\`\`\`
CORS_ORIGIN=https://yourdomain.com
\`\`\`

### Performance Issues

**Slow recommendations loading**
- Add database indexes
- Check MongoDB performance
- Verify no network latency
- Use caching (Redis)

**Frontend lag**
- Check for memory leaks
- Profile with Chrome DevTools
- Reduce number of recommendations
- Optimize component rendering

### Deployment Issues

**Vercel: Build fails**
- Check build logs
- Ensure all dependencies in package.json
- Verify environment variables set
- Check Node.js version compatibility

**Railway: Backend won't connect**
- Verify MongoDB URI
- Check CORS_ORIGIN matches frontend URL
- Review deployment logs
- Ensure all env vars are set

## Getting Help

### Debug Mode

Enable debug logging:
\`\`\`javascript
// In server.js
import debug from 'debug';
const log = debug('recommender:*');

log('Starting recommendation engine');
\`\`\`

Run with debug:
\`\`\`bash
DEBUG=recommender:* npm run dev
\`\`\`

### Check Logs

**Backend logs:**
- Terminal output when running `npm run dev`
- MongoDB connection logs
- API request logs

**Frontend logs:**
- Browser console (F12)
- Network tab for API calls
- React Developer Tools

### Database Inspection

\`\`\`bash
# Connect to MongoDB
mongosh

# Switch to database
use recommender_db

# View collections
show collections

# Check users
db.users.find()

# Check products
db.products.find()

# Check events
db.events.find()

# Check recommendations
db.recommendationlogs.find()
\`\`\`

### Test API Endpoints

\`\`\`bash
# Test health
curl http://localhost:5000/api/health

# Get users
curl http://localhost:5000/api/users

# Get products
curl http://localhost:5000/api/products

# Test recommendation
curl http://localhost:5000/api/recommend/<user_id>
\`\`\`

## Support Resources

- Documentation: See README.md
- Architecture: See PROJECT_STRUCTURE.md
- Deployment: See DEPLOYMENT.md
- Features: See FEATURES.md

## Still Need Help?

1. Check all guides above
2. Review error messages carefully
3. Check GitHub issues
4. Open a new issue with:
   - Error message
   - Steps to reproduce
   - Environment (OS, Node version, etc.)
   - Logs/screenshots
