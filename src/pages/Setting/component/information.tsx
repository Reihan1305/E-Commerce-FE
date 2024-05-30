import { Box, Button, TextField, Typography } from '@mui/material'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import React from 'react'

const Information = () => {
  return (
    <Box>
        <Typography variant="h6" fontWeight={700} marginBottom={"20px"}>
            Informasi Toko
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row",gap:"20px"}}>
            <Box>
                <Box gap={"10px"}>
                    <Typography variant="body1" fontWeight={700} color={"grey"}>
                        Nama Toko
                    </Typography>
                    <TextField size='small'  sx={{height:"50px",width:"350px",borderRadius:"20px"}}/>
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={700} color={"grey"}>
                        Slogan
                    </Typography>
                    <TextField size='small' sx={{padding:"1px",height:"50px",width:"350px",borderRadius:"20px"}}/>
                </Box>
            </Box>
            <Box>
            <Box gap={"10px"}>
                    <Typography variant="body1" fontWeight={700} color={"grey"}>
                        Deskripsi
                    </Typography>
                    <Box
                    component="textarea"
                    sx={{
                        width: "350px",
                        height: "110px",
                        borderRadius: "8px",
                        padding: "10px",
                        fontSize: "16px",
                        borderColor: "rgba(0, 0, 0, 0.23)",
                        '&:focus': {
                        borderColor: "rgba(0, 0, 0, 0.87)",
                        },
                        resize: "vertical", // Enables both horizontal and vertical resizing
                    }}
                    />
                </Box>
            </Box>
        </Box>
        <Box sx={{ paddingBottom:"20px", display: "flex", justifyContent: "flex-end", mt: 2 ,borderBottom:"1px solid grey"}}>
        <Button sx={{ backgroundColor: "#0086B4", color: "white",borderRadius:"20px" ,paddingX:"20px",left:"-10px" }}>
          Simpan
        </Button>
      </Box>
      <Box paddingY="20px">
        <Typography variant="h6" fontWeight={700}>
            Logo Toko
        </Typography>
        <Box sx={{
            width: "150px",
            height: "150px",
            border: "1px dashed grey",
            borderRadius: "15px",
            mt: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <AddPhotoAlternateRoundedIcon fontSize='large' sx={{color: 'grey'}}/>
            <Typography variant='body1' fontWeight={500} color="grey">
                Unggah Poto
            </Typography>
        </Box>
        <Typography marginTop={"20px"} variant='body2' fontWeight={500}>
        Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10 Megabytes.
Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
        </Typography>
      </Box>
    </Box>
  )
}

export default Information