import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();
import { MONGO_URL } from "./env.js";
export default async function connectdb() {
    try {
        mongoose.connect(MONGO_URL);
        console.log("database connected successfully");
    } catch {
        throw new Error("could not connect to database")
    }
}