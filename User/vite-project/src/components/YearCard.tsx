import type { ChartItem } from "../types/chart";
import { Link } from "react-router-dom";

interface Props {
  item: ChartItem;
}

const YearCard = ({ item }: Props) => {
  return (
    <div
      className={`
        relative overflow-hidden
        md:p-6 p-4 py-12
        my-6 md:my-8
        text-white
        rounded-2xl md:rounded-3xl
        transition-all duration-500
        group
        ${item.gradient}
        ${item.shadow}
        ${item.border}
        hover:shadow-2xl
      `}
    >
      {/* Glow Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Link to={`/result-table/${item._id}`} className="group relative">
          <h4 className="text-xl md:text-3xl font-bold tracking-wide text-center uppercase transition-all duration-300 group-hover:scale-105">
            <span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {item.name}
            </span>

            <span className="block text-lg md:text-xl mt-2 font-semibold text-white/90">
              Yearly Chart 2026
            </span>
          </h4>

          <div className="w-0 h-0.5 bg-gradient-to-r from-white via-white/50 to-white mx-auto mt-3 group-hover:w-full transition-all duration-500" />

          <div className="mt-4 flex items-center justify-center space-x-2 opacity-80 group-hover:opacity-100 transition">
            <span className="text-sm font-medium">View Chart</span>
            <span className="animate-pulse">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default YearCard;