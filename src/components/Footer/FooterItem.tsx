import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FooterItem() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: "#F8F8F8",
                textAlign: 'center',
            }}
        >
            <Typography variant="body1">
                &copy; 2024 Fadil All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Dibuat dengan cinta kasih
            </Typography>
        </Box>
    );
}

export default FooterItem;
