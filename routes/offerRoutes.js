const express = require('express');
const formidable = require('express-formidable');
/* import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  createOffersProductController,
  deleteOffersProductController,
  getAllOffersProductController,
  getSingleOffersProductController,
  offersProductPhotoController,
  updateOffersProductController,
} from "../controller/offerController.js"; */

const router = express.Router();

//Create offers with post methods
router.post("/create-offer-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createOffersProductController
);

// Get all offers 
router.get("/get-offers-products", getAllOffersProductController);

// Get single Offers
router.get("/get-single-offers-product/:slug",
  getSingleOffersProductController
);

// Update offers with Put Method
router.put("/update-offer-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateOffersProductController
);

// Delete offers
router.delete("/delete-offers-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  deleteOffersProductController
);

// Get product Photos
router.get("/offer-product-photo/:pid", offersProductPhotoController);

export default router;