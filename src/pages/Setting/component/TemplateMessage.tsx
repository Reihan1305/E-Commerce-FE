import { Box, Typography } from '@mui/material';
import React from 'react';
import ModalCreateMessage from './atom/message/ModalCreateMessage';
import ModalEditMessage from './atom/message/ModalEditMessage';
import ModalDeleteMessage from './atom/message/ModalDeleteMessage';
import { IMessageTemplates } from '../../../types/app';

interface TemplateMessageProps {
  messageTemplates: IMessageTemplates[]
}

const TemplateMessage: React.FC<TemplateMessageProps> = ({ messageTemplates = [] }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h6' fontWeight={700}>
          Daftar Template Pesan
        </Typography>
        <ModalCreateMessage />
      </Box>
      <Box mt={"30px"}>
        {messageTemplates.length > 0 ? (
          messageTemplates.map((item, index) => (
            <Box key={index} mb={"20px"} sx={{ border: "1px solid grey", padding: "20px", borderRadius: "10px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant='body1' fontWeight={700}>
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <ModalEditMessage name={item.name} detail={item.content} />
                  <ModalDeleteMessage title={item.name} />
                </Box>
              </Box>
              <Typography variant='body2'>
                {item.content}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant='body1' color="grey" fontStyle="italic">
            Tidak ada template pesan yang tersedia.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default TemplateMessage;

