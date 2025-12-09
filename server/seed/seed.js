import "dotenv/config";
import mongoose from "mongoose";
import config from "../config.js";

import User from "../models/User.js";
import Product from "../models/Product.js";
import Event from "../models/Event.js";

async function seedDatabase() {
  try {
    // Connect to DB
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(config.mongoUri);
      console.log("✓ Connected to MongoDB");
    }

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Product.deleteMany({}),
      Event.deleteMany({}),
    ]);

    console.log("✓ Cleared existing collections");

    // -----------------------
    // PRODUCTS
    // -----------------------
    const products = await Product.insertMany([
      {
        name: 'Pro Laptop 15"',
        description: "High-performance laptop for professionals",
        category: "Electronics",
        brand: "TechBrand",
        price: 1299,
        rating: 4.8,
        popularityScore: 92,
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=900",
      },
      {
        name: 'Budget Laptop 13"',
        description: "Affordable laptop for everyday use",
        category: "Electronics",
        brand: "ValueBrand",
        price: 499,
        rating: 4.2,
        popularityScore: 78,
        image:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&w=900",
      },
      {
        name: "Gaming Laptop RTX",
        description: "Ultimate gaming machine with RTX graphics",
        category: "Electronics",
        brand: "GameBrand",
        price: 2499,
        rating: 4.9,
        popularityScore: 88,
        image:
          "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&w=1000",
      },

      // FASHION
      {
        name: "Premium Denim Jeans",
        description: "Classic blue denim with stretch fit",
        category: "Fashion",
        brand: "StyleCo",
        price: 89,
        rating: 4.5,
        popularityScore: 85,
        image:
          "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&w=900",
      },
      {
        name: "Designer T-Shirt",
        description: "Luxury cotton t-shirt",
        category: "Fashion",
        brand: "LuxuryBrand",
        price: 79,
        rating: 4.6,
        popularityScore: 81,
        image:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&w=900",
      },
      {
        name: "Winter Jacket",
        description: "Waterproof winter jacket",
        category: "Fashion",
        brand: "WeatherBrand",
        price: 199,
        rating: 4.7,
        popularityScore: 90,
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&w=950",
      },

      // HOME & KITCHEN
      {
        name: "Stainless Steel Cookware Set",
        description: "12-piece premium cookware set",
        category: "Home & Kitchen",
        brand: "CookBrand",
        price: 249,
        rating: 4.6,
        popularityScore: 87,
        image:
          "https://unsplash.com/photos/a-group-of-pots-and-pans-sitting-on-a-table-zkDCXsHbWXg",
      },
      {
        name: "Electric Kettle",
        description: "Smart electric kettle with temperature control",
        category: "Home & Kitchen",
        brand: "SmartHome",
        price: 49,
        rating: 4.4,
        popularityScore: 76,
        image:
          "https://unsplash.com/photos/grey-stainless-steel-electric-kettle-mGlfn5uQH80",
      },
      {
        name: "Coffee Maker Pro",
        description: "Automatic espresso coffee maker",
        category: "Home & Kitchen",
        brand: "CaffeineBrand",
        price: 199,
        rating: 4.8,
        popularityScore: 89,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&w=900",
      },

      // SPORTS
      {
        name: "Running Shoes Pro",
        description: "Advanced running shoes with cushioning",
        category: "Sports & Outdoors",
        brand: "SportBrand",
        price: 129,
        rating: 4.7,
        popularityScore: 84,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&w=900",
      },
      {
        name: "Mountain Bike 29",
        description: "High-performance mountain bike",
        category: "Sports & Outdoors",
        brand: "BikeCompany",
        price: 899,
        rating: 4.5,
        popularityScore: 79,
        image:
          "https://unsplash.com/photos/black-hardtail-mountain-bike-CfhwQ2ZTaRY",
      },
      {
        name: "Yoga Mat Premium",
        description: "Non-slip yoga mat",
        category: "Sports & Outdoors",
        brand: "YogaBrand",
        price: 49,
        rating: 4.8,
        popularityScore: 82,
        image:
          "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&w=900",
      },
    ]);

    console.log(`✓ Inserted ${products.length} products`);

    // USERS
    const users = await User.insertMany([
      {
        username: "tech_enthusiast",
        email: "tech@example.com",
        preferredCategories: ["Electronics"],
        priceMin: 500,
        priceMax: 2500,
      },
      {
        username: "fashion_lover",
        email: "fashion@example.com",
        preferredCategories: ["Fashion"],
        priceMin: 50,
        priceMax: 300,
      },
      {
        username: "home_chef",
        email: "chef@example.com",
        preferredCategories: ["Home & Kitchen", "Fashion"],
        priceMin: 40,
        priceMax: 500,
      },
      {
        username: "fitness_junkie",
        email: "fitness@example.com",
        preferredCategories: ["Sports & Outdoors"],
        priceMin: 40,
        priceMax: 1200,
      },
      {
        username: "all_rounder",
        email: "allround@example.com",
        preferredCategories: [
          "Electronics",
          "Fashion",
          "Home & Kitchen",
          "Sports & Outdoors",
        ],
        priceMin: 40,
        priceMax: 3000,
      },
    ]);

    console.log(`✓ Inserted ${users.length} users`);

    // EVENTS
    const events = [
      // Tech
      { userId: users[0]._id, productId: products[0]._id, eventType: "view" },
      { userId: users[0]._id, productId: products[0]._id, eventType: "cart" },
      { userId: users[0]._id, productId: products[2]._id, eventType: "view" },
      { userId: users[0]._id, productId: products[2]._id, eventType: "purchase" },

      // Fashion
      { userId: users[1]._id, productId: products[3]._id, eventType: "view" },
      { userId: users[1]._id, productId: products[4]._id, eventType: "view" },
      { userId: users[1]._id, productId: products[5]._id, eventType: "cart" },
      { userId: users[1]._id, productId: products[5]._id, eventType: "purchase" },

      // Home Chef
      { userId: users[2]._id, productId: products[6]._id, eventType: "view" },
      { userId: users[2]._id, productId: products[8]._id, eventType: "view" },
      { userId: users[2]._id, productId: products[6]._id, eventType: "purchase" },

      // Fitness
      { userId: users[3]._id, productId: products[9]._id, eventType: "view" },
      { userId: users[3]._id, productId: products[10]._id, eventType: "view" },
      { userId: users[3]._id, productId: products[11]._id, eventType: "view" },
      { userId: users[3]._id, productId: products[9]._id, eventType: "purchase" },

      // All-rounder
      { userId: users[4]._id, productId: products[1]._id, eventType: "view" },
      { userId: users[4]._id, productId: products[5]._id, eventType: "view" },
      { userId: users[4]._id, productId: products[8]._id, eventType: "view" },
      { userId: users[4]._id, productId: products[9]._id, eventType: "cart" },
    ];

    await Event.insertMany(events);
    console.log(`✓ Inserted ${events.length} events`);

    console.log("🎉 Database seeding completed successfully!");
  } catch (err) {
    console.error("❌ Seeding Error:", err);
  }
}

export default seedDatabase;
