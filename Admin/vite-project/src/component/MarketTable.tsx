import { useState } from "react";
import { useMarkets, type Market } from "../hook/useMarket";
import MarketDialog from "../screen/MarketDialog";
import LoadingPage from "./Loadingpage";
import PageHeadline from "./PageHeadLine";
import { motion } from "framer-motion";

export const MarketTable: React.FC = () => {
  const { data: markets, isLoading } = useMarkets();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Market | null>(null);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="relative min-h-screen flex items-start justify-center 
                    bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 
                    px-6 py-10 text-slate-200">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-6xl backdrop-blur-xl 
                   bg-slate-900/60 border border-slate-700 
                   shadow-2xl rounded-3xl p-8"
      >

        <PageHeadline
          title="Market"
          rightComponent={
            <button
              onClick={() => {
                setSelected(null);
                setOpen(true);
              }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                         hover:opacity-90 px-5 py-2 rounded-xl text-sm 
                         font-medium transition shadow-lg shadow-purple-700/30"
            >
              + Create Market
            </button>
          }
        />

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">

          <table className="min-w-full text-sm">

            <thead className="bg-slate-800/70 text-slate-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 text-left">Market</th>
                <th className="p-4 text-center">Open</th>
                <th className="p-4 text-center">Close</th>
                <th className="p-4 text-center">Result</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {markets?.map((market) => (
                <tr
                  key={market.id}
                  className="border-t border-slate-800 hover:bg-slate-800/50 transition"
                >
                  <td className="p-4 font-medium text-slate-300">
                    {market.market_name}
                  </td>

                  <td className="p-4 text-center text-slate-400">
                    {market.open_time}
                  </td>

                  <td className="p-4 text-center text-slate-400">
                    {market.close_time}
                  </td>

                  <td className="p-4 text-center text-slate-400">
                    {market.result_time}
                  </td>

                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        market.status
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {market.status ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => {
                        setSelected(market);
                        setOpen(true);
                      }}
                      className="text-indigo-400 hover:text-pink-400 font-medium transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </motion.div>

      <MarketDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        editData={selected}
      />
    </div>
  );
};