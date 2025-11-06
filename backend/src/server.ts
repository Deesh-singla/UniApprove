import express from "express"
import connectDB from "./config/db.js";
import authRouter from "./Router/authRouter.js";
const app = express();

connectDB();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.send("ldkfm");
})
app.post("/auth", (req, res) => {
  console.log("POST /auth hit!");
  res.send("lkdnfb");
});

app.use("/auth",authRouter);


app.listen("3000", () => {
    console.log("app running at port 3000");
})