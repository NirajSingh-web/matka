import mongoose, { Schema, Document, Types } from "mongoose";
export interface IMarket extends Document {
    market_name: string;
    open_time: Date;
    close_time: Date;
    result_time: Date;
    status: boolean;
    createdBy: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
};
const MarketSchema: Schema = new Schema(
    {
        market_name: {
            type: String,
            required: true,
            trim: true
        },
        open_time: {
            type: Date,
            required: true
        },
        close_time: {
            type: Date,
            required: true
        },
        result_time: {
            type: Date,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        }
    },
    {
        timestamps: true
    }
);
export const Market = mongoose.model<IMarket>("Market", MarketSchema);