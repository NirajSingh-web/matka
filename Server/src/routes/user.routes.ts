import express from "express";
import { userAuth } from "../middleware/auth.middlware";
import { getLiveResult, getPivotMarketResults } from "../controllers/user/Result";
const userRoute = express.Router();
userRoute.get("/result-stats",userAuth,getPivotMarketResults);
userRoute.get("/live-result",userAuth,getLiveResult);
export default userRoute;