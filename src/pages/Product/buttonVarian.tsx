import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  IconButton,
  Autocomplete,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import AddIcon from "@mui/icons-material/Add";
import { DeleteOutlineOutlined, TextSnippet } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ModalVarian from "./atom/modalVarian";
import React from "react";
import ImageProduct from "./atom/imageProduct";

const NewProduct = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSize, setIsOpenSize] = useState<boolean>(false);
  const [selected, setSelected] = React.useState(false);

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Informasi Produk
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Nama Produk
        </Typography>
        <TextField
          placeholder="Cari Produk"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, mr: 1, mb: 3 }}
        />
        <Typography variant="body2" sx={{ mb: 1 }}>
          URL Halaman Checkout
        </Typography>
        <TextField
          placeholder="nama-produk"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, mr: 1, mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">lakoe.store/</InputAdornment>
            ),
          }}
        />
        <Typography variant="body2" sx={{ mb: 1 }}>
          Kategori
        </Typography>
        <FormControl
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, minWidth: 120, mr: 2 }}
        >
          <InputLabel>Semua Kategori</InputLabel>
          <Select
            label="Semua Kategori"
            multiple
            value={selectedCategories}
            onChange={handleCategoryChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="basic">
              <Checkbox checked={selectedCategories.indexOf("basic") > -1} />
              <Typography>Basic</Typography>
            </MenuItem>
            <MenuItem value="premium">
              <Checkbox checked={selectedCategories.indexOf("premium") > -1} />
              <Typography>Premium</Typography>
            </MenuItem>
            <MenuItem value="limited">
              <Checkbox checked={selectedCategories.indexOf("limited") > -1} />
              <Typography>Limited</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Detail Produk
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Deskripsi
        </Typography>
        <TextField
          placeholder="Cari Produk"
          variant="outlined"
          size="small"
          fullWidth
          multiline
          rows={6}
          sx={{ flex: 1, mr: 1, mb: 3 }}
        />
        <Typography variant="body2" sx={{ mb: 1 }}>
          Foto Produkk
        </Typography>
        {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto Utama
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto 2
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto 3
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto 4
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto 5
              </Typography>
            </IconButton>
          </Box>
        </Box> */}
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Varian Produk
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1, mr: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Nama Produk
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, color: "gray", fontSize: 12 }}
            >
              Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!
            </Typography>
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
                onClick={() => setIsOpenSize(!isOpenSize)}
              >
                {isOpenSize ? "" : ""}
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
          </Box>

          <Box>
            <Button
              variant="outlined"
              sx={{
                flex: 1,
                borderRadius: 20,
                color: "black",
                borderColor: "black",
              }}
            >
              <DeleteOutlineOutlined />
              Hapus Varian
            </Button>
          </Box>
        </Box>
      </Box>

      {/* button warna */}

      <Box
        display={isOpen ? "block" : "none"}
        sx={{
          bgcolor: isOpen ? "white" : "blue",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Warna <span style={{ color: "red" }}> * </span>
        </Typography>
        <Autocomplete
          multiple
          id="multiple-limit-tags"
          options={top100Films}
          getOptionLabel={(option) => option.color}
          renderInput={(params) => (
            <TextField {...params} placeholder="Pilih Warna" />
          )}
          sx={{ width: "820px" }}
        />

        <FormControlLabel
          control={<Switch sx={{ m: 1 }} defaultChecked />}
          label="Gunakan foto Varian"
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto Sage
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto Hitam
              </Typography>
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            p: 2,
            fontWeight: "bold",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Daftar Varian
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <Typography variant="body2" sx={{}}>
              Kamu dapat mengatur harga, stok,SKU sekaligus
            </Typography>

            <TextSnippet />
            Atur Sekaligus
            <ModalVarian />
          </Box>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Sage{" "}
            </Typography>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label="Aktif"
            />
            {/* <span style={{ color: "red" }}> * </span>  */}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 59,
              p: 1,
            }}
          >
            <Typography>
              Harga <span style={{ color: "red" }}> * </span>
            </Typography>
            <Typography>
              Stok Produk <span style={{ color: "red" }}> * </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              p: 1,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 44,
              p: 1,
            }}
          >
            <Typography>SKU (Stok Keeping Unit)</Typography>
            <Typography>Berat Produk</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Gram</InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Hitam{" "}
            </Typography>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label="Aktif"
            />
            {/* <span style={{ color: "red" }}> * </span>  */}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 59,
              p: 1,
            }}
          >
            <Typography>
              Harga <span style={{ color: "red" }}> * </span>
            </Typography>
            <Typography>
              Stok Produk <span style={{ color: "red" }}> * </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              p: 1,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 44,
              p: 1,
            }}
          >
            <Typography>SKU (Stok Keeping Unit)</Typography>
            <Typography>Berat Produk</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Gram</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* button Size */}

      <Box
        display={isOpenSize ? "block" : "none"}
        sx={{
          bgcolor: isOpenSize ? "white" : "blue",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Warna <span style={{ color: "red" }}> * </span>
        </Typography>
        <Autocomplete
          multiple
          id="multiple-limit-tags"
          options={top100Films}
          getOptionLabel={(option) => option.color}
          renderInput={(params) => (
            <TextField {...params} placeholder="Pilih Warna" />
          )}
          sx={{ width: "820px" }}
        />

        <FormControlLabel
          control={<Switch sx={{ m: 1 }} defaultChecked />}
          label="Gunakan foto Varian"
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto Sage
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              borderStyle: "dashed",
              width: 150,
              height: 150,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "gray" }} />
              <Typography variant="body2" sx={{ mb: 1, color: "gray" }}>
                Foto Hitam
              </Typography>
            </IconButton>
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Size <span style={{ color: "red" }}> * </span>
        </Typography>
        <Autocomplete
          multiple
          id="multiple-limit-tags"
          options={size}
          getOptionLabel={(option) => option.size}
          renderInput={(params) => (
            <TextField {...params} placeholder="Pilih Size" />
          )}
          sx={{ width: "820px" }}
        />

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            p: 2,
            fontWeight: "bold",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Daftar Varian
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <Typography variant="body2" sx={{}}>
              Kamu dapat mengatur harga, stok,SKU sekaligus
            </Typography>

            <TextSnippet />
            Atur Sekaligus
            <ModalVarian />
          </Box>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Sage-S{" "}
            </Typography>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label="Aktif"
            />
            {/* <span style={{ color: "red" }}> * </span>  */}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 59,
              p: 1,
            }}
          >
            <Typography>
              Harga <span style={{ color: "red" }}> * </span>
            </Typography>
            <Typography>
              Stok Produk <span style={{ color: "red" }}> * </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              p: 1,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 44,
              p: 1,
            }}
          >
            <Typography>SKU (Stok Keeping Unit)</Typography>
            <Typography>Berat Produk</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Gram</InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Sage-M{" "}
            </Typography>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label="Aktif"
            />
            {/* <span style={{ color: "red" }}> * </span>  */}
          </Box>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 59,
              p: 1,
            }}
          >
            <Typography>
              Harga <span style={{ color: "red" }}> * </span>
            </Typography>
            <Typography>
              Stok Produk <span style={{ color: "red" }}> * </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              p: 1,
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              gap: 44,
              p: 1,
            }}
          >
            <Typography>SKU (Stok Keeping Unit)</Typography>
            <Typography>Berat Produk</Typography>
          </Box>




          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                placeholder="Rp"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 0.5 }}>
              <TextField
                placeholder="masukkan jumlah stok"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Gram</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            Sage-L{" "}
          </Typography>
          <FormControlLabel
            control={<Switch sx={{ m: 1 }} defaultChecked />}
            label="Aktif"
          />
          {/* <span style={{ color: "red" }}> * </span>  */}
        </Box>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 59,
            p: 1,
          }}
        >
          <Typography>
            Harga <span style={{ color: "red" }}> * </span>
          </Typography>
          <Typography>
            Stok Produk <span style={{ color: "red" }}> * </span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            p: 1,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 44,
            p: 1,
          }}
        >
          <Typography>SKU (Stok Keeping Unit)</Typography>
          <Typography>Berat Produk</Typography>
        </Box>




        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Gram</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            Hitam-S{" "}
          </Typography>
          <FormControlLabel
            control={<Switch sx={{ m: 1 }} defaultChecked />}
            label="Aktif"
          />
          {/* <span style={{ color: "red" }}> * </span>  */}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 59,
            p: 1,
          }}
        >
          <Typography>
            Harga <span style={{ color: "red" }}> * </span>
          </Typography>
          <Typography>
            Stok Produk <span style={{ color: "red" }}> * </span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            p: 1,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 44,
            p: 1,
          }}
        >
          <Typography>SKU (Stok Keeping Unit)</Typography>
          <Typography>Berat Produk</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">Gram</InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            Hitam-M{" "}
          </Typography>
          <FormControlLabel
            control={<Switch sx={{ m: 1 }} defaultChecked />}
            label="Aktif"
          />
          {/* <span style={{ color: "red" }}> * </span>  */}
        </Box>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 59,
            p: 1,
          }}
        >
          <Typography>
            Harga <span style={{ color: "red" }}> * </span>
          </Typography>
          <Typography>
            Stok Produk <span style={{ color: "red" }}> * </span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            p: 1,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 44,
            p: 1,
          }}
        >
          <Typography>SKU (Stok Keeping Unit)</Typography>
          <Typography>Berat Produk</Typography>
        </Box>




        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Gram</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            Hitam-M{" "}
          </Typography>
          <FormControlLabel
            control={<Switch sx={{ m: 1 }} defaultChecked />}
            label="Aktif"
          />
          {/* <span style={{ color: "red" }}> * </span>  */}
        </Box>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 59,
            p: 1,
          }}
        >
          <Typography>
            Harga <span style={{ color: "red" }}> * </span>
          </Typography>
          <Typography>
            Stok Produk <span style={{ color: "red" }}> * </span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            p: 1,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"></InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: 44,
            p: 1,
          }}
        >
          <Typography>SKU (Stok Keeping Unit)</Typography>
          <Typography>Berat Produk</Typography>
        </Box>




        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, p: 1 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Rp"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 0.5 }}>
            <TextField
              placeholder="masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Gram</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Minimal Pembelian
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Minimal Pembelian
        </Typography>

        <TextField
          placeholder="1"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, mr: 1, mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Produk</InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 2,
          fontWeight: "bold",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Ukuran Produk
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Ukuran Produk
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Panjang"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Lebar"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              placeholder="Tinggi"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        //buttonsimpan
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            p: 2,
            fontWeight: "bold",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, mr: 2 }}>
              {/* <Button variant="contained" color="primary" hidden sx={{ flex: 1 }}>
                Preview
              </Button> */}
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                sx={{ flex: 1, mr: 1, borderRadius: "20px" }}
              >
                Batal
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ flex: 1, borderRadius: "20px" }}
              >
                Simpan
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewProduct;

const top100Films = [
  { color: "Red" },
  { color: "Sage" },
  { color: "Yellow" },
  { color: "Green" },
];


const size = [
  { size: "S" },
  { size: "L" },
  { size: "M" },
  { size: "XL" },
  { size: "XXL" },
];