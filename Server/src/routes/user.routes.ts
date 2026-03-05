import express from "express";
import { userAuth } from "../middleware/auth.middlware";
import { getLiveResult, getPivotMarketResults } from "../controllers/user/Result";
import { getAllMarkets } from "../controllers/user/Market";
const userRoute = express.Router();
userRoute.get("/result-stats", userAuth, getPivotMarketResults);
userRoute.get("/live-result", userAuth, getLiveResult);
userRoute.get("/get-market", userAuth, getAllMarkets);
export default userRoute;