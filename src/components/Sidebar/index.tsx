import { Box, Button, Modal } from "@mui/material";
import MenuItem from './MenuItem';


const Sidebar = () => {

    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: 5,
                gap: 2,
            }}
        >
            <Box>
                <MenuItem />
            </Box>
        </Box>
    );
};

export default Sidebar;