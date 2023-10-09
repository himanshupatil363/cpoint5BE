const Product = require("../models/Product");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage });

const addProduct = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload error" });
      }
      const { name, price, description, quantity, category } = req.body;
      console.log({ name, price, description, quantity, category });
      if (
        !name ||
        !price ||
        !description ||
        !quantity ||
        !category ||
        !req?.file?.filename
      ) {
        return res.status(400).json({ message: "Please send all fields" });
      }
      const product = new Product({
        name,
        price,
        description,
        quantity,
        category,
        image: req.file.filename,
      });
      await product.save();
      res.status(201).json({ message: "Product added successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProducts, addProduct, upload };
