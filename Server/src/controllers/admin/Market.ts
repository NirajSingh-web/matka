import { Request, Response } from "express";
import { Market } from "../../model/market.model";
import { AuthRequest } from "../../middleware/auth.middlware";
import { createMarketSchema } from "../../validation/validation";
import { parseTimeToDate, utcToIST_HHMM } from "../../utils/dateTime";

export const createMarket = async (req: AuthRequest, res: Response) => {
    try {
        const { _id: createdBy } = req.user || {}
        const { error, value } = createMarketSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }
        const { market_name, open_time, close_time, result_time, status, } = value;
        const market = await Market.create({
            market_name,
            open_time: parseTimeToDate(open_time),
            close_time: parseTimeToDate(close_time),
            result_time: parseTimeToDate(result_time),
            status,
            createdBy
        });
        return res.status(201).json({
            success: true,
            data: market
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const getAllMarkets = async (_req: AuthRequest, res: Response) => {
  try {
    const {_id}=_req.user||{}
    const markets = await Market.find({createdBy:_id}) 
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
export const updateMarket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedMarket = await Market.findByIdAndUpdate(
            id,
            {
                ...req.body,
                open_time: req.body.open_time ? new Date(req.body.open_time) : undefined,
                close_time: req.body.close_time ? new Date(req.body.close_time) : undefined,
                result_time: req.body.result_time ? new Date(req.body.result_time) : undefined
            },
            { new: true, runValidators: true }
        );

        if (!updatedMarket) {
            return res.status(404).json({
                success: false,
                message: "Market not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedMarket
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ✅ DELETE
export const deleteMarket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Market.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Market not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Market deleted successfully"
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};