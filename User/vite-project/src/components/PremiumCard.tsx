import type { MarketItem } from "../hook/useData";

interface GameListData {
  markets: MarketItem[];
}

const PremiumCard: React.FC<GameListData> = ({ markets }) => {
  return (
    <section className="w-full bg-yellow-400 p-4 md:p-6">
      <div
        className="
        relative overflow-hidden
        w-full
        text-center
        px-4 py-8 md:px-8 md:py-10
        rounded-2xl md:rounded-3xl
        bg-yellow-400
        text-black
        border-2 border-black
        shadow-xl
        transition-all duration-300
        flex flex-col justify-center items-center
      "
      >
        {/* Content */}
        <div className="relative z-10 w-full space-y-2 text-sm md:text-base font-bold">
          <p className="text-lg md:text-xl">
            --सीधे सट्टा कंपनी का No 1 खाईवाल--
          </p>

          <p className="text-xl md:text-2xl tracking-wide">
            ♕♕ DEV BHAI KHAIWAL ♕♕
          </p>

          {markets.map((e) => (
            <p key={e.market_name}>
              ⏰ {e.market_name} ----------- {e.result_time}
            </p>
          ))}

          <p className="mt-4 text-lg">🙂🙂 DEV BHAI KHAIWAL 🙂🙂</p>

          <a
            href="https://wa.me/918571979107"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              mt-4 px-6 py-2
              bg-black text-white
              rounded-xl font-bold
              shadow-md
              hover:bg-gray-800
              transition
            "
          >
            Play Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumCard;