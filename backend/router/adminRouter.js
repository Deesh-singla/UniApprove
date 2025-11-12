import express from "express"
import { numOfDepartements, numOfHODs, numOfprofessors, numOfStudents, showAdminDashBoard } from "../controllers/adminController.js";
const adminRouter = express.Router();
adminRouter.get("/", showAdminDashBoard);

adminRouter.get("/numOfProfessors", numOfprofessors);

adminRouter.get("/numOfDepartements", numOfDepartements);

adminRouter.get("/numOfStudents", numOfStudents);

adminRouter.get("/numOfHODs", numOfHODs);
export default adminRouter;