import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './lib/db.js';
connectDB();
import authRoutes from './routes/auth.route.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/auth',authRoutes)
app.use(express.json()); // <-- important
app.use(express.urlencoded({ extended: true })); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);