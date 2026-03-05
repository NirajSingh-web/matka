import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import YearlyChart from "../pages/YearlyChart";
import CalendarTable from "../pages/ResultTable";

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
      }
      
    ],
  },
]);