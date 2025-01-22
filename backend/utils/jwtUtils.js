import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "helloworld";
const JWT_EXPIRES_IN = '1h';

export const generateAccessToken = (userId) => {
    return jwt.sign({userId}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
}

export const generateRefreshToken = (userId) =>{
    return jwt.sign({userId}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
}

export const verifyToken = (token) =>{
    return jwt.verify(token, JWT_SECRET);
}