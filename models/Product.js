const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Categories = require("./Categories");
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
      required: [true, "Product name is required."],
    },

    category: { type: Schema.Types.ObjectId, ref: "Category" },
    image: { type: String, required: [true, "Image is required."] },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
