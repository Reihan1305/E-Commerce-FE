import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../pages/Buyer/Hero";
import Products from "../pages/Buyer/Products";
import Testimonial from "../pages/Buyer/Testimonial";
import Popular from "../pages/Buyer/Popular";
import Footer from "../components/Footer";

const BuyerLayout = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <Products />
         <Testimonial />
         <Popular />
         <Footer />
         <Outlet />
      </>
   );
};

export default BuyerLayout;