import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

const Main = () => {
    return (
        <div class=""bg-gradient-to-br from-gray-900 via-emerald-800 via-teal-900 via-cyan-800 via-sky-900 to-gray-900 min-h-screen>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;