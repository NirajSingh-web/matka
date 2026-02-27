import { useQuery } from "@tanstack/react-query";
import { apiServer } from "../constant/apiclient";
import type { MarketItem } from "../types/market.type";

export const useMarketData = () => {
  return useQuery<MarketItem[]>({
    queryKey: ["market-data"],
    queryFn: async () => {
      const { data } = await apiServer.get("/markets");
      return data?.data || [];
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};