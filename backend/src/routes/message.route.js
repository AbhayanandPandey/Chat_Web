import express from 'express';
const router = express.Router();
import { getUsers, getUserMessages, sendMessage } from '../controllers/message.controllers.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';

router.get('/users', isAuthenticated, getUsers);
router.get('/:id', isAuthenticated, getUserMessages);
router.post('/send/:id', isAuthenticated, sendMessage);


export default router;
