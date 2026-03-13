import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllMarkets } from "../hook/useData";

const ChartSelector = () => {

  const { data } = useGetAllMarkets();
  const markets = data?.data || [];

  const [game, setGame] = useState("");
  const [year, setYear] = useState("2026");

  const navigate = useNavigate();

  const handleCheck = () => {
    if (!game) return;

    navigate(`/result-table/${game}/${year}`);
  };

  return (
    <div className="w-full py-8 mx-auto mt-4 bg-yellow-400">

      <h2 className="pb-4 text-2xl font-bold text-center text-black">
        Check All Game Year Chart
      </h2>

      <div className="flex items-center justify-center gap-3">

        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          className="px-3 py-2 text-sm uppercase bg-white rounded-md outline-none"
        >
          <option value="">Select Game</option>

          {markets.map((m) => (
            <option key={m._id} value={m._id}>
              {m.market_name}
            </option>
          ))}

        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="px-3 py-2 text-sm bg-white rounded-md outline-none"
        >
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <button
          onClick={handleCheck}
          className="px-4 py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-800"
        >
          Check Chart
        </button>

      </div>
    </div>
  );
};

export default ChartSelector;