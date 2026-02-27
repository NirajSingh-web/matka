import mongoose, { Schema, Document, Types } from "mongoose";
export interface IMarketResult extends Document {
    market_id: Types.ObjectId;
    symbol: string;
    result: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    result_time: Date;
};
const MarketResultSchema: Schema = new Schema(
    {
        market_id: {
            type: Schema.Types.ObjectId,
            ref: "Market",
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        symbol: {
            type: String,
            required: true,
            trim: true
        },
        result: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },
        result_time: {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true
    }
);
MarketResultSchema.index({ market_id: 1, symbol: 1 }, { unique: true });
export const MarketResult = mongoose.model<IMarketResult>(
    "MarketResult",
    MarketResultSchema
);