// routes/products.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ Get all products (with filters)
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice, limit = 50 } = req.query;
    const filter = {};

    if (category) filter.category = category;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: "Invalid product ID" });
  }
});

// ✅ Create product (from frontend)
router.post("/", async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      brand,
      description,
      rating,
      popularityScore,
      image,
    } = req.body;

    // ✅ Basic validation
    if (!name || !category || price == null) {
      return res.status(400).json({
        error: "Name, category, and price are required",
      });
    }

    const product = await Product.create({
      name,
      category,
      price,
      brand,
      description,
      rating,
      popularityScore,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
