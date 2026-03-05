import { Link } from "react-router-dom";

interface Game {
  name: string;
  time: string;
  y: string;
  t: string;
  slug: string;
}

const games: Game[] = [
  { name: "Sadar Bazar", time: "01:40 PM", y: "47", t: "26", slug: "sadar-bazar" },
  { name: "Gwalior", time: "02:40 PM", y: "29", t: "49", slug: "gwalior" },
  { name: "Delhi Bazar", time: "03:15 PM", y: "35", t: "06", slug: "delhi-bazar" },
  { name: "Delhi Matka", time: "03:40 PM", y: "42", t: "63", slug: "delhi-matka" },
  { name: "Shri Ganesh", time: "04:40 PM", y: "36", t: "00", slug: "shri-ganesh" },
  { name: "Agra", time: "05:30 PM", y: "37", t: "58", slug: "agra" },
  { name: "Faridabad", time: "06:10 PM", y: "02", t: "91", slug: "faridabad" },
  { name: "Alwar", time: "07:35 PM", y: "85", t: "91", slug: "alwar" },
  { name: "Gaziabad", time: "09:30 PM", y: "10", t: "10", slug: "gaziabad" },
  { name: "Dwarka", time: "10:35 PM", y: "04", t: "47", slug: "dwarka" },
  { name: "Gali", time: "11:30 PM", y: "92", t: "30", slug: "gali" },
];

const GameList = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-4 md:p-6">
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
        {games.map((game, index) => (
          <div
            key={index}
            className="flex items-center border border-gray-900"
          >
            {/* Left */}
            <div className="w-full p-3">
              <p className="pb-2 text-xl font-bold uppercase hover:underline cursor-pointer">
                {game.name}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-red-900">
                  {game.time}
                </p>

                <Link
                  to={`/result-table`}
                  className="px-2 text-xs bg-yellow-400 py-0.5 rounded-md hover:bg-yellow-300"
                >
                  View Chart
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-around w-[75%]">
              <p className="text-2xl font-medium tracking-wider">
                {game.y}
              </p>
              <p className="text-2xl font-medium tracking-wider">
                {game.t}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side Premium Card */}
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