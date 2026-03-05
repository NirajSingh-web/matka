const ChartTable = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md mt-8">
      <table className="w-full text-sm text-center">
        <thead>
          <tr>
            <th className="bg-[#0aa485] text-white py-3 px-4">
              DATE
            </th>
            <th className="bg-[#950909] text-white py-3 px-4">
              Sadar Bazar
            </th>
            <th className="bg-[#950909] text-white py-3 px-4">
              Gwalior
            </th>
            <th className="bg-[#950909] text-white py-3 px-4">
              Delhi Bazar
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-[#2d4b58] text-white py-3">
              2026-03
            </td>
            <td className="bg-[#406e83] text-white py-3">47</td>
            <td className="bg-[#406e83] text-white py-3">29</td>
            <td className="bg-[#406e83] text-white py-3">35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChartTable;