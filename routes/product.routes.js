const express = require("express");
const {
  getProducts,
  addProduct,
} = require("../controllers/product.controller");
const router = express.Router();
router.get("/", getProducts);
router.post("/add", addProduct);

module.exports = router;
