import React, { useEffect, useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Autocomplete } from '@mui/material';
import Provinsi from '../../../../Json/dataDaerah.json';
import PostalCode from '../../../../Json/kodePos.json';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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
  const [provinsi, setProvinsi] = useState<[]>(Provinsi);
  const [locationName, setLocationName] = useState('');
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; regencyId: string; locationDetail: { latitude: number, longitude: number } } | null>(null);
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState<string[]>([]);
  const [options, setOptions] = useState<{ value: string; label: string; regencyId: string; locationDetail: { latitude: number, longitude: number } }[]>([]);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (provinsi.length === 0) return; // Make sure provinsi is not empty

    const newOptions: { value: string; regencyId: string; label: string; locationDetail: { latitude: number, longitude: number } }[] = [];
    provinsi.forEach((provinsi) => {
      provinsi?.regencies.forEach((regency) => {
        regency.districts.forEach((district) => {
          newOptions.push({
            locationDetail: { latitude: district.latitude, longitude: district.longitude },
            value: district.name,
            regencyId: regency.id,
            label: `${district.name}, ${regency.name}, ${provinsi?.name}`,
          });
        });
      });
    });

    setOptions(newOptions);
  }, [provinsi]); // Adding provinsi as a dependency

  const handleSave = () => {
    // Logic to save data
    console.log('Location Name:', locationName);
    console.log('Selected Option:', selectedOption?.value);
    console.log('Address:', address);
    handleClose();
  };

  useEffect(() => {
    setPostalCode([]);
    if (selectedOption) {
      const matchedPostalCodes = PostalCode.filter((op) => op.nama.toLowerCase() === selectedOption.value.toLowerCase()).map((op) => op.kodePost);
      setPostalCode(matchedPostalCodes);
      setMarkerPosition([selectedOption.locationDetail.latitude, selectedOption.locationDetail.longitude]);
    } else {
      setMarkerPosition([0, 0]);
    }
  }, [selectedOption]);

  const handleMarkerDragEnd = (event: L.LeafletEvent) => {
    const marker = event.target;
    const position = marker.getLatLng();
    setMarkerPosition([position.lat, position.lng]);
  };

  const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    map.setView(center);
    return null;
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
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: '100%' }}
          value={selectedOption}
          renderInput={(params) => <TextField {...params} label="Kota / Kecamatan" />}
          onChange={(event, value) => setSelectedOption(value)}
        />
        <Autocomplete
          disablePortal
          options={postalCode}
          sx={{ width: '100%', marginTop: "10px" }}
          renderInput={(params) => <TextField {...params} label="Kode Post" />}
        />
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
        <Box sx={{ width: '100%', height: '300px', marginTop: 2 }}>
          <MapContainer style={{ width: '100%', height: '100%' }} center={markerPosition} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <ChangeView center={markerPosition} />
          </MapContainer>
        </Box>
        <Box mt={2} display="flex" justifyContent="end" gap={'10px'}>
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
