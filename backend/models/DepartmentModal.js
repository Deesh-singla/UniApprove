import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["UG", "PG", "Research"],
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const departmentModel = mongoose.model("department", departmentSchema);

export default departmentModel;
