import { Typography, Box, TextField, Button } from '@mui/material'


const Courier = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", marginY: 4 }}>
                <Typography variant="h6">
                    Add Courier
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: 5 }}>
                        <TextField label="Courier Code " sx={{ width: "400px", mt: 3 }} />
                        <TextField label="Courier Servis Name" sx={{ width: "400px", mt: 3 }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", gap: 5 }}>
                        <TextField label="Courier Servis Code" sx={{ width: "400px", mt: 3 }} />
                        <TextField label="Price" sx={{ width: "400px", mt: 3 }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "end", gap: 5, justifyContent: "flex-end" }}>
                    <Button
                        type="submit" variant="contained" sx={{ marginX: 2, width: "100px", mt: 1, }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Courier

