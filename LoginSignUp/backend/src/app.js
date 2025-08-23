import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,   
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Test route to verify backend is working
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working! 🚀' });
});

import route from "./routes/user.routes.js";

app.use("/api/v1/user", route);

export {app}