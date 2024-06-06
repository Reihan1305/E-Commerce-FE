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
            <Box borderBottom={1} borderColor="divider" sx={{ bgcolor: "#0086B4" }}>
                <NavbarItem />
            </Box>
        </Box>
    );
};

export default Navbar;