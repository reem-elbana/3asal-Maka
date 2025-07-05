import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = ({ onSearch }) => {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <main className=" 950 min-h-screen p-2">
        <Outlet />
      </main>
      <Footer/>
      
    </>
  );
};

export default Layout;