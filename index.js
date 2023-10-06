const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");
const bodyParser = require("body-parser");
const cors = require('cors')
require("dotenv").config();
const App = express();
App.use(bodyParser.json());
App.use(cors());
App.listen(process.env.PORT, () => console.log("server started"));
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log("db connected"))
  .catch((err) => console.log(err));
App.use("/uploads", express.static("uploads"));
App.use("/products", productRoutes);
