import { Request, Response } from "express";
import { MarketResult } from "../../model/result.model";
import { createMarketResultSchema } from "../../validation/validation";
const convertISTtoUTC = (istDateString: string): Date => {
    const istDate = new Date(istDateString.replace(" ", "T") + "+05:30");
    return new Date(istDate.toISOString());
};
export const createMarketResult = async (req: Request, res: Response) => {
    try {
        const { error, value } = createMarketResultSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        };
        const { market_id, symbol, result, status, result_time } = value;
        const utcResultTime = convertISTtoUTC(result_time);
        const newResult = await MarketResult.create({
            market_id,
            symbol,
            result,
            status,
            result_time: utcResultTime
        });
        return res.status(201).json({
            success: true,
            data: newResult
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Result already exists for this market and symbol"
            });
        }
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const getAllMarketResults = async (_req: Request, res: Response) => {
    try {
        const results = await MarketResult.find()
            .populate("market_id")
            .sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            count: results.length,
            data: results
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export const getResultsByMarket = async (req: Request, res: Response) => {
    try {
        const { market_id } = req.params;

        const results = await MarketResult.find({ market_id })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: results
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ✅ DELETE
export const deleteMarketResult = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await MarketResult.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Market result not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Market result deleted successfully"
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const updateMarketResult = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const value = req.body;
        if (value.result_time) {
            value.result_time = convertISTtoUTC(value.result_time);
        }
        const updated = await MarketResult.findByIdAndUpdate(
            id,
            value,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Market result not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updated
        });

    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Duplicate result for this market and symbol"
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};