import { MONGO_URL } from "./env.js";
import mongoose from "mongoose";

export default async function connectDB():Promise<void>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("database connected successfully");
    }
    catch{
        console.log("could not connect database");
    }
}
