import jwt, { SignOptions } from "jsonwebtoken";
export interface JwtPayload {
    _id: string;
    role: "admin" | "superadmin";
    email?: string;
};
export const generateAccessToken = (
    payload: JwtPayload,
    expiresIn: string = "15m"
): string => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        expiresIn: expiresIn as any
    });
};
export const verifyAccessToken = (token: string): JwtPayload => {
    try {
        const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
        return jwt.verify(token, ACCESS_TOKEN_SECRET) as JwtPayload;
    } catch (error) {
        throw new Error("Invalid or expired access token");
    }
};