import express from "express"
import connectdb from "./config/db.js"
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRouter from "./router/authRouter.js";
import adminRouter from "./router/adminRouter.js";
import verifyuser from "./middlewares/verifyUser.js";
import dashboardRouter from "./router/dashboardRouter.js";
import verifyToken from "./middlewares/verifyUser.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
connectdb();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index");
})

app.use("/auth", authRouter);

app.use("/dashboard",verifyuser,dashboardRouter)

app.use("/admin",verifyToken, adminRouter);




app.listen("3000", () => {
    console.log("app is running on port 3000");
})