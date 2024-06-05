import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Instagram, LocalPhoneOutlined, MailOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const FooterItem = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#0086B4",
                mt: 4,
                p: 2,
                px: 4
            }}
        >
            <Box>
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}
                >
                    Lakoe
                </Typography>
                <Typography>#1 e-commerce in the universe</Typography>
            </Box>

            <Box>
                <Typography>© 2024 Lakoe & Team . All Rights Reserved</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}
            >
                <Typography>Contact Us</Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >
                    <Link to={"https://instagram.com"}>
                        <Instagram sx={{ fill: "black" }} />
                    </Link>

                    <Link to={""}>
                        <MailOutlined sx={{ fill: "black" }} />
                    </Link>

                    <Link to={""}>
                        <LocalPhoneOutlined sx={{ fill: "black" }} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default FooterItem;
