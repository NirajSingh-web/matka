import express from "express";
import { userAuth } from "../middleware/auth.middlware";
const userRoute = express.Router();
export default userRoute;