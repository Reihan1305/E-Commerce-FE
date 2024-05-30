import { Button, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
const sizeVarian = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
        <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  bgcolor: "white",
                  border: "1px solid gray",
                  paddingY: 1,
                  fontSize: "10px",
                }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Warna" : "Warna"}
                {/* Warna */}
              </Button>

              <Button
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  bgcolor: "white",
                  border: "1px solid gray",
                  paddingY: 1,
                  fontSize: "10px",
                }}
              >
                Ukuran
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  bgcolor: "white",
                  border: "1px solid gray",
                  paddingY: 1,
                  fontSize: "10px",
                }}
              >
                Ukuran Kemasan
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  bgcolor: "white",
                  border: "1px solid black",
                  paddingY: 1,
                }}
              >
                <AddIcon />
                Buat Tipe Varian
              </Button>
            </Box>
    </>
  )
}

export default sizeVarian