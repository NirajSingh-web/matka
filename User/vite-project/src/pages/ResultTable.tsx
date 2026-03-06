import { useParams } from "react-router-dom";
import { useGetMarketCalendar } from "../hook/useData";
const CalendarTable = () => {
  const { market_id } = useParams();
  const { data, isLoading } = useGetMarketCalendar(market_id);
  if (isLoading) return <p className="text-center p-5">Loading...</p>;
  const months = data?.months || [];
  const rows = data?.calendar || [];
  const year = data?.year || "";
  return (
    <div className="overflow-auto mx-auto max-w-[2000px]">
      <table className="w-full table-auto border-collapse">

        {/* Header */}
        <thead>
          <tr className="text-white bg-emerald-900">
            <th className="px-3 py-3">{year}</th>
            {months.map((month) => (
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
                  {rows.map((row) => (
                    <tr key={row.day}>
                      <td className="py-1 text-white bg-purple-800 border border-purple-700">
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
                    {rows.map((row) => {
                      const value = row[month] || "-";

                      return (
                        <tr key={row.day}>
                          <td
                            className={`py-1 border ${value === ""
                              ? "bg-red-500 text-white"
                              : "bg-green-600 text-white"
                              }`}
                          >
                            {value || "-"}
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