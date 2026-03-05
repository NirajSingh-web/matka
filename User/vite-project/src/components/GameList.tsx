import { Link } from "react-router-dom";
import type { MarketItem } from "../hook/useData";
interface GameListData {
  markets: MarketItem[]
}
const GameList: React.FC<GameListData> = ({ markets }) => {
  return (
    <section className="flex gap-10 flex-col">
      <div>
        {/* Header */}
        <div className="flex items-center bg-yellow-400 mt-4">
          <p className="w-full p-3 font-bold text-white bg-purple-800">
            GAME LIST
          </p>
          <div className="flex items-center justify-around w-[75%]">
            <p className="text-lg font-semibold">कल</p>
            <p className="text-lg font-semibold">आज</p>
          </div>
        </div>

        {/* Game Rows */}
        {markets.map((game, index) => (
          <div
            key={index}
            className="flex items-center border border-gray-900"
          >
            {/* Left */}
            <div className="w-full p-3">
              <p className="pb-2 text-xl font-bold uppercase hover:underline cursor-pointer">
                {game.market_name}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-red-900">
                  {game.result_time}
                </p>

                <Link
              to={`/result-table/${game._id}`}
                  className="px-2 text-xs bg-yellow-400 py-0.5 rounded-md hover:bg-yellow-300"
                >
                  View Chart
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-around w-[75%]">
              <p className="text-2xl font-medium tracking-wider">
                {game.today_result}
              </p>
              <p className="text-2xl font-medium tracking-wider">
                {game.yesterday_result}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 relative overflow-hidden text-center px-4 py-8 rounded-3xl text-white shadow-xl flex items-center justify-center">
        <div className="space-y-3">
          <p className="text-lg font-bold">
            🙏🏿 नमस्कार साथियो 🙏🏿
          </p>
          <p>
            अपनी गेम का रिजल्ट हमारी web साइट पर लगवाने के लिए संपर्क करें।
          </p>
          <p className="font-bold">---- ARUN BHAI ----</p>
          <a
            href="https://wa.me/917206591251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold"
          >
            Contact Now
          </a>

          <p className="text-xs mt-4">
            NOTE: इस नंबर पर लीक गेम नही मिलता।
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameList;