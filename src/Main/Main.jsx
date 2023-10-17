import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
            <Navber></Navber>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;