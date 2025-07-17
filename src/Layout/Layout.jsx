import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar />  {/* Navbar appears on all pages */}
      <main>
        <Outlet /> {/* This renders the current page content dynamically */}
      </main>
      <Footer />  {/* Footer appears on all pages */}
    </div>
  );
};

export default Layout;