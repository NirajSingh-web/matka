import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChartSelector = () => {
  const [game, setGame] = useState("daman");
  const [year, setYear] = useState("2026");

  const navigate = useNavigate();

  const handleCheck = () => {
    navigate("/result-table");
  };

  return (
    <div className="py-8 mx-auto mt-4 bg-gray-600">
      <h2 className="pb-4 text-2xl font-bold text-center text-white">
        Check All Game Year Chart
      </h2>

      <div className="flex items-center justify-center mx-auto rounded">
        <div className="flex mx-2">

          <select
            value={game}
            onChange={(e) => setGame(e.target.value)}
            className="py-2 text-sm uppercase bg-white rounded-md outline-none md:py-3 md:text-base lg:px-3"
          >
            <option value="daman">daman</option>
            <option value="karol-bagh">karol bagh</option>
            <option value="raj-shree">raj shree</option>
            <option value="gali">gali</option>
            <option value="dwarka">dwarka</option>
            <option value="gaziabad">gaziabad</option>
            <option value="alwar">alwar</option>
            <option value="faridabad">faridabad</option>
            <option value="agra">agra</option>
            <option value="shri-ganesh">shri ganesh</option>
            <option value="delhi-bazar">delhi bazar</option>
            <option value="gwalior">gwalior</option>
            <option value="sadar-bazar">sadar bazar</option>
            <option value="disawer">disawer</option>
            <option value="hr-satta">hr satta</option>
            <option value="ujjala-super">ujjala super</option>
            <option value="new-ganga">new ganga</option>
            <option value="delhi-matka">delhi matka</option>
            <option value="dehradun-city">dehradun city</option>
            <option value="kkr-city">kkr city</option>
            <option value="delhi-darbar">delhi darbar</option>
            <option value="mandi-bazar">mandi bazar</option>
            <option value="madhupuri">madhupuri</option>
            <option value="fatehabad">fatehabad</option>
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-2 py-2 mx-0 ml-1 text-sm bg-white rounded-md outline-none md:py-3 md:text-base lg:mx-3"
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

        </div>

        <button
          onClick={handleCheck}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
          Check Chart
        </button>
      </div>
    </div>
  );
};

export default ChartSelector;