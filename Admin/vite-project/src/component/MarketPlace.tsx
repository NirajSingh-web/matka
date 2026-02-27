import React from "react";
import { useMarketPagination } from "../hook/useMarketPagination";
import MarketResult from "./PageHeadLine";

interface MarketItem {
  _id: string;
  market_id: string;
  result: string;
  status: "OPEN" | "CLOSED";
  createdAt: string;
}

const MarketSection: React.FC = () => {
  // ✅ Dummy Data
  const dummyData: MarketItem[] = [
    {
      _id: "1",
      market_id: "MKT-1001",
      result: "WIN",
      status: "OPEN",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      market_id: "MKT-1002",
      result: "LOSS",
      status: "CLOSED",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      market_id: "MKT-1003",
      result: "WIN",
      status: "OPEN",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "4",
      market_id: "MKT-1004",
      result: "LOSS",
      status: "CLOSED",
      createdAt: new Date().toISOString(),
    },
  ];

  const {
    page,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
  } = useMarketPagination(dummyData, 3);

  const getStatusStyle = (status: "OPEN" | "CLOSED") =>
    status === "OPEN"
      ? "bg-green-100 text-green-700 border border-green-300"
      : "bg-red-100 text-red-700 border border-red-300";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-6">

        {/* ✅ Header Component */}
        <MarketResult title="Market Results" />

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 uppercase text-sm">
                <th className="px-6 py-3">Market ID</th>
                <th className="px-6 py-3">Result</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    {item.market_id}
                  </td>

                  <td
                    className={`px-6 py-4 font-semibold ${
                      item.result === "WIN"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.result}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default MarketSection;