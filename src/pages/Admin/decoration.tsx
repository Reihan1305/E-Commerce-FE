import { Typography, Box, TextField, Button } from '@mui/material';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { API } from '../../lib/api';

const Decoration = () => {
    const [decorationName, setDecorationName] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDecorationName(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await API.post(
                'http://localhost:3000/decoration',
                { type: decorationName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Decoration added:', response.data);
            setDecorationName('');
        } catch (error) {
            console.error('Error adding decoration:', error);
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginY: 4 }}>
            <Typography variant="h6">
                Add decoration
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "start", marginY: 4 }}>
                <TextField
                    onChange={handleInputChange}
                    value={decorationName}
                    label="Type Decoration"
                    sx={{ width: "400px" }}
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ marginX: 2, width: "100px", mt: 1 }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default Decoration;
