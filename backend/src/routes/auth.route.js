import express from 'express';
import { signup, login, logout, updateProfile, checkAuth } from '../controllers/auth.controllers.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.put('/update-profile', isAuthenticated, updateProfile);
router.get('chech', isAuthenticated, checkAuth);


export default router