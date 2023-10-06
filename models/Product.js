const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the product schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
    },
    description: String,
    price: {
      type: Number,
      required: [true, "Product price is required."],
      min: [0, "Price cannot be negative."],
    },
    quantity: {
      type: Number,
      default: 0,
      min: [0, "Quantity cannot be negative."],
    },
    category: String,
    image: String,
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
