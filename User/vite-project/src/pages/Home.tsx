import WelcomeSection from "../components/WelcomeSection";
import LiveTime from "../components/LiveTime";
import FastestHeading from "../components/FastestHeading";
import PremiumCard from "../components/PremiumCard";
import GameList from "../components/GameList";
import ChartTable from "../components/ChartTable";
import InfoSection from "../components/InfoSection";
import BlogSection from "../components/BlogSection";
import { useGetAllMarkets, useGetLiveResult } from "../hook/useData";
import ResultBanner from "../components/MorningResult";
import ChartSelector from "../components/ChartSelecto";
const Home = () => {
  const { data: marketResponse } = useGetAllMarkets();
  const { data } = useGetLiveResult();
  const { current, upcoming } = data || {};
  return (
    <>
      <WelcomeSection />
      <LiveTime />
      <ResultBanner name={upcoming?.gameName || "-"} current={upcoming?.current_result} prev={upcoming?.prev_result} isUpcoming={true} />
      <ResultBanner name={current?.gameName || "-"} current={current?.current_result} prev={current?.prev_result} />
      <FastestHeading />
      <PremiumCard markets={marketResponse?.data || []}/>
      <GameList markets={marketResponse?.data || []} />
      <ChartSelector/>
      <ChartTable />
      <InfoSection />
      <BlogSection />
    </>
  );
};
export default Home;