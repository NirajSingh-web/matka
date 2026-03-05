import React from "react";

const months = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

// Example data (JAN & FEB filled like your table)
const data: Record<string, (string | number)[]> = {
  JAN: [
    84,19,70,82,65,42,51,81,"04",86,61,67,37,40,66,"08",
    70,50,12,74,42,13,65,32,41,88,79,52,22,97,"-"
  ],
  FEB: [
    98,35,99,87,83,58,97,74,36,"06",92,72,52,36,22,34,
    83,10,84,14,50,89,90,88,72,58,10,"-","-","-","-"
  ],
  MAR: [47,26,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
};

const CalendarTable = () => {
  return (
    <div className="overflow-auto mx-auto max-w-[2000px]">
      <table className="w-full table-auto border-collapse">

        {/* Header */}
        <thead>
          <tr className="text-white bg-emerald-900">
            <th className="px-3 py-3">2026</th>
            {months.map((month) => (
              <th key={month} className="px-3 py-3">
                {month}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>

            {/* Days Column */}
            <td className="align-top">
              <table className="w-full text-center">
                <tbody>
                  {days.map((day) => (
                    <tr key={day}>
                      <td className="py-1 text-white bg-purple-800 border border-purple-700">
                        {day}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>

            {/* Month Columns */}
            {months.map((month) => (
              <td key={month} className="align-top">
                <table className="w-full text-center">
                  <tbody>
                    {days.map((_, index) => {
                      const value = data[month]?.[index] ?? "-";
                      return (
                        <tr key={index}>
                          <td
                            className={`py-1 border ${
                              value === "-"
                                ? "bg-red-500 text-white"
                                : "bg-green-600 text-white"
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