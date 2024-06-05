import { Box, Typography,Button, IconButton } from '@mui/material'
import React from 'react'
import ModalCreateMessage from './atom/message/ModalCreateMessage'
import ModalEditMessage from './atom/message/ModalEditMessage';
import ModalDeleteMessage from './atom/message/ModalDeleteMessage';

const messageTemplates = [
  {
    title: 'Pesan Konfirmasi Pesanan',
    details: `
Halo! Terima kasih telah berbelanja di Fesyen Store. Berikut rincian pesanan Anda:
Nama Produk: [Nama Produk]
Jumlah: [Jumlah]
Total Harga: [Total Harga]

Mohon konfirmasi pesanan Anda. Terima kasih!`
  },
  {
    title: 'Pengingat Pembayaran',
    details: `
Halo! Kami ingin mengingatkan Anda tentang pembayaran untuk pesanan Anda di Fesyen Store.
Total Tagihan: [Total Tagihan]
Batas Waktu Pembayaran: [Batas Waktu]

Mohon segera melakukan pembayaran. Terima kasih!`
  }
];

function TemplateMessage() {
  return (
    <Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography variant='h6' fontWeight={700}>
                Daftar Template Pesan
            </Typography>
            <ModalCreateMessage/>
        </Box>
        <Box mt={"30px"}>
          {messageTemplates.map((item)=>(
            <Box mb={"20px"} sx={{border:"1px solid grey",padding:"20px",borderRadius:"10px"}}>
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Typography variant='body1' fontWeight={700}>
                  {item.title}
              </Typography>
              <Box sx={{display:"flex"}}>
                <ModalEditMessage name={item.title} detail={item.details} key={item.title}/>
                <ModalDeleteMessage title={item.title}/>
              </Box>
              </Box>
              <Typography variant='body2'>
                {item.details}
              </Typography>
            </Box>
          ))}
        </Box>
    </Box>
  )
}

export default TemplateMessage