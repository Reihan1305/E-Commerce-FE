import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
import { Container, Box } from "@mui/material";


const AuthLayout = () => {
    // const isLogin = useAppSelector((state) => state.auth.isLogin);
    // console.log(isLogin);

    // const userLogin = useAppSelector((state) => state.auth.profile);
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(getProfileAsync());
    // }, []);

    // console.log(userLogin);
    // const { isLogin, profile } = useAppSelector((state: { auth: { isLogin: any; profile: { rolesId: number } } }) => ({
    //     isLogin: state.auth.isLogin,
    //     profile: state.auth.profile
    // }))

    // if (isLogin) {
    //     if (profile.rolesId === 1) {
    //         return <Navigate to={"/buyer"} />;
    //     } else if (profile.rolesId === 2) {
    //         return <Navigate to={"/"} />
    //     }
    // }

    return (
        <Box className="container" sx={{ color: "white", height: "100vh" }}>
            <Container className="container">
                <Outlet />
            </Container>
        </Box>
    );
};

export default AuthLayout;
