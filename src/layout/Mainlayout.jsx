import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;