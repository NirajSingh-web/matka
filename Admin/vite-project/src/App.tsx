
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import AuthProvider from "./constant/AuthProvider";

function App() {
  return (
    <>
      <Header />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;