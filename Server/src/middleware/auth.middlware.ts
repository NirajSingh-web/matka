import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/token.utils";
import { extractDomain } from "../utils/domain.utils";
import { Admin } from "../model/admin.model";
import { Types } from "mongoose";
export interface AuthRequest extends Request {
    user?: {
        _id: Types.ObjectId;
        role: "admin" | "superadmin";
        email?: string;
    };
};
export const AdminAuth = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = verifyAccessToken(token) as any;
        req.user = decoded;
        next();
    } catch (error: any) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
export const userAuth = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const origin = req.get("origin");

        if (!origin) {
            return res.status(400).json({
                success: false,
                message: "Origin header is required",
            });
        }

        const domain = extractDomain(origin);

        if (!domain) {
            return res.status(400).json({
                success: false,
                message: "Invalid domain",
            });
        }

        // ⚠️ Recommended: use allowedDomain instead of adminPanel
        const admin = await Admin.findOne({
            allowedDomain: domain,
        }).lean();

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized domain access",
            });
        }

        req.user = {
            _id: admin._id,
            role: admin.role,
            email: admin.email,
        };
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Authentication failed",
        });
    }
};