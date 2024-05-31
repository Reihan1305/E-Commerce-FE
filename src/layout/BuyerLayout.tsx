import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const BuyerLayout = () => {
   const isLogin = useAppSelector((state) => state.auth.isLogin);
   console.log(isLogin);

   if (!isLogin) {
      return <Navigate to="/auth/login" />;
   }
   return (
      <>
         <div>BuyerLayout</div>
         <Outlet />
      </>
   );
};

export default BuyerLayout;