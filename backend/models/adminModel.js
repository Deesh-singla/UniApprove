import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
    username: String,
    email: { type: String, required: true, unique: true },
    password: String
});

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
