const express = require('express');
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getAllProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productPerPageController,
  productPhotoController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controller/productController.js";
const formidable = require('express-formidable');
const router = express.Router();

// create Product with Post Method
router.post("/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Get all Product with Get Method
router.get("/get-all-products", getAllProductController);

// Get single Product with Get Method
router.get("/get-single-product/:slug", getSingleProductController);

// Update product with Put methods
router.put("/update-product/:slug",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Delete product with Delete Method
router.delete("/delete-product/:id",
  requireSignIn,
  isAdmin,
  deleteProductController
);

// Get product Photos
router.get("/product-photo/:pid", productPhotoController);

// Filter product
router.post("/product-filter", productFilterController);

//Count product
router.get("/product-count", productCountController);

//Product per page
router.get("/product-per-pages/:page", productPerPageController);

// Search Product
router.get("/search/:keyword", searchProductController);

//Similar Product by Category and brand
router.get("/related-product/:pid/:cid/:bid", similarProductController);

// payment routers with braintree token
router.get("/braintree/token", braintreeTokenController);

//payment

router.post("/braintree/payment", braintreePaymentController);

export default router;