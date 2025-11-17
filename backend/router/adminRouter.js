import express from "express"
import { numOfDepartements, numOfHODs, numOfprofessors, numOfStudents, showAddUsers, showAdminDashBoard, showDepartments, showUsers } from "../controllers/adminController.js";
import userRouter from "./userRouter.js";
const adminRouter = express.Router();

adminRouter.use("/users",userRouter);

adminRouter.get("/", showAdminDashBoard);

adminRouter.get("/numOfProfessors", numOfprofessors);

adminRouter.get("/numOfDepartements", numOfDepartements);

adminRouter.get("/numOfStudents", numOfStudents);

adminRouter.get("/numOfHODs", numOfHODs);

adminRouter.get("/navigateDepartments", showDepartments);

adminRouter.get("/navigateUsers", showUsers);

adminRouter.get("/navigateAddUsers", showAddUsers);

export default adminRouter;