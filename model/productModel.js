const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Mandatory field
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  regularPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Objectid,
    ref: "Category",
    required: true,
  },
  brand: {
    type: mongoose.ObjectId,
    ref: "BrandName",
    required: true,
  },
  productQuantity: {
    type: Number, 
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  shipping: {
    type: Boolean,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;