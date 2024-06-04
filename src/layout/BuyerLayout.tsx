import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
import Navbar from "../components/Navbar";
import Hero from "../pages/Buyer/components/Hero";
import Products from "../pages/Buyer/components/Products";
import Testimonial from "../pages/Buyer/components/Testimonial";
import Popular from "../pages/Buyer/components/Popular";
import Footer from "../components/Footer";

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