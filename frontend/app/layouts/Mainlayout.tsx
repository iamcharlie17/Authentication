import { Outlet } from "react-router";
import Footer from "~/components/Footer/Footer";
import NavBar from "~/components/NavBar/NavBar";

const Mainlayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-64px-48px)] md:min-h-[calc(100vh-76px-48px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
