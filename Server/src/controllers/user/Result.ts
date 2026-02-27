import { Request, Response } from "express";
import { Market } from "../../model/market.model";
import { MarketResult } from "../../model/result.model";
import { AuthRequest } from "../../middleware/auth.middlware";
const convertISTtoUTC = (istDateString: string): Date => {
    const istDate = new Date(istDateString.replace(" ", "T") + "+05:30");
    return new Date(istDate.toISOString());
};
export const getPivotMarketResults = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const { _id } = req.user || {}
        const { start_date, end_date } = req.query;
        let filter: any = { createdBy: _id };
        if (start_date && end_date) {
            const utcStart = convertISTtoUTC(start_date as string);
            const utcEnd = convertISTtoUTC(end_date as string);
            filter.result_time = {
                $gte: utcStart,
                $lte: utcEnd
            };
        };
        const markets = await Market.find({ createdBy: _id }).select("market_name");
        const results = await MarketResult.find(filter)
            .populate("market_id", "market_name")
            .sort({ result_time: -1 });
        if (!results.length) {
            return res.status(200).json({
                success: true,
                headers: [],
                data: []
            });
        }
        const groupedByDate: any = {};
        results.forEach((item: any) => {
            const dateKey = item.result_time.toISOString().split("T")[0];
            if (!groupedByDate[dateKey]) {
                groupedByDate[dateKey] = {};
            };
            const marketName = item.market_id.market_name;
            groupedByDate[dateKey][marketName] = item.result;
        });
        const headers = [
            "SN",
            "Date",
            ...markets.map((m) => m.market_name)
        ];
        const data = Object.keys(groupedByDate).map((date, index) => {
            const row: any = {
                SN: index + 1,
                Date: date
            };
            markets.forEach((m) => {
                row[m.market_name] =
                    groupedByDate[date][m.market_name] || "-";
            });
            return row;
        });

        return res.status(200).json({
            success: true,
            headers,
            data
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getLiveResult = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const { _id } = req.user || {}
        const now = new Date();
        const markets = await Market.find({ createdBy: _id }).select(
            "_id market_name close_time result_time"
        );
        const marketIds = markets.map(m => m._id);
        const results = await MarketResult.find({
            market_id: { $in: marketIds },
            result_time: { $lte: now }
        })
            .sort({ result_time: -1 })
            .limit(2)
            .populate("market_id", "market_name close_time result_time");
        if (!results.length) {
            return res.json({
                current: null,
                previous: null
            });
        }
        const formatResult = (data: any) => {
            const market = data.market_id;
            if (now >= market.close_time && now < market.result_time) {
                return null;
            }
            return {
                market_name: market.market_name,
                result: data.result,
                result_time: data.result_time
            };
        };
        return res.json({
            current: results[0] ? formatResult(results[0]) : null,
            previous: results[1] ? formatResult(results[1]) : null
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }
};