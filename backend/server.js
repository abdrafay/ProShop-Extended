const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const products = require("./data/products");
// Env Config
dotenv.config();
// Connecting To Database
connectDB();

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`)
);
