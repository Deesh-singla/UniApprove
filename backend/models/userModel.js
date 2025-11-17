import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    phone: Number,
    department: { ref: "department", type: mongoose.Types.ObjectId },
    role: { type: String, enum: ["Student", "Professor", "HOD"] }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;