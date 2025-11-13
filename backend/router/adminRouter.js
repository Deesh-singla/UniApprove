import express from "express"
import { numOfDepartements, numOfHODs, numOfprofessors, numOfStudents, showAdminDashBoard, showDepartments, showUsers } from "../controllers/adminController.js";
const adminRouter = express.Router();
adminRouter.get("/", showAdminDashBoard);

adminRouter.get("/numOfProfessors", numOfprofessors);

adminRouter.get("/numOfDepartements", numOfDepartements);

adminRouter.get("/numOfStudents", numOfStudents);

adminRouter.get("/numOfHODs", numOfHODs);

adminRouter.get("/navigateDepartments", showDepartments);

adminRouter.get("/navigateUsers", showUsers);

adminRouter.get("/navigateAddUsers", showUsers);

export default adminRouter;