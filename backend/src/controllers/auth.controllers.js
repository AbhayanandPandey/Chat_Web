import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateAccessToken } from '../lib/jwt.js';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('signup', req.body);

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long' });
        }  
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
        });

        await newUser.save();

        generateAccessToken(newUser._id, res);

        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const login = (req, res) => {
    res.send('login');
}
export const logout = (req, res) => {
    res.send('logout');
}

