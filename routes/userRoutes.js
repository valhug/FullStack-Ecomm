const express = require('express');

import { get } from 'http';
import {
  deleteUserController,
  getAllUserController,
  updateUserController,
} from '../controllers/userController.js';
import { isAdmin, requireSignIn } from "../helper/authHelper.js";

const router = express.Router();

//Get all Users
router.get("/get-all-users", getAllUserController);
/* 
//Get single User
router.get("/single-user/aid");

// Update admin-user
router.put("/update-user-admin", requireSignIn, isAdmin, updateUserController); */

//delete user
router.delete("/delete-user/:id", requireSignIn, isAdmin, deleteUserController);

export default router;