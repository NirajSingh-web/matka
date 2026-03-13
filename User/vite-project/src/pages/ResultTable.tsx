import { useParams, useNavigate } from "react-router-dom";
import { useGetMarketCalendar, useGetAllMarkets } from "../hook/useData";

const CalendarTable = () => {

  const { market_id, year } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetMarketCalendar(market_id, year);
  const { data: marketData } = useGetAllMarkets();

  const months = data?.months || [];
  const rows = data?.calendar || [];
  const apiYear = data?.year || year;

  const markets = marketData?.data || [];

  const marketName =
    marketData?.data?.find((m) => m._id === market_id)?.market_name || "";

  const handleMarketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMarket = e.target.value;
    navigate(`/result-table/${newMarket}/${year}`);
  };

  if (isLoading) return <p className="text-center p-5">Loading...</p>;

  return (
    <div className="overflow-auto mx-auto max-w-[2000px]">

      {/* Title Bar */}
      <div className="w-full bg-yellow-400 grid grid-cols-3 items-center px-4 py-3">

        {/* Back Button */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
          >
            ← Back
          </button>
        </div>

        {/* Market Name */}
        <div className="text-center text-2xl font-bold">
          {marketName.toUpperCase()} Chart
        </div>

        {/* Market Dropdown */}
        <div className="flex justify-end">
          <select
            value={market_id}
            onChange={handleMarketChange}
            className="px-4 py-2 text-base font-semibold bg-white border-2 border-black rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none"
          >
            {markets.map((m) => (
              <option key={m._id} value={m._id}>
                {m.market_name}
              </option>
            ))}
          </select>
        </div>

      </div>

      <table className="w-full table-auto border-collapse">

        {/* Header */}
        <thead>
          <tr className="bg-[#ffd800] text-black">
            <th className="px-3 py-3">{apiYear}</th>

            {months.map((month: string) => (
              <th key={month} className="px-3 py-3">
                {month}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>

            {/* Days column */}
            <td className="align-top">
              <table className="w-full text-center">
                <tbody>
                  {rows.map((row: any) => (
                    <tr key={row.day}>
                      <td className="py-1 text-blue-600 font-semibold border border-gray-300">
                        {row.day}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>

            {/* Month columns */}
            {months.map((month: string) => (
              <td key={month} className="align-top">
                <table className="w-full text-center">
                  <tbody>

                    {rows.map((row: any) => {
                      const value = row[month] || "-";

                      return (
                        <tr key={row.day}>
                          <td
                            className={`py-1 border border-gray-300 ${
                              value === "-"
                                ? "text-gray-400"
                                : "text-blue-600 font-semibold"
                            }`}
                          >
                            {value}
                          </td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </td>
            ))}

          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default CalendarTable;