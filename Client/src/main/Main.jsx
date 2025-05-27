import { Outlet } from "react-router-dom";
import Nabbar from "../layout/navbar/Nabbar";
import Footer from "../layout/footer/Footer";

const Main = () => {
    return (
        <div>
            <Nabbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;