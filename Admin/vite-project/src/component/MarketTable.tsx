import { useState } from "react";
import { useMarkets, type Market } from "../hook/useMarket";
import MarketDialog from "../screen/MarketDialog";
// import { Market } from "../types/market";

const MarketTable = () => {
  const { data: markets, isLoading } = useMarkets();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Market | null>(null);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => {
          setSelected(null);
          setOpen(true);
        }}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Create Market
      </button>

      <table className="min-w-full bg-white rounded-xl shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Market</th>
            <th className="p-3">Open</th>
            <th className="p-3">Close</th>
            <th className="p-3">Result</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {markets?.map((market) => (
            <tr key={market.id} className="border-t">
              <td className="p-3">{market.market_name}</td>
              <td className="p-3 text-center">{market.open_time}</td>
              <td className="p-3 text-center">{market.close_time}</td>
              <td className="p-3 text-center">{market.result_time}</td>
              <td className="p-3 text-center">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    market.status
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {market.status ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => {
                    setSelected(market);
                    setOpen(true);
                  }}
                  className="text-blue-500"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <MarketDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        editData={selected}
      />
    </div>
  );
};

export default MarketTable;