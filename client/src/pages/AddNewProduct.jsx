"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackagePlus, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <PackagePlus className="w-6 h-6 text-green-600" />
            Add New Product
          </h2>

          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          {/* Product Name */}
          <div>
            <label className="label">Product Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="iPhone 15 Pro"
              required
              className="input"
            />
          </div>

          {/* Category & Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ✅ CATEGORY DROPDOWN */}
            <div>
              <label className="label">Category *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="input bg-white"
              >
                <option value="">Select category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Brand</label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Apple"
                className="input"
              />
            </div>
          </div>

          {/* Price & Rating */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">Price *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="79999"
                required
                className="input"
              />
            </div>

            <div>
              <label className="label">Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div>
              <label className="label">Popularity</label>
              <input
                type="number"
                min="0"
                max="100"
                name="popularityScore"
                value={form.popularityScore}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="label">Image URL</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/product.png"
              className="input"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              rows={4}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product details, features, benefits..."
              className="input resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-5 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
