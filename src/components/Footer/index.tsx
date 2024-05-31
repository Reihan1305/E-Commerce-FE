import { Box } from "@mui/material";
import FooterItem from "./FooterItem";


const Footer = () => {

    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                bgcolor: "gray",
                marginTop: 5
            }}
        >
            <Box>
                <FooterItem />
            </Box>
        </Box>
    );
};

export default Footer;