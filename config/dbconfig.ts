import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_DB = process.env.MONGODB_DB;
const MONGODB_OPTIONS = process.env.MONGODB_OPTIONS;

const MONGODB_URI = `mongodb://${MONGODB_USER}:${encodeURIComponent(MONGODB_PASSWORD!)}@${MONGODB_HOST}/${MONGODB_DB}?${MONGODB_OPTIONS}`;

export async function connectToMongo() {

    // Check if Connection state Exists
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("Connection Already established!");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 3000, // Timeout for connection
        });
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("Error Connecting To MongoDB", error);
        throw error;
    }
}