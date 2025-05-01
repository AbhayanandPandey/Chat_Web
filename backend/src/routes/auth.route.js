import express from 'express';
import { signup, login, logout, updateProfile } from '../controllers/auth.controllers.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.put('/update-profile', isAuthenticated, updateProfile);


export default router