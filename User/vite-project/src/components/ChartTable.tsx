import { useGetPivotMarketResults } from "../hook/useData";

const ChartTable = () => {
  const { data } = useGetPivotMarketResults();
  const headers = data?.headers || [];
  const rows = data?.data || [];

  return (
    <div className="w-full mt-8">

      {/* Table Title */}
      <div className="w-full bg-yellow-400 text-center font-bold text-black text-xl py-3">
        Satta King Chart
      </div>

      <div className="overflow-x-auto w-full shadow-md">

        <table className="w-full text-sm text-center">

          <thead>
            <tr>
              {headers.map((head: string, i: number) => (
                <th
                  key={i}
                  className="bg-yellow-400 text-black py-3 px-4 border"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row: any, i: number) => (
              <tr key={i}>
                {headers.map((head: string, j: number) => (
                  <td
                    key={j}
                    className={`py-3 px-2 border text-black ${
                      head === "Date" || head === "SN"
                        ? "bg-yellow-400 font-semibold"
                        : "bg-white"
                    }`}
                  >
                    {row[head] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default ChartTable;