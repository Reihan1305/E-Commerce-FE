import { ArrowDropDownCircle } from "@mui/icons-material"
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary,  Box, Tab, Tabs, Typography } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Information from "./component/information";
import TemplateMessage from "./component/TemplateMessage";
import Location from "./component/Location";

const Setting = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
      <Typography variant="h5" fontWeight={700}>
        untuk nama toko
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab  sx={{fontSize:"medium", fontWeight:"700"}} label="Informasi" value="1" />
              <Tab  sx={{fontSize:"medium", fontWeight:"700"}} label="Template Pesan" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Information/></TabPanel>
          <TabPanel value="3"><TemplateMessage/></TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default Setting