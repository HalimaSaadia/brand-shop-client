import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <div className="min-h-[400px] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
