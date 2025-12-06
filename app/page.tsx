import { ArrowRight, Sparkles, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">RecommendAI</span>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">
                Features
              </a>
              <a href="#architecture" className="text-sm text-slate-600 hover:text-slate-900">
                Architecture
              </a>
              <a href="#tech" className="text-sm text-slate-600 hover:text-slate-900">
                Tech Stack
              </a>
              <Link
                href="/demo"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">AI-Powered Product Recommendations</h1>
            <p className="text-xl text-slate-600 mb-8">
              Intelligent recommendation engine that learns from user behavior and generates natural language
              explanations for every suggestion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
              >
                Explore Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#architecture"
                className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:border-slate-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/ai-recommendations-dashboard.jpg"
              alt="Product Recommender Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "LLM Explanations",
                description: "Every recommendation includes a natural language explanation powered by AI",
              },
              {
                icon: Zap,
                title: "Real-Time Personalization",
                description: "Adapts to user behavior with instant scoring and ranking updates",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Track events, feedback, and recommendation performance in real-time",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">System Architecture</h2>
          <div className="bg-white rounded-lg border border-slate-200 p-8 overflow-x-auto">
            <pre className="text-sm text-slate-600 font-mono">
              {`Frontend (React/Next.js)
    ↓ (HTTP/REST)
Backend (Express.js)
    ├── API Routes
    ├── Recommendation Engine
    └── LLM Service
    ↓ (MongoDB queries)
Database (MongoDB)
    ├── Users
    ├── Products
    ├── Events
    ├── RecommendationLogs
    └── Feedback`}
            </pre>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Frontend</h3>
              <ul className="space-y-3 text-slate-600">
                {["React 18", "Next.js 16", "TailwindCSS", "Recharts", "Axios"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Backend</h3>
              <ul className="space-y-3 text-slate-600">
                {["Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI API"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Explore the demo and see AI-powered recommendations in action</p>
          <Link
            href="/demo"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 inline-flex items-center gap-2"
          >
            Try Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>AI-Powered E-Commerce Product Recommender System</p>
          <p className="text-sm mt-2">Built with React, Express, and MongoDB</p>
        </div>
      </footer>
    </div>
  )
}
