const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
//import express from 'express';
/* import mongoose from 'mongoose'; */
/* import dotenv from 'dotenv'; */
/* import cors from 'cors';
import morgan from 'morgan'; */
/* import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import offersRoutes from "./routes/offersRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js"; */

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URL;

// all middlewares goes here

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// mongodb connection here
mongoose.connect(url)
  .then(console.log("Database connection successfully...hurray!!!"))
  .catch((err) => console.log(err));

// routes goes here

/* app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/brand", brandRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/offers/product", offersRoutes);
app.use("/api/v1/admin", userRoutes); */

// test api
app.get('/', (req, res) => {
 res.send("this is testing api");
})

app.get('/kingship', (req, res) => {
  res.send("king is current working....smile")
  console.log("king is current working....smile")
})



  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  })