import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Autocomplete,
  IconButton,
} from "@mui/material"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Provinsi from "../../../../../Json/dataDaerah.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface EditCoordinatModalProps {
    open: boolean;
    handleClose: () => void;
    kecamatan: string;
}


const EditCoordinatModal : React.FC<EditCoordinatModalProps> = ({open,handleClose,kecamatan}) =>{
  const [provinsi, setProvinsi] = useState(Provinsi)
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [options, setOptions] = useState<
    {
      value: string;
      label: string;
      regencyId: string;
      locationDetail: { latitude: number; longitude: number };
    }[]
  >([]);

  useEffect(() => {
    if (provinsi.length === 0) return; // Make sure provinsi is not empty

    const newOptions: {
      value: string;
      regencyId: string;
      label: string;
      locationDetail: { latitude: number; longitude: number };
    }[] = [];
    provinsi.forEach((provinsi) => {
      provinsi?.regencies.forEach((regency) => {
        regency.districts.forEach((district) => {
          newOptions.push({
            locationDetail: {
              latitude: district.latitude,
              longitude: district.longitude,
            },
            value: district.name,
            regencyId: regency.id,
            label: `${district.name}, ${regency.name}, ${provinsi?.name}`,
          });
        });
      });
    });

    setOptions(newOptions);
  }, [provinsi]);

  // Function to find and set marker position based on kecamatan
  useEffect(() => {
    const selectedOption = options.find(option => option.value.toLowerCase() === (kecamatan ? kecamatan.toLowerCase() : ''));
    if (selectedOption) {
      const { latitude, longitude } = selectedOption.locationDetail;
      setMarkerPosition([latitude, longitude]);
    }
  }, [kecamatan, options]);
  

  const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    map.setView(center);
    return null;
  };

  const handleMarkerDragEnd = (event: L.LeafletEvent) => {
    const marker = event.target;
    const position = marker.getLatLng();
    setMarkerPosition([position.lat, position.lng]);
  };

  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box sx={{ width: "100%" }}>
          <MapContainer
            style={{ width: "100%", height: "200px" }}
            center={markerPosition}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={markerPosition}
              draggable={true}
              eventHandlers={{ dragend: handleMarkerDragEnd }}
            >
            </Marker>
            <ChangeView center={markerPosition} />
          </MapContainer>
        </Box>
        <Box mt={2} display="flex" justifyContent="end" gap={"10px"}>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Batalkan
          </Button>
          <Button variant="contained" color="primary" >
            Simpan
          </Button>
        </Box>
      </Box>
    </Modal>
    </>
  );
};

export default EditCoordinatModal;
