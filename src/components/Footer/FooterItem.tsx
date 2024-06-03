import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const FooterItem = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 5,
                backgroundColor: "#272727",
                textAlign: 'center',
            }}
        >
            <Box sx={{ justifyContent: "center", width: "1200px", margin: "0 auto" }}>
                <Divider sx={{ backgroundColor: "white", mb: 2, mt: 5 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    {/* Box Logo dan Deskripsi */}
                    <Box sx={{ flex: 4, textAlign: "left" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img src="https://dejabru.ca/wp-content/uploads/2020/07/services_1.png" alt="Logo" width={75} />
                            <Typography variant="h4" color="white" fontWeight={"bold"}>
                                Candleaf
                            </Typography>
                        </Box>
                        <Box sx={{ width: 250, textAlign: "left", mt: 2 }}>
                            <Typography variant="body1" color="white">
                                Your natural candle made for your home and for your wellness.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Box Discovery */}
                    <Box sx={{ flex: 1, textAlign: "left" }}>
                        <Typography variant="h6" color="green">
                            Discovery
                        </Typography>
                        <Typography variant="body1" color="white">
                            New season
                        </Typography>
                        <Typography variant="body1" color="white">
                            Most searched
                        </Typography>
                        <Typography variant="body1" color="white">
                            Most selled
                        </Typography>
                    </Box>

                    {/* Box About */}
                    <Box sx={{ flex: 1, textAlign: "left" }}>
                        <Typography variant="h6" color="green">
                            About
                        </Typography>
                        <Typography variant="body1" color="white">
                            Help
                        </Typography>
                        <Typography variant="body1" color="white">
                            Shipping
                        </Typography>
                        <Typography variant="body1" color="white">
                            Affiliate
                        </Typography>
                    </Box>

                    {/* Box Info */}
                    <Box sx={{ flex: 1, textAlign: "left" }}>
                        <Typography variant="h6" color="green">
                            Info
                        </Typography>
                        <Typography variant="body1" color="white">
                            Contact us
                        </Typography>
                        <Typography variant="body1" color="white">
                            Privacy Policies
                        </Typography>
                        <Typography variant="body1" color="white">
                            Terms & Conditions
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FooterItem;
