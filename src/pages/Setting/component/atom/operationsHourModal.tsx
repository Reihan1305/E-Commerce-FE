import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { EditNoteRounded } from '@mui/icons-material';
import { IconButton, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { IOperationHours } from '../../../../types/app';

interface Iprops {
    OperationsHours :IOperationHours
}

export default function OperationsHoursModal ({OperationsHours}: Iprops) {
     const [open, setOpen] = React.useState(false);
     const [selectedDays, setSelectedDays] = React.useState<string[]>(OperationsHours.day.split(',')); // Split the days if already selected multiple days
     const [openTimeValue, setOpenTimeValue] = React.useState(OperationsHours.openAt);
     const [closeTimeValue, setCloseTimeValue] = React.useState(OperationsHours.closeAt);
     const [statusValue, setStatusValue] = React.useState(OperationsHours.isOff);

     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     const handleSave = () => {
      let selectedDaysValue = "";
      if (selectedDays.length === 1) {
          selectedDaysValue = selectedDays[0];
      } else if (selectedDays.length > 1) {
          const sortedDays = [ 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu','Minggu'];
          const selectedIndices = selectedDays.map(day => sortedDays.indexOf(day));
          selectedIndices.sort((a, b) => a - b); // Sort the indices
          
          let consecutiveRanges = [];
          let start = selectedIndices[0];
          let end = selectedIndices[0];
          for (let i = 1; i < selectedIndices.length; i++) {
              if (selectedIndices[i] === end + 1) {
                  end = selectedIndices[i];
              } else {
                  consecutiveRanges.push([start, end]);
                  start = selectedIndices[i];
                  end = selectedIndices[i];
              }
          }
          consecutiveRanges.push([start, end]);
          
          selectedDaysValue = consecutiveRanges.map(range => {
              if (range[0] === range[1]) {
                  return sortedDays[range[0]];
              } else {
                  return sortedDays[range[0]] + ' - ' + sortedDays[range[1]];
              }
          }).join(', ');
      }
      
      // Remove trailing comma if present
      selectedDaysValue = selectedDaysValue.replace(/, $/, '');
  
      console.log(selectedDaysValue, openTimeValue, closeTimeValue, statusValue);
      handleClose(); // Close the modal after saving
  };
     const handleSelectAllDays = () => {
        setSelectedDays(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']);
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
                Edit Operation Hours
              </Typography>
              <IconButton onClick={handleClose}>
                <HighlightOffRoundedIcon />
              </IconButton>
            </Box>
            <Box sx={{ paddingX: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  value={selectedDays}
                  onChange={(event, newValue) => {
                    if(newValue.includes('Semua Hari')) {
                      handleSelectAllDays();
                    } else {
                      setSelectedDays(newValue);
                    }
                  }}
                  options={['Semua Hari', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" placeholder="Pilih hari" />
                  )}
                />
              </FormControl>
              <TextField
                label="Jam Buka"
                value={openTimeValue}
                onChange={(e) => setOpenTimeValue(e.target.value)}
              />
              <TextField
                label="Jam Tutup"
                value={closeTimeValue}
                onChange={(e) => setCloseTimeValue(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusValue}
                  onChange={(e) => setStatusValue(e.target.value == "buka" ? false : true)}
                >
                  <MenuItem value="Buka">Buka</MenuItem>
                  <MenuItem value="Tutup">Tutup</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button onClick={handleClose} sx={{ backgroundColor: "white", border: "1px solid grey", borderRadius: "20px", color: "black", paddingX: "10px" }}>
                Batalkan
              </Button>
              <Button onClick={handleSave} sx={{ color: "white", backgroundColor: "#0086B4", borderRadius: "20px", paddingX: "10px" }}>
                Simpan
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
