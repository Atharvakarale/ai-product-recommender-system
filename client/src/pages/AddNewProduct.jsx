

"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackagePlus, ArrowLeft, ImageIcon, Tag, DollarSign, Star, TrendingUp, FileText, Building2 } from "lucide-react";

/** ✅ Predefined product categories */
const CATEGORIES = [
  "Electronics",
  "Mobile Phones",
  "Laptops",
  "Fashion",
  "Footwear",
  "Home Appliances",
  "Furniture",
  "Books",
  "Beauty & Personal Care",
  "Sports & Fitness",
  "Toys & Games",
  "Groceries",
  "Automobiles",
  "Health & Wellness",
  "Accessories",
];

export default function AddNewProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    rating: 3.5,
    popularityScore: 0,
    image: "",
    description: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        rating: Number(form.rating),
        popularityScore: Number(form.popularityScore),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Product added successfully!");
      navigate("/admin");
    } else {
      alert(`❌ ${data.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-10">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <h2 className="text-xl font-semibold flex items-center gap-3 text-white">
              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/25">
                <PackagePlus className="w-5 h-5 text-white" />
              </div>
              Add New Product
            </h2>

            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            {/* Product Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                <Tag className="w-4 h-4 text-indigo-400" />
                Product Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="iPhone 15 Pro"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>

            {/* Category & Brand */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ✅ CATEGORY DROPDOWN */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  Category *
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px',
                  }}
                >
                  <option value="" className="bg-slate-800 text-white">Select category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()} className="bg-slate-800 text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  Brand
                </label>
                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="Apple"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Price & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="79999"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  Rating
                </label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                  <TrendingUp className="w-4 h-4 text-pink-400" />
                  Popularity
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  name="popularityScore"
                  value={form.popularityScore}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                Image URL
              </label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/product.png"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white/70 mb-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                Description
              </label>
              <textarea
                rows={4}
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Product details, features, benefits..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 active:scale-95"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
