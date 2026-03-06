import { useGetPivotMarketResults } from "../hook/useData";
const ChartTable = () => {
  const { data } = useGetPivotMarketResults();
  const headers = data?.headers || [];
  const rows = data?.data || [];
  return (
    <div className="overflow-x-auto bg-white shadow-md mt-8">
      <table className="w-full text-sm text-center">
        <thead>
          <tr>
            {headers.map((head: string, i: number) => (
              <th
                key={i}
                className={`text-white py-3 px-4 ${
                  head === "Date" || head === "SN"
                    ? "bg-[#0aa485]"
                    : "bg-[#950909]"
                }`}
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
                  className={`py-3 text-white ${
                    head === "Date" || head === "SN"
                      ? "bg-[#2d4b58]"
                      : "bg-[#406e83]"
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
  );
};
export default ChartTable;