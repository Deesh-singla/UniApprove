import express from "express"
import { addDepartment } from "../controllers/departmentController.js";
import { showDepartments } from "../controllers/adminController.js";

const departmentRouter = express.Router();

departmentRouter.post("/addDepartment", addDepartment)

departmentRouter.get("/getDepartments", showDepartments)

export default departmentRouter;