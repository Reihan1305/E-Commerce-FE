import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOffIcon from "@mui/icons-material/LocationOff";
import AddLocationModal from "./atom/location/LocationModal";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditLocationAltRoundedIcon from "@mui/icons-material/EditLocationAltRounded";
import EditLocationModal from "./atom/location/editLocationModal";
import DeleteLocationModal from "./atom/location/deleteLocationModal";
import EditCoordinatModal from "./atom/location/editKoordinatModal";

const DummyLocation = [
  {
    namaLokasi: "Fesyen Store",
    alamatUtama: true,
    alamat: "Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan",
    kotaKecamatan: "Kota Tangerang Selatan, Kec. Ciputat",
    kodePos: "15413",
    latitude: "102222",
    longitude: "1021212",
  },
  {
    namaLokasi: "Fesyen Store 2",
    alamatUtama: false,
    alamat: "Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan",
    kotaKecamatan: "Kota Tangerang Selatan, Kec. Ciputat",
    kodePos: "15413",
    latitude: "102222",
    longitude: "1021212",
  },
  {
    namaLokasi: "Fesyen Store 3",
    alamatUtama: false,
    alamat: "Jl. Elang, No. 4, Sawah lama, Ciputat, Tangerang Selatan",
    kotaKecamatan: "Tangerang Selatan",
    kodePos: "15413",
  },
];

function Location() {
  const [open, setOpen] = React.useState(false);
  const [openCoordinatModal, setOpenCoordinatModal] = React.useState(false)

  const  handleOpenCoordinat = () => setOpenCoordinatModal(true);
  const  handleCloseCoordinat = () => setOpenCoordinatModal(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Lokasi Toko
          </Typography>
          {/* <Typography variant='body2' fontWeight={500} color={"grey"}>
            Alamat ini akan digunakan sebagai alamat pengiriman mu
          </Typography> */}
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={handleOpen}
            size="large"
            sx={{
              backgroundColor: "#0086B4",
              color: "white",
              borderRadius: "20px",
              paddingX: "20px",
            }}
          >
            Tambah Lokasi Baru
          </Button>
          <AddLocationModal open={open} handleClose={handleClose} />
        </Box>
      </Box>
      <Box mt={"30px"}>
        {DummyLocation.map((item) => (
          <Box
            mb={"20px"}
            sx={{
              border: "1px solid grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box sx={{ width: "80%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight={500}>Nama Lokasi</Typography>
                  <Box sx={{ display: "flex", width: "350px", gap: "10px" }}>
                    <Typography variant="body1" fontWeight={700}>
                      {item.namaLokasi}
                    </Typography>
                    {item.alamatUtama ? (
                      <Typography
                        bgcolor={"#008F5D"}
                        paddingX={"5px"}
                        color={"white"}
                        borderRadius={"5px"}
                      >
                        Alamat Utama
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight={500}>Alamat</Typography>
                  <Box sx={{ display: "flex", width: "350px", gap: "10px" }}>
                    <Typography fontWeight={500}>{item.alamat}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight={500}>Kota/Kecamatan</Typography>
                  <Box sx={{ display: "flex", width: "350px", gap: "10px" }}>
                    <Typography fontWeight={500}>
                      {item.kotaKecamatan}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight={500}>Kode Post</Typography>
                  <Box sx={{ display: "flex", width: "350px", gap: "10px" }}>
                    <Typography fontWeight={500}>{item.kodePos}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontWeight={500}>PinPoint</Typography>
                  <Box sx={{ display: "flex", width: "350px", gap: "10px" }}>
                    <Typography fontWeight={500}>
                      {item.latitude && item.longitude ? (
                        <Box sx={{ display: "flex" }}>
                          <LocationOnIcon style={{ fill: "#0086B4" }} />{" "}
                          <Typography color={"#0086B4"}>
                            {" "}
                            Sudah Pinpoint
                          </Typography>
                        </Box>
                      ) : (
                        <>
                        <Button sx={{padding:"0"}} onClick={handleOpenCoordinat}>
                          <Box sx={{ display: "flex" }}>
                            <LocationOffIcon style={{fill:"black"}}/>{" "}
                            <Typography variant="body2">Belum Pinpoint</Typography>
                          </Box>
                        </Button>
                        <EditCoordinatModal open={openCoordinatModal} handleClose={handleCloseCoordinat} kabupaten={item.kotaKecamatan}/>
                        </>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{display:"flex",justifyContent:"start",alignItems:"start"}}>
                <EditLocationModal />
                <DeleteLocationModal/>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Location;
