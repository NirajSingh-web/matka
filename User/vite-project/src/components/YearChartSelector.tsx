import React from "react";

const YearChartSelector: React.FC = () => {
  return (
    <div className="bg-gray-700 py-6 mt-6 text-center">
      <h2 className="text-white text-xl font-bold mb-4">
        Check All Game Year Chart
      </h2>

      <div className="flex justify-center space-x-4">
        <select className="p-2 rounded">
          <option>Game 1</option>
          <option>Game 2</option>
        </select>

        <select className="p-2 rounded">
          <option>2026</option>
          <option>2025</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Check Chart
        </button>
      </div>
    </div>
  );
};

export default YearChartSelector;