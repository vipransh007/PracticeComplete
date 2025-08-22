import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/auth.js';
import dotenv from 'dotenv';
dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const VerifyJWT = asyncHandler(async(req , res, next) => {
    const token = req.cookies?.accessToken || req.headers('Authorization')?.replace('Bearer ', '');

    if(!token){
        return res.status(401).json({message: 'Access Denied. Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token , ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded?._id).select('-password');

        if(!user){
            return res.status(401).json({message: 'User not found'});
        }
        req.user = user;
        next();
    }
    catch(error){
        return res.status(401).json({message: 'Invalid Token'});
    }
})