import YearCard from "./YearCard";
import type { ChartItem } from "../types/chart";

const charts: ChartItem[] = [
  {
    name: "Daman",
    slug: "daman",
    gradient: "bg-gradient-to-r from-rose-600 to-pink-600",
    shadow: "shadow-xl shadow-rose-500/30",
    border: "border border-rose-300/30",
  },
  {
    name: "Karol Bagh",
    slug: "karol-bagh",
    gradient: "bg-gradient-to-r from-emerald-500 to-teal-600",
    shadow: "shadow-xl shadow-emerald-500/30",
    border: "border border-emerald-300/30",
  },
  {
    name: "Raj Shree",
    slug: "raj-shree",
    gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500",
    shadow: "shadow-xl shadow-purple-500/30",
    border: "border border-white/30",
  },
  {
    name: "Gali",
    slug: "gali",
    gradient: "bg-gradient-to-r from-orange-500 to-amber-600",
    shadow: "shadow-xl shadow-orange-500/30",
    border: "border border-amber-300/30",
  },
  {
    name: "Dwarka",
    slug: "dwarka",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    shadow: "shadow-xl shadow-cyan-500/30",
    border: "border border-cyan-300/30",
  },
  {
    name: "Disawer",
    slug: "disawer",
    gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
    shadow: "shadow-xl shadow-purple-500/30",
    border: "border border-purple-300/30",
  },
];

const YearlyChartGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2">
      {charts.map((item, index) => (
        <YearCard key={index} item={item} />
      ))}
    </section>
  );
};

export default YearlyChartGrid;