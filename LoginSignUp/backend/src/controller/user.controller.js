import {User} from '../models/user.model.js';
import { asyncHandler } from '../utils/auth.js';

// Cookie options configuration
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

const generateTokens = async (user) => {
    try {
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        console.error('Error generating tokens:', error);
        throw new Error('Something went wrong while generating tokens');
    }
};


export const RegisterUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, password } = req.body;

    if ([username, email, fullname, password].some(field => !field || field.trim() === "")) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if(password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    const existingUser = await User.findOne({
        $or: [{ username: username.trim().toLowerCase() }, { email: email.trim().toLowerCase() }]
    });

    if (existingUser) {
        return res.status(409).json({ message: 'Username or Email already exists' });
    }

    const user = await User.create({
        username: username.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        fullname: fullname.trim(), 
        password
    });

    const { accessToken, refreshToken } = await generateTokens(user);

    const createdUser = await User.findById(user._id).select('-password -refreshToken -__v');

    if (!createdUser) {
        return res.status(500).json({ message: "Something Went Wrong While Registration" });
    }

    return res
        .status(201)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json({
            message: "User Registered Successfully",
            user: createdUser,
            accessToken, 
            refreshToken
        });
});

export const LoginUser = asyncHandler(async(req , res) => {
    const {username, email, password} = req.body;

    if(!username ||!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const user = await User.findOne({
        $or:[{username: username},{email:email}]
        
    });
    if(!user) {
        return res.status(404).json({ message: 'User not found, Kindly Make Id' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid){
        return res.status(401).json({message: 
            "Invalid Password or Username"
        });
    }
    const {accessToken, refreshToken} = await generateTokens(user);

    const loggedInUser = await User.findById(user._id).select('-password -refreshToken -__v');
    if(!loggedInUser) {
        return res.status(500).json({ message: "Something Went Wrong While Logging In" });
    }

    const options = {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        message :"User Logged In Successfully",
        user: loggedInUser,
    })
});

