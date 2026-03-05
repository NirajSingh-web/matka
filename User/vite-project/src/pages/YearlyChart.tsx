import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import YearlyChartGrid from "../components/YearlyChart";
import Footer from "../components/Footer";

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