import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-[calc(100vh-120px)] overflow-hidden ">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
