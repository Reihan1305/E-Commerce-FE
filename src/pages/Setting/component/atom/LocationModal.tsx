import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, MenuItem } from '@mui/material';

const cities = [
  { label: 'Cipunagara, Kab. Subang, Jawa Barat', value: 'Cipunagara' },
  { label: 'Ciputat, Kota Tangerang Selatan, Banten', value: 'Ciputat' },
  { label: 'Ciputat Timur, Kota Tangerang Selatan, Banten', value: 'Ciputat Timur' }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface AddLocationModalProps {
    open: boolean;
    handleClose: () => void;
  }

  const AddLocationModal: React.FC<AddLocationModalProps> = ({ open, handleClose }) => {
  const [locationName, setLocationName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    // Logika untuk menyimpan data
    console.log('Location Name:', locationName);
    console.log('City:', city);
    console.log('Address:', address);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Tambah lokasi baru
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          id="location-name"
          label="Nama Lokasi"
          variant="outlined"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="city"
          select
          label="Kota / Kecamatan"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          id="address"
          label="Tuliskan alamat lengkap toko"
          variant="outlined"
          multiline
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={() => console.log('Atur pinpoint')}>
          Atur pinpoint
        </Button>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" color="error" onClick={handleClose}>
            Batalkan
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Simpan
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddLocationModal;
