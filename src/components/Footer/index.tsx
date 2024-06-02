import { Box } from "@mui/material";
import FooterItem from "./FooterItem";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "gray",
                padding: 2,
                marginTop: "auto"
            }}
        >
            <FooterItem />
        </Box>
    );
};

export default Footer;
