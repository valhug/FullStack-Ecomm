const express = require('express');
/* import {
  forgotPasswordController,
  loginController,
  registerController,
  updateAdminProfileController,
  updateProfileController,
} from "../Controller/authController.js" */
/* 
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import { allOrderController } from "../controller/orderController.js" */

const router = express.Router();

// Register with post method
router.post('/register', registerController);

// Login with post method
router.post('/login', loginController);

// Forgot-password post method
router.post('/forgot-password', forgotPasswordController);

// protected routes for user
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ok: true});
});

// Protected routes for Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ok: true });
});

// Update user Profile 
/* router.put("/update-profile", requireSignIn, updateProfileController); */

// Update Admin Profile

router.put('/update-admin-profile',
  requireSignIn,
  isAdmin,
  updateAdminProfileController
);

export default router;