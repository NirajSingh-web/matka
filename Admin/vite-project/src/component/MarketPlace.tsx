import React from "react";
import { motion } from "framer-motion";
import PageHeadline from "./PageHeadLine";
import AddMarketDialog from "./AddMarketDialog.tsx";
import {
  useMarketResults,
  useCreateMarketResult,
} from "../hook/useMarketResult";
import { useMarkets } from "../hook/useMarket";
import { MarketResult } from "../types/market.type.ts";

const MarketSection: React.FC = () => {
  const { data: markets = [] } = useMarkets();

  const {
    data: results = [],
    isLoading,
  } = useMarketResults();

  const { mutate: createResult } = useCreateMarketResult();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleAddMarket = (formData: any) => {
    createResult(formData, {
      onSuccess: () => {
        setIsDialogOpen(false);
      },
    });
  };

  if (isLoading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 p-10 text-slate-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto bg-slate-900 p-8 rounded-3xl shadow-2xl"
      >
        <div className="flex justify-between items-center">
          <PageHeadline title="Market Results" />

          <button
            onClick={() => setIsDialogOpen(true)}
            className="px-5 py-2 rounded-xl text-white 
                       bg-gradient-to-r from-green-600 to-emerald-500"
          >
            + Add Result
          </button>
        </div>

        <div className="mt-6 border border-slate-700 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-400">
              <tr>
                <th className="px-6 py-4 text-left">Market</th>
                <th className="px-6 py-4 text-left">Result</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created</th>
              </tr>
            </thead>

            <tbody>
              {results.map((item: MarketResult) => (
                <tr key={item._id} className="border-t border-slate-800">
                  <td className="px-6 py-4">
                    {item.market_id?.market_name}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {item.result}
                  </td>

                  <td className="px-6 py-4">
                    {item.status ? "Active" : "Inactive"}
                  </td>

                  <td className="px-6 py-4">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <AddMarketDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddMarket}
        markets={markets}
      />
    </div>
  );
};

export default MarketSection;