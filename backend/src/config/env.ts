import dotenv from "dotenv"
dotenv.config();
if(!process.env.MONGO_URL){
    throw new Error("MONGO_URL is missing!")
}
if(!process.env.JWT_SECRET){
    throw new Error("MONGO_URL is missing!")
}

const MONGO_URL=process.env.MONGO_URL;
const JWT_SECRET=process.env.JWT_SECRET;

export {MONGO_URL,JWT_SECRET};