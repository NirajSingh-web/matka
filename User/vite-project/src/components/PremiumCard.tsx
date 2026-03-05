//import { FaWhatsapp } from "react-icons/fa";

const PremiumCard = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-4 md:p-6">
      <div
        className="
        relative overflow-hidden
        text-center
        px-4 py-8 md:px-8 md:py-10
        rounded-2xl md:rounded-3xl
        bg-gradient-to-r from-rose-500 to-pink-600
        text-white
        border border-white/30
        shadow-xl shadow-rose-400/40
        transition-all duration-300
        hover:scale-[1.02] hover:rotate-1
        flex flex-col justify-center items-center
        group
      "
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>

        {/* Shine Animation */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full space-y-2 text-sm md:text-base font-bold">
          <p className="text-lg md:text-xl">
            --सीधे सट्टा कंपनी का No 1 खाईवाल--
          </p>

          <p className="text-xl md:text-2xl tracking-wide">
            ♕♕ DEV BHAI KHAIWAL ♕♕
          </p>

          <p>⏰ सदर बाजार ----------- 1:30 PM</p>
          <p>⏰ ग्वालियर -------------- 2:30 PM</p>
          <p>⏰ दिल्ली बाजार ---------- 2:50 PM</p>
          <p>⏰ दिल्ली मटका ---------- 3:20 PM</p>
          <p>⏰ श्री गणेश -------------- 4:20 PM</p>
          <p>⏰ आगरा ---------------- 5:20 PM</p>
          <p>⏰ फरीदाबाद ------------- 5:50 PM</p>
          <p>⏰ अलवर ---------------- 7:20 PM</p>
          <p>⏰ गाज़ियाबाद ------------ 8:40 PM</p>
          <p>⏰ द्वारका ---------------- 10:10 PM</p>
          <p>⏰ गली ------------------ 11:20 PM</p>
          <p>⏰ दिसावर --------------- 1:30 AM</p>

          <p className="mt-4 text-lg">🙂🙂 DEV BHAI KHAIWAL 🙂🙂</p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918571979107"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              mt-4 px-6 py-2
              bg-white text-rose-600
              rounded-xl font-bold
              shadow-md
              hover:bg-rose-100
              transition
            "
          >
            {/* <FaWhatsapp />
            Play Now */}
          </a>
        </div>

        {/* Corner Borders */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-xl" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-xl" />
      </div>
    </section>
  );
};

export default PremiumCard;