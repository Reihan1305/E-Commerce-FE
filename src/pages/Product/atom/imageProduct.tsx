import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

const ImageProduct = () => {
    const [images, setImages] = React.useState(Array(5).fill(null));
    const [previews, setPreviews] = React.useState(Array(5).fill(null));

    const handleImageChange = (index: number, event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = file;
                setImages(newImages);

                const newPreviews = [...previews];
                newPreviews[index] = reader.result;
                setPreviews(newPreviews);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = (index: number) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);

        const newPreviews = [...previews];
        newPreviews[index] = null;
        setPreviews(newPreviews);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            {Array.from({ length: 4 }).map((_, index) => (
                <Box key={index} paddingY="20px">
                    <Box
                        sx={{
                            width: "150px",
                            height: "150px",
                            border: "1px dashed grey",
                            borderRadius: "15px",
                            mt: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            position: 'relative',
                        }}
                    >
                        {previews[index] ? (
                            <Box
                                component="img"
                                src={previews[index]}
                                alt="Image Preview"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '15px',
                                }}
                            />
                        ) : (
                            <>
                                <AddPhotoAlternateRoundedIcon fontSize='large' sx={{ color: 'grey' }} />
                                <Typography variant='body1' fontWeight={500} color="grey">
                                    Upload Image
                                </Typography>
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(event) => handleImageChange(index, event)}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                opacity: 0,
                                cursor: 'pointer',
                            }}
                        />
                        {previews[index] && (
                            <IconButton
                                onClick={() => handleImageRemove(index)}
                                sx={{
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ImageProduct;
