const express = require('express');
/* import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  createBrandController,
  deleteBrandController,
  getAllBrandController,
  getSingleBrandController,
  updateBrandController
} from "../controller/brandController.js" */

const router = express.Router();

//create brand with post method
router.post('/create-brand', requireSignIn, isAdmin, createBrandController);

//Update brand with put method

router.put('/update-brand/:id', requireSignIn, isAdmin, updateBrandController);

//delete brand with delete methods
router.delete(
  "/delete-brand/:id", requireSignIn, isAdmin, deleteBrandController
);

// get all brand
router.get("/gets-brand", getAllBrandController);

// get single brand

router.get("/getSingle-brand/:slug", getSingleBrandController);


export default router;