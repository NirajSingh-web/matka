import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../component/Loadingpage";
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
    element:<></> ,
  },
  {
    path: "",
    element: <App />,
    children: [
      
    ],
  },
]);
