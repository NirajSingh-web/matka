import { useState } from "react";
import { useMarkets, type Market } from "../hook/useMarket";
import MarketDialog from "../screen/MarketDialog";
import LoadingPage from "./Loadingpage";
import PageHeadline from "./PageHeadLine";
import { motion } from "framer-motion";

export const MarketTable: React.FC = () => {
  const { data: markets, isLoading ,refetch} = useMarkets();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Market | null>(null);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-2">
      <PageHeadline
        title="Market"
        rightComponent={<button
          onClick={() => {
            setSelected(null);
            setOpen(true);
          }}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg 
                     text-sm font-medium transition duration-200 shadow-md"
        >
          + Create Market
        </button>}
      />
      {/* Table Card */}
      <div className="bg-slate-900 border border-slate-800    rounded-b-lg shadow-xl custom-scrollbar">
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

        </table>
      </div>
      <MarketDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        editData={selected}
        refetch={refetch}
      />
    </div>
  );
};