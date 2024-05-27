import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

const SortDropDown = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 2 }}>
            <TextField
                label="Cari Pesanan"
                variant="outlined"
                size="small"
                sx={{ flex: 1, mr: 1 }}
            />

            <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120, mr: 2 }}>
                <InputLabel>Kurir</InputLabel>
                <Select label="Kurir">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="jne">JNE</MenuItem>
                    <MenuItem value="jnt">JNT</MenuItem>
                    <MenuItem value="sicepat">Sicepat</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" size='small' sx={{ flex: 1, minWidth: 120 }}>
                <InputLabel>Urutkan</InputLabel>
                <Select
                    label="Urutkan"
                // value={sortBy}
                // onChange={handleSortByChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="baru">Paling Baru</MenuItem>
                    <MenuItem value="lama">Paling Lama</MenuItem>
                    <MenuItem value="tercepat">Respons Tercepat</MenuItem>
                    <MenuItem value="terlama">Respons Terlama</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SortDropDown