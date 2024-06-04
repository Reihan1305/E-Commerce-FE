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
  FormControlLabel,
  Switch,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import ModalVarian from "./atom/modalVarian";
import { TextSnippet } from "@mui/icons-material";

const NewProduct = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [variantType, setVariantType] = useState<string>("");
  const [variants, setVariants] = useState<
    {
      id: number;
      name: string;
      type: string;
      price: number;
      stock: number;
      sku: string;
      weight: number;
    }[]
  >([]);
  const [showVariants, setShowVariants] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSize, setIsOpenSize] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedSize, setIsClickedSize] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  const handleClickSize = () => {
    setIsOpenSize(!isOpenSize);
    setIsClickedSize(!isClickedSize);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  const addVariant = () => {
    const newId =
      variants.length > 0 ? variants[variants.length - 1].id + 1 : 1;
    setVariants([
      ...variants,
      {
        id: newId,
        name: "",
        type: variantType,
        price: 0,
        stock: 0,
        sku: "",
        weight: 0,
      },
    ]);
  };

  const removeVariant = (id: number) => {
    setVariants(variants.filter((variant) => variant.id !== id));
  };

  const handleVariantChange = (id: number, field: string, value: any) => {
    setVariants(
      variants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    );
  };

  const handleToggleVariants = () => {
    setShowVariants(!showVariants);
    if (!showVariants) {
      setVariantType(""); // Reset the variant type when hiding the variant options
    } else {
      setVariants([]); // Clear variants when hiding the variant options
    }
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
          Foto Produk
        </Typography>
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
            mb: 1,
          }}
        >
          Varian Produk
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            mt: 2,
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleToggleVariants}
          >
            {showVariants ? "Hapus Varian" : "Tambah Varian"}
          </Button>
        </Box>
        {showVariants && (
          <>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: isClicked ? "blue" : "transparent", // Change this to the desired color
                  "&:hover": {
                    backgroundColor: isClicked ? "darkblue" : "lightblue", // Change this to the desired hover color
                  },
                }}
                onClick={handleClick}
              >
                {isOpen ? "Warna" : "Warna"}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: isClickedSize ? "blue" : "transparent", // Change this to the desired color
                  "&:hover": {
                    backgroundColor: isClickedSize ? "darkblue" : "lightblue", // Change this to the desired hover color
                  },
                }}
                onClick={handleClickSize}
              >
                {isOpenSize ? "Ukuran" : "Ukuran"}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px", color: "black" }}
                onClick={() => setVariantType("Ukuran Kemasan")}
              >
                Ukuran Kemasan
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px", color: "black" }}
                onClick={() => setVariantType("Tipe Lain")}
              >
                Buat Tipe Varian
              </Button>
            </Box>
          </>
        )}

        {/* Button Warna */}

        <Box
          display={isOpen ? "block" : "none"}
          sx={{
            bgcolor: isOpen ? "white" : "blue",
            borderRadius: "10px",
            p: 2,
            fontWeight: "bold",
            mb: 3,
          }} >
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
            sx={{ width: "700px" }}
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
      </Box>

      {/* size */}
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
          sx={{ width: "700px" }}
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
                endAdornment: <InputAdornment position="end"></InputAdornment>,
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
                endAdornment: <InputAdornment position="end"></InputAdornment>,
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
                endAdornment: <InputAdornment position="end"></InputAdornment>,
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
                endAdornment: <InputAdornment position="end"></InputAdornment>,
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
                endAdornment: <InputAdornment position="end"></InputAdornment>,
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
          Harga
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Harga
        </Typography>
        <TextField
          placeholder="Masukkan harga barang"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, mr: 1, mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rp</InputAdornment>
            ),
          }}
        />
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
          Pengelolaan Produk
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
            <Typography variant="body2" sx={{ mb: 1 }}>
              Stok Produk
            </Typography>
            <TextField
              placeholder="Masukkan jumlah stok"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              SKU (Stock Keeping Unit)
            </Typography>
            <TextField
              placeholder="Masukkan SKU"
              variant="outlined"
              size="small"
              fullWidth
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
          Berat dan Pengiriman
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Berat Produk
        </Typography>
        <TextField
          placeholder="Masukan berat produk!"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ flex: 1, mr: 1, mb: 3 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">gram</InputAdornment>,
          }}
        />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1, mr: 2 }}>
            <Button variant="contained" color="primary" sx={{ flex: 1 }}>
              Preview
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" color="primary" sx={{ flex: 1, mr: 1 }}>
              Batal
            </Button>
            <Button variant="contained" color="primary" sx={{ flex: 1 }}>
              Simpan
            </Button>
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