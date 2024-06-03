import { Typography, Box, TextField, Button } from '@mui/material'


const decoration = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 4 }}>
                <Typography variant="h6">
                    Add decoration
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", marginY: 4 }}>
                    <TextField label="Type Decoration" sx={{ width: "400px" }} />
                    <Button
                        type="submit" variant="contained" sx={{ marginX: 2, width: "100px", mt: 1 }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default decoration

