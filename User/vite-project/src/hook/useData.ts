import { useQuery } from "@tanstack/react-query";
import { capMarketServer } from "../constant/apiclient";
export interface MarketItem {
  _id: string;
  market_name: string;
  today_result: string | null;
  result_time:string;
  yesterday_result: string | null;
}
export interface MarketResponse{
    data:MarketItem[]
}
export const useGetAllMarkets = () => {
    return useQuery<MarketResponse, Error>({
        queryKey: ["markets"],
        queryFn: async () => {
            const { data } = await capMarketServer.get("/get-market");
            return data;
        },
        staleTime: 1000 * 60 * 1, 
        refetchOnWindowFocus: false,
    });
};
export interface LiveResult {
  current: MarketResult | null;
  upcoming: MarketResult | null;
}

interface MarketResult {
  gameName: string;
  current_result: string | null;
  prev_result: string | null;
}
export const useGetLiveResult = () => {
    return useQuery<LiveResult, Error>({
        queryKey: ["liveResult"],
        queryFn: async () => {
            const { data } = await capMarketServer.get("/live-result");
            return data;
        },
        refetchInterval: 10000,
        refetchOnWindowFocus: false,
    });
};
export interface ResultRow {
  SN: number;
  Date: string;
  [marketName: string]: string | number;
}
export interface MarketResultResponse {
  success: boolean;
  headers: string[];
  data: ResultRow[];
}
export const useGetPivotMarketResults = () => {
    return useQuery<any, Error>({
        queryKey: ["pivotResults"],
        queryFn: async () => {
            const { data } = await capMarketServer.get("/result-stats");
            return data;
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
};
export interface MarketCalendarRow {
  day: number;
  APR: string;
  MAY: string;
  JUN: string;
  JUL: string;
  AUG: string;
  SEP: string;
  OCT: string;
  NOV: string;
  DEC: string;
  JAN: string;
  FEB: string;
  MAR: string;
}

export interface MarketCalendarResponse {
  success: boolean;
  market: string;
  year: string;
  months: string[];
  calendar: MarketCalendarRow[];
}
export const useGetMarketCalendar = (marketId?: string,year?: string) => {
  return useQuery<MarketCalendarResponse>({
    queryKey: ["market-calendar", marketId, year],
    enabled: !!marketId && !!year,
    queryFn: async () => {
      const { data } = await capMarketServer.get(
        `/get-calender?market_id=${marketId}&year=${year}`
      );
      return data;
    },
  });
};
