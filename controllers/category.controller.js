const Category = require("../models/Categories");
const addCategory = async (req, res) => {
  try {
    const { name, discount } = req.body;
    const category = new Category({
      name,
      discount,
    });
    await category.save();
    res.status(201).json({ message: "Category added successfully" });
  } catch (err) {
    res.status(400).json({ message: "Category addition failed" });
  }
};
const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = { addCategory, getCategory };
