require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let connectDB=require("../config/db")

const app = express();

connectDB();

// ===============================
// DATABASE CONNECTION
// ===============================


// ===============================
// MIDDLEWARE
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// MODELS
// ===============================

// Fashion Model
const fashionSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    dressType: { type: String, required: true },
    price: { type: Number, required: true },
    colorOptions: [String],
    sizeAvailable: [String],
    fabric: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const Fashion = mongoose.model("Fashion", fashionSchema);

// Measurement Model
const measurementSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    height: Number,
    weight: Number,
    chest: Number,
    waist: Number,
    hip: Number,
    shoulder: Number,
    bodyShape: String,
    recommendedSize: String,
  },
  { timestamps: true }
);

const Measurement = mongoose.model("Measurement", measurementSchema);

// ===============================
// SIZE CALCULATION LOGIC
// ===============================
const calculateSize = (chest, waist) => {
  if (chest <= 34 && waist <= 28) return "S";
  if (chest <= 38 && waist <= 32) return "M";
  if (chest <= 42 && waist <= 36) return "L";
  return "XL";
};

// ===============================
// HOME ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("👗 Smart AI Boutique API Running...");
});

// ===============================
// FASHION ROUTES
// ===============================

// CREATE
app.post("/api/fashion", async (req, res) => {
  try {
    const fashion = await Fashion.create(req.body);
    res.status(201).json(fashion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET ALL
app.get("/api/fashion", async (req, res) => {
  try {
    const fashions = await Fashion.find();
    res.json(fashions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
app.put("/api/fashion/:id", async (req, res) => {
  try {
    const updated = await Fashion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
app.delete("/api/fashion/:id", async (req, res) => {
  try {
    await Fashion.findByIdAndDelete(req.params.id);
    res.json({ message: "Fashion Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// MEASUREMENT ROUTES
// ===============================

// CREATE MEASUREMENT
app.post("/api/measurements", async (req, res) => {
  try {
    const { chest, waist } = req.body;

    const recommendedSize = calculateSize(chest, waist);

    const measurement = await Measurement.create({
      ...req.body,
      recommendedSize,
    });

    res.status(201).json(measurement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET ALL MEASUREMENTS
app.get("/api/measurements", async (req, res) => {
  try {
    const data = await Measurement.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// SERVER START
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});