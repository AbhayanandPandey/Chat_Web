import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
connectDB();
import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoute)
app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);