import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Navbar/Navbar";
import Footer from "../Sections/Footer/Footer";


const Root = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;