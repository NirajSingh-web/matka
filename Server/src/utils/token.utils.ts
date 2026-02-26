import jwt, { SignOptions } from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
if (!ACCESS_TOKEN_SECRET) {
    throw new Error("JWT secrets are not defined in environment variables");
};
export interface JwtPayload {
    _id: string;
    role: "admin" | "superadmin";
    email?: string;
};
export const generateAccessToken = (
    payload: JwtPayload,
    expiresIn: string = "15m"
): string => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        expiresIn: expiresIn as any
    });
};
export const verifyAccessToken = (token: string): JwtPayload => {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET) as JwtPayload;
    } catch (error) {
        throw new Error("Invalid or expired access token");
    }
};