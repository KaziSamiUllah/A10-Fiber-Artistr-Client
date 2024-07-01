import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer/Footer";
import { Tooltip } from "react-tooltip";

const Layout = () => {
    return (
        <>
        <div>
            <div className="w-full">
            <Navbar></Navbar>
            </div>
            <div className="mx-5 lg-mx-20 min-h-[70vh] roboto-regular">
                <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
            </div>
            <ToastContainer />
            <Tooltip id="my-tooltip" />
        </>
    );
};

export default Layout;