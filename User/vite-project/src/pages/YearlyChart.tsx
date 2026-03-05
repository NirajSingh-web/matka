import YearlyChartGrid from "../components/YearlyChart";
const YearlyChart = () => {
  return (
    <>
      <div className="py-6 text-center bg-white">
        <h2 className="text-2xl font-bold uppercase">
          Yearly Chart 2026
        </h2>
      </div>

      <YearlyChartGrid />
    </>
  );
};

export default YearlyChart;