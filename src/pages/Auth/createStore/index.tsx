import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import React, { useState } from 'react';

const CreateStore = () => {
  const [icon, setIcon] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(URL.createObjectURL(file));
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 4 }}>
      <Typography variant='h4' fontWeight={700} color="primary" gutterBottom>
        Buat Toko Anda
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}>
        <TextField
          label="Nama Toko"
          name='namaToko'
          placeholder='Masukan Nama Toko Anda'
          color="primary"
          fullWidth
        />
        <TextField
          label="Slogan"
          placeholder='Masukan Slogan Toko Anda'
          color='primary'
          fullWidth
        />
        <TextField
          label="Deskripsi"
          multiline
          rows={4}
          placeholder='Deskripsikan Toko Anda'
          fullWidth
        />
        <TextField
          label="Domain"
          placeholder='RyoikiTenkai.com'
          fullWidth
        />
        <Box>
          <Typography variant="body1" gutterBottom>
            Icon Toko
          </Typography>
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
            {icon ? (
              <Box
                component="img"
                src={icon}
                alt="Icon Toko"
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
                  Unggah Foto
                </Typography>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              id="icon-upload"
              onChange={handleIconChange}
            />
            <IconButton
              sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
              component="label"
              htmlFor="icon-upload"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body1" gutterBottom>
            Banner Toko
          </Typography>
          <Box
            sx={{
              width: "100%",
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
            {banner ? (
              <Box
                component="img"
                src={banner}
                alt="Banner Toko"
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
                  Unggah Foto
                </Typography>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              id="banner-upload"
              onChange={handleBannerChange}
            />
            <IconButton
              sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
              component="label"
              htmlFor="banner-upload"
            />
          </Box>
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Buat Toko
        </Button>
      </Box>
    </Box>
  );
};

export default CreateStore;
