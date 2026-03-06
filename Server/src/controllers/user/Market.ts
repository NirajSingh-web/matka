import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middlware";
import { Market } from "../../model/market.model";
import { utcToIST_HHMM } from "../../utils/dateTime";
import { MarketResult } from "../../model/result.model";
export const getAllMarkets = async (_req: AuthRequest, res: Response) => {
    try {
        const { _id } = _req.user || {};
        const now = new Date();
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        const startOfYesterday = new Date(startOfToday);
        startOfYesterday.setDate(startOfYesterday.getDate() - 1);
        const markets = await Market.find({
            createdBy: _id,
            status: true
        }).sort({ createdAt: -1 }).lean();
        const marketIds = markets.map(m => m._id);
        const market_results = await MarketResult.find({
            market_id: { $in: marketIds }
        }).sort({ result_time: -1 }).limit(marketIds.length * 10).lean();
        const formattedMarkets = markets.map((market) => {
            const results = market_results.filter(
                r => r.market_id.toString() === market._id.toString()
            );
            const todayResult = results.find(r => {
                const time = new Date(r.result_time);
                return time >= startOfToday && time <= now;
            });
            const yesterdayResult = results.find(r => {
                const time = new Date(r.result_time);
                return time >= startOfYesterday && time < startOfToday;
            });
            return {
                _id: market._id,
                market_name: market.market_name,
                result_time: utcToIST_HHMM(market.result_time),
                today_result: todayResult?.result || "-",
                yesterday_result: yesterdayResult?.result || "-"
            };
        });
        return res.status(200).json({
            success: true,
            count: formattedMarkets.length,
            data: formattedMarkets
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};