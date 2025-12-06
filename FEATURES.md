# Feature Guide

## Current Features

### Core Recommendation Engine
- Weighted scoring algorithm (4 factors)
- Behavior-based personalization
- Category matching
- Popularity filtering
- Recency scoring

### User Experience
- User profile selection
- Personalized product recommendations
- Score factor breakdown
- LLM-generated explanations
- Confidence indicators
- Feedback submission

### Analytics Dashboard
- Event distribution charts
- Feedback statistics
- Recent activity table
- Real-time data updates

## Extending Features

### Add More Scoring Factors

Edit `server/services/RecommendationEngine.js`:

\`\`\`javascript
const calculateFactors = (product, user, ...) => {
  // Add new factor
  const priceRelevance = calculatePrice(product, user);
  
  // Update weights in getRecommendations()
  const totalScore = 
    0.4 * categorySimilarity +
    0.25 * behaviorScore +
    0.15 * popularityScore +
    0.1 * recencyScore +
    0.1 * priceRelevance;  // New!
    
  return { ...factors, priceRelevance };
}
\`\`\`

### Implement Real OpenAI API

Edit `server/services/LLMService.js`:

\`\`\`javascript
const generateWithOpenAI = async (userSummary, product, factors, confidence) => {
  const { Configuration, OpenAIApi } = await import('openai');
  
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(config);
  
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: `Explain why this product: ${product.name} is recommended...`
    }],
  });
  
  return response.data.choices[0].message.content;
}
\`\`\`

### Add User Authentication

Create `server/middleware/auth.js`:

\`\`\`javascript
import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
\`\`\`

### Add Product Search

Edit `server/routes/products.js`:

\`\`\`javascript
router.get('/search', async (req, res) => {
  const { q } = req.query;
  
  const products = await Product.find({
    $or: [
      { name: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
    ]
  });
  
  res.json(products);
});
\`\`\`

### Add Product Filtering by Price

Edit frontend `components/ProductCard.jsx`:

\`\`\`javascript
const [priceFilter, setPriceFilter] = useState([0, 5000]);

const filteredProducts = recommendations.filter(rec =>
  rec.product.price >= priceFilter[0] &&
  rec.product.price <= priceFilter[1]
);
\`\`\`

### Add User Preferences Panel

Create `client/src/components/PreferencesPanel.jsx`:

\`\`\`javascript
export default function PreferencesPanel({ user, onUpdate }) {
  const [preferences, setPreferences] = useState(user.preferredCategories);
  
  const handleUpdate = async () => {
    await updateUserPreferences(user._id, preferences);
    onUpdate();
  };
  
  return (
    <div className="p-4 border rounded-lg">
      {/* Category checkboxes */}
      <button onClick={handleUpdate}>Save Preferences</button>
    </div>
  );
}
\`\`\`

### Add Product Reviews

Create `server/models/Review.js`:

\`\`\`javascript
const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});
\`\`\`

### Add Email Notifications

Install `nodemailer`:

\`\`\`bash
npm install nodemailer
\`\`\`

\`\`\`javascript
import nodemailer from 'nodemailer';

const sendRecommendationEmail = async (user, recommendations) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
  });
  
  const mailOptions = {
    to: user.email,
    subject: 'Your Personalized Recommendations',
    html: `<h1>Check out these recommendations!</h1>`
  };
  
  await transporter.sendMail(mailOptions);
};
\`\`\`

### Add Caching with Redis

Install `redis`:

\`\`\`bash
npm install redis
\`\`\`

\`\`\`javascript
import { createClient } from 'redis';

const redisClient = createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

// Cache recommendations
const cacheKey = `recommendations:${userId}`;
const cached = await redisClient.get(cacheKey);

if (cached) {
  return JSON.parse(cached);
}

// Generate and cache
const recommendations = await generateRecommendations(user);
await redisClient.setex(cacheKey, 3600, JSON.stringify(recommendations));
\`\`\`

## Performance Optimization

### Backend
- Add pagination to API responses
- Implement database indexing
- Use caching for frequently accessed data
- Batch process recommendations

### Frontend
- Lazy load components with React.lazy()
- Implement infinite scroll
- Optimize images
- Use React.memo for components

## Testing

### Backend (Jest)
\`\`\`bash
npm install --save-dev jest supertest
\`\`\`

\`\`\`javascript
describe('Recommendations API', () => {
  it('should return recommendations for user', async () => {
    const res = await request(app).get(`/api/recommend/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(10);
  });
});
\`\`\`

### Frontend (Vitest)
\`\`\`bash
npm install --save-dev vitest @testing-library/react
\`\`\`

## Monitoring & Analytics

- Set up Sentry for error tracking
- Add Google Analytics to frontend
- Use New Relic for backend monitoring
- Enable MongoDB performance monitoring

## Security Checklist

- [ ] Enable HTTPS in production
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Enable CORS for specific domains
- [ ] Use JWT for authentication
- [ ] Hash user passwords
- [ ] Implement SQL injection prevention (if using SQL)
- [ ] Regular security audits
- [ ] Keep dependencies updated
