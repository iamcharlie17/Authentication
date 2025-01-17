import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import NavBar from "~/components/NavBar/NavBar";

const Mainlayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;