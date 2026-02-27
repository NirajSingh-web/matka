import express from "express";
import cors from "cors";
import adminRoute from "./routes/admin.routes";
import userRoute from "./routes/user.routes";
import connectDB from "./confiq/confiq";
import dotenv from 'dotenv';
dotenv.config()
const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
});