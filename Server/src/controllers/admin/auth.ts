import { Request, Response } from "express";
import { extractDomain } from "../../utils/domain.utils";
import { Admin } from "../../model/admin.model";
import { generateAccessToken } from "../../utils/token.utils";
import { AuthRequest } from "../../middleware/auth.middlware";
export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const origin = req.get("origin");
        if (!origin) {
            return res.status(400).json({
                success: false,
                message: "Invalid request origin",
            });
        }

        const domain = extractDomain(origin);
        if (!domain) {
            return res.status(400).json({
                success: false,
                message: "Invalid domain",
            });
        }

        const admin = await Admin.findOne({
            email: email.toLowerCase(),
        }).select("+password");

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        if (!admin.adminPanel) {
            return res.status(403).json({
                success: false,
                message: "Admin panel access denied",
            });
        }
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }
        admin.loginAt = new Date();
        await admin.save();
        const accessToken = generateAccessToken({
            _id: admin._id.toString(),
            role: admin.role,
            email: admin.email,
        });
        const adminObj = admin.toObject();
        delete (adminObj as any).password;
        return res.status(200).json({
            success: true,
            message: "Login successful",
            results: {
                data: adminObj,
                accessToken,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
export const getAdminDetails = async (req: AuthRequest, res: Response) => {
    try {
        const adminId = (req as any).user?.id;

        if (!adminId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const admin = await Admin.findById(adminId);

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: admin,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
// export const createAdminService = async (
// ) => {

//     const newAdmin = await Admin.create({
//         phone: "6201269225", email: "nirajsingh4141@gmail.com", password: "Changer@123", role: "admin", adminPanel: "admin.matka.com", userPanel: "user.matka.com"
//     });
//     console.log(newAdmin);
// };
// (async () => {
//     await createAdminService()
// })()