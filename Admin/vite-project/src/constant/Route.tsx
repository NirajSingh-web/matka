import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../component/Login";
import LoadingPage from "../component/Loadingpage";
import MarketTable from "../component/MarketTable";
const withSuspense = <P extends object>(
  Component: React.FC<P>,
  props?: Partial<P>
) => (
  <Suspense fallback={<><LoadingPage/></>}>
    <Component {...(props as P)} />
  </Suspense>
);
export const routerList = createBrowserRouter([
  {
    path: "*",
    element:<></>,
  },
  {
    path: "/login",
    element:<LoginPage/> ,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path:"/",
        element:<MarketTable/>
      }
    ],
  },
]);
