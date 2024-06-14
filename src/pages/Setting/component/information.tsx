import { Box, Button, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import React from 'react';
import OperationsHoursModal from './atom/operationsHourModal';
import { IStore } from '../../../types/app';
import { IOperationHours } from '../../../types/app';

interface InformationProps {
  store: IStore;
}



const Information: React.FC<InformationProps> = ({ store }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [DescValue, setDescValue] = React.useState('');
  const [logo, setLogo] = React.useState<File | null>(null);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(store.logoAttachment);
  const [banner, setBanner] = React.useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = React.useState<string | null>(store.bannerAttachment);
  const [operationsHours, setOperationsHours] = React.useState<IOperationHours>(
    store.OperationHours || {
      id: '',
      day: '',
      closeAt: '',
      openAt: '',
      isOff: false,
    }
  );
  console.log(store)
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(file);
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBanner(file);
        setBannerPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoRemove = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  const handleBannerRemove = () => {
    setBanner(null);
    setBannerPreview(null);
  };

  const handleInputChangeSlogan = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 48) {
      setInputValue(value);
    }
  };

  const handleInputChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= 200) {
      setDescValue(value);
    }
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} marginBottom="20px">
        Informasi Toko
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Box>
          <Box gap="10px">
            <Typography variant="body1" fontWeight={700} color="grey">
              Nama Toko
            </Typography>
            <TextField size="small" placeholder={store.name} sx={{ height: '50px', width: '350px', borderRadius: '20px' }} />
          </Box>
          <Box>
            <Typography variant="body1" fontWeight={700} color="grey">
              Slogan
            </Typography>
            <TextField
              size="small"
              onChange={handleInputChangeSlogan}
              placeholder="slogan untuk toko mu"
              inputProps={{ maxLength: 48 }}
              sx={{ padding: '1px', height: '50px', width: '350px', borderRadius: '20px' }}
            />
            <Typography variant="body2" textAlign="end">
              {`${inputValue.length}/48`}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box gap="10px">
            <Typography variant="body1" fontWeight={700} color="grey">
              Deskripsi
            </Typography>
            <Box
              component="textarea"
              value={DescValue}
              placeholder="deskripsikan toko mu"
              onChange={handleInputChangeDesc}
              sx={{
                width: '350px',
                height: '110px',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '16px',
                borderColor: 'rgba(0, 0, 0, 0.23)',
                '&:focus': {
                  borderColor: 'rgba(0, 0, 0, 0.87)',
                },
                resize: 'vertical',
              }}
            />
            <Typography textAlign="end">{`${DescValue.length}/200`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingBottom: '20px', display: 'flex', justifyContent: 'flex-end', mt: 2, borderBottom: '1px solid grey' }}>
        <Button sx={{ backgroundColor: '#0086B4', color: 'white', borderRadius: '20px', paddingX: '20px', left: '-10px' }}>
          Simpan
        </Button>
      </Box>
      <Box paddingY="20px">
        <Typography variant="h6" fontWeight={700}>
          Banner Toko
        </Typography>
        <Box
          sx={{
            width: '500px',
            height: '240px',
            border: '1px dashed grey',
            borderRadius: '15px',
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {bannerPreview ? (
            <Box
              component="img"
              src={bannerPreview}
              alt="Banner Preview"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
          ) : (
            <>
              <AddPhotoAlternateRoundedIcon fontSize="large" sx={{ color: 'grey' }} />
              <Typography variant="body1" fontWeight={500} color="grey">
                Unggah Foto
              </Typography>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleBannerChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              opacity: 0,
              cursor: 'pointer',
            }}
          />
          {bannerPreview && (
            <IconButton
              onClick={handleBannerRemove}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
        <Typography marginTop="20px" variant="body2" fontWeight={500}>
          Ukuran optimal 1000 x 480 piksel dengan besar file: maksimum 10 megabytes. Ekstensi file yang diperbolehkan: JPG, JPEG, PNG.
        </Typography>
      </Box>
      <Box paddingY="20px">
        <Typography variant="h6" fontWeight={700}>
          Logo Toko
        </Typography>
        <Box
          sx={{
            width: '150px',
            height: '150px',
            border: '1px dashed grey',
            borderRadius: '15px',
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {logoPreview ? (
            <Box
              component="img"
              src={logoPreview}
              alt="Logo Preview"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
          ) : (
            <>
              <AddPhotoAlternateRoundedIcon fontSize="large" sx={{ color: 'grey' }} />
              <Typography variant="body1" fontWeight={500} color="grey">
                Unggah Foto
              </Typography>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              opacity: 0,
              cursor: 'pointer',
            }}
          />
          {logoPreview && (
            <IconButton
              onClick={handleLogoRemove}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Typography marginTop="20px" variant="body2" fontWeight={500}>
        Ukuran optimal 300 x 300 piksel dengan besar file: maksimum 10 megabytes. Ekstensi file yang diperbolehkan: JPG, JPEG, PNG.
      </Typography>
      <Box sx={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', mt: 2, borderTop: '1px solid grey', gap: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={700}>
            Jam Operasional
          </Typography>
          <OperationsHoursModal OperationsHours={operationsHours} key="1" />
        </Box>
        <Box>
          <Typography fontWeight={500}>Hari : {operationsHours.day}</Typography>
          <Typography fontWeight={500}>Buka jam : {operationsHours.openAt}</Typography>
          <Typography fontWeight={500}>Tutup Jam : {operationsHours.closeAt} </Typography>
          <Typography fontWeight={500}>Status : {operationsHours.isOff ? "tutup" :"buka"}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Information;
