import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiServer } from "../constant/apiclient";
import type {
  MarketResult,
} from "../types/market.type";
import type { FormValues } from "../screen/ResultDialog";

/* ---------------- GET ALL ---------------- */

export const useMarketResults = () => {
  return useQuery<MarketResult[]>({
    queryKey: ["market-results"],
    queryFn: async () => {
      const { data } = await apiServer.get("/result-list");
      return data.data;
    },
  });
};

/* ---------------- CREATE ---------------- */

export const useCreateMarketResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: FormValues) => {
      const { data } = await apiServer.post(
        "/create-market-result",
        payload
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["market-results"],
      });
    },
  });
};
/* ---------------- UPDATE ---------------- */

export const useUpdateMarketResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string;
      payload: FormValues;
    }) => {
      const { data } = await apiServer.put(
        `/result-update/${id}`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["market-results"],
      });
    },
  });
};