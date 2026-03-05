import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import WelcomeSection from "../components/WelcomeSection";
import LiveTime from "../components/LiveTime";
import ResultStrip from "../components/MorningResult";
import MorningResult from "../components/MorningResult";
import Notification from "../components/notification";
import FastestHeading from "../components/FastestHeading";
import PremiumCard from "../components/PremiumCard";
import GameList from "../components/GameList";
import ChartTable from "../components/ChartTable";
import InfoSection from "../components/InfoSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <WelcomeSection />
      <LiveTime />
      <ResultStrip />
      <MorningResult />
      <Notification message="Today's result will update at 2:30 PM" />
      <FastestHeading />
      <PremiumCard />
      <GameList />
      <ChartTable />
      <InfoSection />
      <BlogSection />
    </>
  );
};

export default Home;