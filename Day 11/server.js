require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ DB Error:", err.message));

// ===============================
// Schema & Model
// ===============================
const fashionSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    dressType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colorOptions: [String],
    sizeAvailable: [String],
    fabric: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", fashionSchema);

// ===============================
// CRUD OPERATIONS
// ===============================

// 1️⃣ CREATE Product
app.post("/products", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const products = await Product.insertMany(req.body);
      return res.status(201).json(products);
    } else {
      const product = new Product(req.body);
      const savedProduct = await product.save();
      return res.status(201).json(savedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 2️⃣ READ All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3️⃣ READ Single Product
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4️⃣ UPDATE Product
app.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 5️⃣ DELETE Product
app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// Server Listen
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});