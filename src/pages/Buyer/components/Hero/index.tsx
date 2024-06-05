import { Box, Button, Card, CardContent, Typography } from "@mui/material"

const Hero = () => {

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                }}
            >
                <img 
                    src="https://img.freepik.com/free-photo/orange-copy-space-background-with-sale-idea_23-2148305925.jpg?t=st=1717140472~exp=1717144072~hmac=e1bdf160f339e45119bef322dc5fe8987f22d2d9d9d1aafcfd934436488ebc80&w=1380" 
                    alt="" 
                    style={{ 
                        width: '100%',
                    }} 
                />
            </Box>
        </>
    )
}

export default Hero