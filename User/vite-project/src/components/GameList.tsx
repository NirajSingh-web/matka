import { Link } from "react-router-dom";
import type { MarketItem } from "../hook/useData";

interface GameListData {
  markets: MarketItem[];
}

const GameList: React.FC<GameListData> = ({ markets }) => {
  const currentYear = new Date().getFullYear();

  return (
    <table className="w-full border border-black">
      <thead>
        <tr className="bg-black text-white">
          <th className="w-[37%] text-center py-3 border border-black">
            सट्टा का नाम
          </th>
          <th className="text-center py-3 border border-black">
            कल आया था
          </th>
          <th className="text-center py-3 border border-black">
            आज का रिज़ल्ट
          </th>
        </tr>
      </thead>

      <tbody>
        {markets.map((game, index) => (
          <tr key={index} className="border border-black">

            <td className="bg-yellow-300 text-center py-3 border border-black">
              
              <p className="text-xl font-bold uppercase">
                {game.market_name}
              </p>

              <p className="text-sm mt-1">
                {game.result_time}
              </p>

              <Link
                to={`/result-table/${game._id}/${currentYear}`}
                className="inline-block mt-2 px-2 py-0.5 text-xs font-semibold bg-black text-white rounded hover:bg-gray-800"
              >
                View Chart
              </Link>

            </td>

            <td className="text-center border border-black">
              <div className="text-[22px] font-bold tracking-[2px]">
                {game.yesterday_result}
              </div>
            </td>

            <td className="text-center border border-black">
              <div className="text-[22px] font-bold tracking-[2px]">
                {game.today_result}
              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GameList;