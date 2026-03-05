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
  const [editData,setEditData]=useState(null);
  if (isLoading) {
    return <LoadingPage/>
  }

  return (
    <div className="min-h-screen bg-slate-950 p-2 text-slate-200">
     
       
          <PageHeadline title="Market Results" rightComponent={
          <button
            onClick={() => setIsDialogOpen(true)}
            className="px-5 py-2 rounded-xl text-white 
                       bg-gradient-to-r from-green-600 to-emerald-500"
          >
            + Add Result
          </button>} />


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
                    {item.createdAt}
                  </td>
                  
                  <td className="px-6 py-4">
                     <button onClick={()=>{setEditData(item),setIsDialogOpen(true)}}>update</button>
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