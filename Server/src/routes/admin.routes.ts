import express from "express";
import { getAdminDetails, loginAdmin } from "../controllers/admin/auth";
import { AdminAuth } from "../middleware/auth.middlware";
const adminRoute = express.Router();
adminRoute.post("/login", loginAdmin);
adminRoute.get("/details", AdminAuth, getAdminDetails);
export default adminRoute;