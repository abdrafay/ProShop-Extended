const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// Env Config
dotenv.config();
// Connecting To Database
connectDB();
app.use(express.json())


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`)
);
