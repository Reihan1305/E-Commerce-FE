<<<<<<< HEAD
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
=======
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../pages/Buyer/Hero";
import Products from "../pages/Buyer/Products";
import Testimonial from "../pages/Buyer/Testimonial";
import Popular from "../pages/Buyer/Popular";
import Footer from "../components/Footer";
>>>>>>> de16beccb6bd355c81edb2d7ae3922eeed63aa8f

const BuyerLayout = () => {
   const isLogin = useAppSelector((state) => state.auth.isLogin);
   console.log(isLogin);

   if (!isLogin) {
      return <Navigate to="/auth/login" />;
   }
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