// hooks/useMarket.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiServer } from "../constant/apiclient";
// import { Market, MarketPayload } from "../types/market";
// types/market.ts

export interface Market {
  id: string;
  market_name: string;
  open_time: string;
  close_time: string;
  result_time: string;
  status: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export type MarketPayload = Omit<
  Market,
  "id" | "createdAt" | "updatedAt"
>;

/* ---------------- GET ---------------- */
export const useMarkets = () => {
  return useQuery<Market[]>({
    queryKey: ["markets"],
    queryFn: async () => {
      const { data } = await apiServer.get("/markets");
      return data?.data || data;
    },
  });
};

/* ---------------- CREATE ---------------- */
export const useCreateMarket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: MarketPayload) => {
      const { data } = await apiServer.post("/markets", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markets"] });
    },
  });
};

/* ---------------- UPDATE ---------------- */
export const useUpdateMarket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string;
      payload: MarketPayload;
    }) => {
      const { data } = await apiServer.put(`/markets/${id}`, payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["markets"] });
    },
  });
};
