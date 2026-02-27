const mongoose = require("mongoose");

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

module.exports = mongoose.model("Fashion", fashionSchema);