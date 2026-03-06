import YearCard from "./YearCard";
import type { ChartItem } from "../types/chart";
import { useGetAllMarkets, type MarketItem } from "../hook/useData";

const colorThemes = [
  {
    gradient: "bg-gradient-to-r from-rose-600 to-pink-600",
    shadow: "shadow-xl shadow-rose-500/30",
    border: "border border-rose-300/30",
  },
  {
    gradient: "bg-gradient-to-r from-emerald-500 to-teal-600",
    shadow: "shadow-xl shadow-emerald-500/30",
    border: "border border-emerald-300/30",
  },
  {
    gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500",
    shadow: "shadow-xl shadow-purple-500/30",
    border: "border border-purple-300/30",
  },
  {
    gradient: "bg-gradient-to-r from-orange-500 to-amber-600",
    shadow: "shadow-xl shadow-orange-500/30",
    border: "border border-amber-300/30",
  },
  {
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    shadow: "shadow-xl shadow-cyan-500/30",
    border: "border border-cyan-300/30",
  },
  {
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
    shadow: "shadow-xl shadow-indigo-500/30",
    border: "border border-indigo-300/30",
  },
];

const YearlyChartGrid = () => {
  const { data } = useGetAllMarkets();

  const markets: ChartItem[] =
    data?.data?.map((market: MarketItem, index: number) => {
      const theme = colorThemes[index % colorThemes.length];
      return {
        name: market.market_name,
        _id:market._id,
        slug: market.market_name.toLowerCase().replace(/\s+/g, "-"),
        ...theme,
      };
    }) || [];
  return (
    <section className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2">
      {markets.map((item, index) => (
        <YearCard key={index} item={item} />
      ))}
    </section>
  );
};

export default YearlyChartGrid;