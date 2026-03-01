
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import AuthProvider from "./constant/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="h-[100vh] flex flex-col  custom-scrollbar">
          <Header />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;