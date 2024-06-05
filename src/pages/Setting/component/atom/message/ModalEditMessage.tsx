import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { IconButton, TextField } from '@mui/material';
import { EditNoteRounded } from '@mui/icons-material';

interface Iprops {
    name:string,
    detail:string
}

export default function ModalEditMessage({ name, detail }: Iprops) {
     const [open, setOpen] = React.useState(false);
  const [messageDetail, setMessageDetail] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInsertPlaceholder = (placeholder:string) => {
    setMessageDetail((prev) => prev + `[${placeholder}]`);
  };


  return (
    <div>
      <IconButton onClick={handleOpen} >
            <EditNoteRounded />
        </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{
            borderRadius: "10px",
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            px: "20px",
            py: "10px"
          }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <Typography variant="h6" fontWeight={700}>
                Ubah Template Pesan
              </Typography>
              <IconButton onClick={handleClose}>
                <HighlightOffRoundedIcon />
              </IconButton>
            </Box>
            <Box sx={{ paddingX: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box>
                <Typography variant='body1' fontWeight={500}>
                  Judul Pesan
                </Typography>
                <TextField size="small" fullWidth={true}
                  placeholder='Cth.Pesan Konfirmasi Pengiriman'
                  value={name} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Typography variant='body1' fontWeight={500}>
                  Detail Isi Pesan
                </Typography>
                <Box>
                  <Button
                    onClick={() => handleInsertPlaceholder('Nama Pembeli')}
                    sx={{
                      backgroundColor: "white", color: "black", border: "1px solid grey",
                      marginRight: "10px", paddingX: "10px", borderRadius: "20px"
                    }}>
                    Nama Pembeli
                  </Button>
                  <Button
                    onClick={() => handleInsertPlaceholder('Nama Produk')}
                    sx={{
                      backgroundColor: "white", color: "black", border: "1px solid grey",
                      marginRight: "10px", paddingX: "10px", borderRadius: "20px"
                    }}>
                    Nama Produk
                  </Button>
                  <Button
                    onClick={() => handleInsertPlaceholder('Nama Penjual')}
                    sx={{
                      backgroundColor: "white", color: "black", border: "1px solid grey",
                      marginRight: "10px", paddingX: "10px", borderRadius: "20px"
                    }}>
                    Nama Penjual
                  </Button>
                </Box>
                <Box
                  component="textarea"
                  value={detail}
                  onChange={(e) => setMessageDetail(e.target.value)}
                  placeholder="Tuliskan detail pesan"
                  sx={{
                    width: "100%",
                    height: "100px",
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
            <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button onClick={handleClose} sx={{ backgroundColor: "white", border: "1px solid grey", borderRadius: "20px", color: "black", paddingX: "10px" }}>
                Batalkan
              </Button>
              <Button sx={{ color: "white", backgroundColor: "#0086B4", borderRadius: "20px", paddingX: "10px" }}>
                Simpan
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
