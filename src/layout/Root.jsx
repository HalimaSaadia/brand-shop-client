import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[400px] max-w-7xl mx-auto px-5 md:px-10">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;