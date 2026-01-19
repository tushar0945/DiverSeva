import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const PageWrapper = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default PageWrapper;
