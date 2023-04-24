import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const BottomInfo = () => {
  return (
    <>
      <Box mt={4}>
        <Typography fontSize="18px" fontWeight="bold">
          წესები და პირობები
        </Typography>
        <Box
          sx={{
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#25292B",
            p: 1.5,
            my: 1.5,
          }}
        >
          <Accordion>
            <AccordionSummary
              sx={{ bgcolor: "#25292B", color: "white" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                როდის იწყება და რა ფორმატით გაიმართება აქცია
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "#25292B", color: "white" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box
          sx={{
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#25292B",
            p: 1.5,
            my: 1.5,
          }}
        >
          <Accordion>
            <AccordionSummary
              sx={{ bgcolor: "#25292B", color: "white" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>როგორ მივიღო აქციაში მონაწილეობა?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "#25292B", color: "white" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            color: "white",
            borderRadius: "15px",
            backgroundColor: "#25292B",
            p: 1.5,
            my: 1.5,
          }}
        >
          <Accordion>
            <AccordionSummary
              sx={{ bgcolor: "#25292B", color: "white" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>სხვადასვა</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "#25292B", color: "white" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};
