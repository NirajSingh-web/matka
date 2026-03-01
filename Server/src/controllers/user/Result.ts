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
function getFinancialYear() {
  const now = new Date();
  let startYear: number, endYear: number;

  if (now.getMonth() + 1 >= 4) {
    startYear = now.getFullYear();
    endYear = now.getFullYear() + 1;
  } else {
    startYear = now.getFullYear() - 1;
    endYear = now.getFullYear();
  }
  const start = new Date(startYear, 3, 1); 
  const end = new Date(endYear, 2, 31, 23, 59, 59); 
  return { start, end, startYear, endYear };
}

export const getMarketCalendar = async (req: Request, res: Response) => {
  try {
    const { market_id } = req.query; 
    if (!market_id) {
      return res.status(400).json({ success: false, message: "market_id is required" });
    }
    const market = await Market.findOne({ _id: market_id, status: true });
    if (!market) {
      return res.status(404).json({ success: false, message: "Market not found or inactive" });
    };
    const { start, end, startYear, endYear } = getFinancialYear();
    const results = await MarketResult.find({
      market_id: market._id,
      result_time: { $gte: start, $lte: end }
    });
    const resultMap: Record<string, string> = {};
    results.forEach(r => {
      const dayStr = r.result_time.toISOString().slice(0, 10);
      resultMap[dayStr] = r.result;
    });
    const months = [
      { name: "APR", month: 3 },
      { name: "MAY", month: 4 },
      { name: "JUN", month: 5 },
      { name: "JUL", month: 6 },
      { name: "AUG", month: 7 },
      { name: "SEP", month: 8 },
      { name: "OCT", month: 9 },
      { name: "NOV", month: 10 },
      { name: "DEC", month: 11 },
      { name: "JAN", month: 0 },
      { name: "FEB", month: 1 },
      { name: "MAR", month: 2 },
    ];

    // Build calendar: 31 days × 12 months
    const calendar: any[] = [];
    for (let day = 1; day <= 31; day++) {
      const row: Record<string, string | number> = { day };
      months.forEach((m, idx) => {
        let year = idx <= 8 ? startYear : endYear; // APR→DEC: startYear, JAN→MAR: endYear
        const dateStr = new Date(year, m.month, day).toISOString().slice(0, 10);
        row[m.name] = resultMap[dateStr] || "";
      });
      calendar.push(row);
    }

    return res.json({
      success: true,
      market: market.market_name,
      year: `${startYear}-${endYear}`,
      months: months.map(m => m.name),
      calendar
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: (err as Error).message
    });
  }
};