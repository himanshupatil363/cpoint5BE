const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the product schema
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
    },
    discount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
