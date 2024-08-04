const express = require('express');
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  allAdminOrderController,
  allOrderController,
} from "../controller/orderController.js";

const router = express.Router();

// all user order
router.get("/user-orders", requireSignIn, allOrderController);

// all admin order
router.get("/admin-orders", requireSignIn, isAdmin, allAdminOrderController);

export default router;