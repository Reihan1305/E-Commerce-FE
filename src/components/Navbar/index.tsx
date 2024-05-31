import { Box } from "@mui/material";
import NavbarItem from "./NavbarItem";


const Navbar = () => {

    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Box>
                <NavbarItem />
            </Box>
        </Box>
    );
};

export default Navbar;