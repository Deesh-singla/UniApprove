import { Request, Response } from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

async function checkPass(user: any, password: string): Promise<Boolean> {
    return await bcrypt.compare(password, user.password);
}

export default async function login(req: Request, res: Response) {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isPasswordValid = await checkPass(user, password);

        if (user.username !== username || !isPasswordValid) {
            return res.status(401).json({ error: "Invalid username, email, or password" });
        }

        const token = jwt.sign({ username, email, id: user._id }, JWT_SECRET)

        return res.status(200).json({ message: "Login successful", token });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ error: err.message || "Server error" });
    }
};
