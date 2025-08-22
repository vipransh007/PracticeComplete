import mongoose from "mongoose";
import dotenv from "dotenv";
// import { DB_NAME } from "../constants.js";

const DB_NAME = "resumeProject"; // Define DB_NAME here for simplicity

dotenv.config();
const connectDB = async ()=> {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected successfully! 🚀🚀");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;