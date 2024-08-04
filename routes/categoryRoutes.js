const express = require('express');
/* import { isAdmin, requireSignIn } from "../helper/authHelper.js"
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController
} from "../controller/categoryController.js";
import { resourceUsage } from "process";
 */
const router = express.Router();

// create category with post method
router.post('/create-category', 
  requireSignIn, 
  isAdmin,
  createCategoryController
);

// update category with put Method
router.put('/update-category/:id',
  requireSignIn,
  isAdmin, 
  updateCategoryController
);

// get all category with get Method
router.get('/gets-category', categoryController);

// set single category with get Method
router.get('/single-category/:slug', singleCategoryController);

// delete category with delete Methods
router.delete('/delete-category/:id',
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;