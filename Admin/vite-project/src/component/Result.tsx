import React, { useState } from "react";
import PageHeadline from "./PageHeadLine.tsx";
import {
  useMarketResults,
} from "../hook/useResult.ts";
import type { MarketResult } from "../types/market.type.ts";
import ResultDialog from "../screen/ResultDialog.tsx";
import LoadingPage from "./Loadingpage.tsx";

const MarketSection: React.FC = () => {

  const {
    data: results = [],
    isLoading,
    refetch
  } = useMarketResults();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editData, setEditData] = useState<MarketResult | null>(null);
  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="min-h-screen bg-slate-950 p-2 text-slate-200">


      <PageHeadline title="Result" rightComponent={
        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-5 py-2 rounded-xl text-white 
                       bg-blue-800"
        >
          + Add Result
        </button>} />
      <div className="bg-slate-900 border border-slate-800    rounded-b-lg shadow-xl custom-scrollbar">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left">Market</th>
              <th className="px-6 py-4 text-left">Result</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Created</th>
              <th className="px-6 py-4 text-left">Action</th>
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

                <td className=" px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${item.status
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                      }`}
                  >
                    {item.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.result_time}
                </td>

                <td className="px-6 py-4">
                  <button onClick={() => { setEditData(item), setIsDialogOpen(true) }}>
                    <span className="material-symbols-outlined">
                      update
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <ResultDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        editData={editData}
        refetch={refetch}
      />
    </div>
  );
};

export default MarketSection;