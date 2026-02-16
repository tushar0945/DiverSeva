import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../../utils/ScrollToTop";

const PageWrapper = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
