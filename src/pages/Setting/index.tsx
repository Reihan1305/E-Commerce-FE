import { ArrowDropDownCircle } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"

const Setting = () => {
    return (
        <Box>
             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
    )
}

export default Setting