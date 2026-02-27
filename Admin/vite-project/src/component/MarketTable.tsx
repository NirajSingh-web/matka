import { useState } from "react";
import { useMarkets, type Market } from "../hook/useMarket";
import MarketDialog from "../screen/MarketDialog";
import LoadingPage from "./Loadingpage";
export const MarketTable: React.FC = () => {
  const { data: markets, isLoading } = useMarkets();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Market | null>(null);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          Markets Overview
        </h1>

        <button
          onClick={() => {
            setSelected(null);
            setOpen(true);
          }}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg 
                     text-sm font-medium transition duration-200 shadow-md"
        >
          + Create Market
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

        <table className="min-w-full text-sm">

          {/* Table Head */}
          <thead className="bg-slate-800 text-slate-400 uppercase text-xs tracking-wider">
            <tr>
              <th className="p-4 text-left">Market</th>
              <th className="p-4 text-center">Open</th>
              <th className="p-4 text-center">Close</th>
              <th className="p-4 text-center">Result</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {markets?.map((market) => (
              <tr
                key={market.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition duration-150"
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
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <MarketDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        editData={selected}
      />
    </div>
  );
};