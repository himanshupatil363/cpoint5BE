const express = require("express");
const {
  addCategory,
  getCategory,
} = require("../controllers/category.controller");
const {
  getProducts,
  addProduct,
} = require("../controllers/product.controller");
const router = express.Router();
router.get("/", getProducts);
router.post("/add", addProduct);
router.post("/category", addCategory);
router.get("/category", getCategory);

module.exports = router;
