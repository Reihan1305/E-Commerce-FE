import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

const BuyerLayout = () => {

   // const isLogin = useAppSelector((state) => state.auth.isLogin);
   // console.log(isLogin);
   const { isLogin, profile } = useAppSelector((state: { auth: { isLogin: any; profile: { rolesId: number } } }) => ({
      isLogin: state.auth.isLogin,
      profile: state.auth.profile
   }))

   if (!isLogin) {
      return <Navigate to="/auth/login" />;
   }
   if (profile.rolesId === 2) {
      return <Navigate to={"/seller/dashboard"} />
   } else if (profile.rolesId === 3) {
      return <Navigate to={"/admin"} />
   }

   return (
      <>
         <Outlet />
      </>
   );
};

export default BuyerLayout;