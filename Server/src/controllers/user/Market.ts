import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middlware";
import { Market } from "../../model/market.model";
import { utcToIST_HHMM } from "../../utils/dateTime";
export const getAllMarkets = async (_req: AuthRequest, res: Response) => {
    try {
        const { _id } = _req.user || {}
        const markets = await Market.find({ createdBy: _id })
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 });
        const formattedMarkets = markets.map(market => ({
            _id: market._id,
            market_name: market.market_name,
            open_time: market.open_time ? utcToIST_HHMM(market.open_time) : null,
            close_time: market.close_time ? utcToIST_HHMM(market.close_time) : null,
            result_time: market.result_time ? utcToIST_HHMM(market.result_time) : null,
            status: market.status,
            createdBy: market.createdBy,
            createdAt: market.createdAt,
            updatedAt: market.updatedAt,
        }));
        return res.status(200).json({
            success: true,
            count: formattedMarkets.length,
            data: formattedMarkets,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};