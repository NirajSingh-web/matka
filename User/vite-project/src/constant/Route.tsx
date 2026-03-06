import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import YearlyChart from "../pages/YearlyChart";
import CalendarTable from "../pages/ResultTable";
import PrivacyContent from "../components/Privacy";
import TermsContent from "../components/TermConditions";
import DisclaimerContent from "../components/Disclimaration";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"chart",
        element: <YearlyChart/>
      },
      {
        path: "result-table",
        element: <CalendarTable/>
      },{
        path:"privacy-policy",
        element: <PrivacyContent/>
      },
      {
        path: "/terms-and-conditions",
        element: <TermsContent/>
      },
      {
        path: "/disclaimer",
        element: <DisclaimerContent/>
      }
      
    ],
  },
]);