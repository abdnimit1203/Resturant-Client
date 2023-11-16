import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    const location =useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    // console.log(noHeaderFooter);
    return (
        <div>
           {noHeaderFooter || <Navbar/>}
            {/* <div className={path.pathname === "/" ? "": "pt-[76px]"}> */}
            <Outlet></Outlet>
            {/* </div> */}
           
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;