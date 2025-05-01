import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const generateAccessToken = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, process.env.JWT_EXPIRATION);
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'Strict',
        maxAge: 60*60*1000*24*7, // 7 days
    });
    return token;
}