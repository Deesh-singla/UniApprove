import express from "express"
import { addDepartment, deleteDepartment, editDepartment } from "../controllers/departmentController.js";

const departmentRouter = express.Router();

departmentRouter.post("/addDepartment", addDepartment)

departmentRouter.get("/deleteDepartment", deleteDepartment);

departmentRouter.post("/editDepartment", editDepartment)

export default departmentRouter;