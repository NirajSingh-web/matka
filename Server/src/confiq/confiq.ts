import mongoose from "mongoose";
const connectDB = async (): Promise<void> => {
    try {
        console.log(process.env.MONGO_URI)
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;