import { ArrowDropDownCircle } from "@mui/icons-material";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Tab, Tabs, Typography } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Information from "./component/information";
import TemplateMessage from "./component/TemplateMessage";
import Location from "./component/Location";
import { useAppDispatch, useAppSelector } from "../../store";
import { getStoreLoginAsync } from "../../store/async/storeLoginAsync";

const Setting = () => {
  const [value, setValue] = React.useState('1');

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getStoreLoginAsync());
  }, [dispatch]);

  const storeLogin = useAppSelector((state) => state.storeLogin.store);

  console.log(storeLogin);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="h5" fontWeight={700}>
        {storeLogin ? storeLogin.name : "Loading..."}
      </Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab sx={{ fontSize: "medium", fontWeight: "700" }} label="Informasi" value="1" />
              <Tab sx={{ fontSize: "medium", fontWeight: "700" }} label="Template Pesan" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Information store={storeLogin} key={storeLogin.id} /></TabPanel>
          <TabPanel value="3"><TemplateMessage  templateMessage={storeLogin.messageTemplates}/></TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default Setting;
