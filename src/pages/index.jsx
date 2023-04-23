import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import banner from "../assets/banner.jpg";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Container, IconButton, Paper, Stack,  } from "@mui/material";
import { CashGames } from "../components/cashgames/index";
import { SpringSeries } from "../components/springseries";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FinalStage } from "../components/finalstage";



export default function BasicModal() {
  const [value, setValue] = React.useState("1");
  const ButtonStyle = {
    textTransform:"none",
    backgroundColor: "#ff6600",
    transition: "background-color 0.5s ease, outline 0.3s ease",
    outline: "10px solid #ff6600",
    ml: value === 0 ? "7px" : "0",
    mr: value === 2 ? "7px" : "0",
    color: "white",
    zIndex: 1,
    height: 77,
    boxShadow: "none",
  };
  return (
    <Modal
      sx={{
        my: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          bgcolor:"#1C1D1E",
          position: "absolute",
          width: { lg: 900, md: 900, sm: 600, xs: 400 },
          maxHeight: "99vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.0em",
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "9999px",
          },
        }}
      >
        <Box
          component="img"
          src={banner}
          sx={{
            objectFit: "cover",
            width: 1,
            borderRadius: "inherit",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
          <Stack direction="row" justifyContent="space-between" width='870px' padding={1} sx={{position:'fixed', top:10, zIndex:200}}>
            <Stack
              direction="row"
              gap={1}
              textAlign="center"
              sx={{
                border: "2px",
                color: "white",
                borderRadius: "50px",
                padding: "5px",
                backgroundColor: "#25292B",
                fontSize: "15px",
                display: { lg: "inherit", md: "inherit", sm: "none", xs: "none" },
              "&:hover": {
                bgcolor: "#15181a",
                transition: "background-color 0.3s ease-in-out",
              },
              }}
            >
              <Typography
                sx={{
                  border: "2px",
                  color: "white",
                  borderRadius: "50px",
                  padding: "5px",
                  backgroundColor: "#44494B",
                  display: { lg: "inherit", md: "inherit", sm: "none", xs: "none" },
              "&:hover": {
                bgcolor: "#15181a",
                transition: "background-color 0.3s ease-in-out",
              },
                }}
              >
                სლოტები
              </Typography>
              <Typography mt={0.55}> 10 იანვარი - 12 მარტი </Typography>
            </Stack>
            <IconButton
            sx={{
              color:"white",
              bgcolor: "#25292B",
              display: { lg: "inherit", md: "inherit", sm: "none", xs: "none" },
              "&:hover": {
                bgcolor: "#15181a",
                transition: "background-color 0.3s ease-in-out",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          </Stack>
        <Box
          sx={{
            bgcolor: "#1C1D1E",
            color: "white",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
            }}
            fontWeight="bold"
          >
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </Typography>
          <Typography
            sx={{
              mt: "10px",
              fontSize: "16px",
              color: "white",
            }}
          >
            მოხვდი პოკერის ფესტივალზე მალტაში
          </Typography>

          <TabContext value={value}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
              sx={{
                border: "2px",
                color: "white",
                borderRadius: "20px",
                px: "10px",
                backgroundColor: "#2C3234",
              }}
            >
              
              <Button fullWidth onClick={()=> setValue("1")} sx={value === "1" ? ButtonStyle : {textTransform:"none"}} >
                <Box color="white">
                <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                  1 - 29 აპრილი
                </Typography>
                <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                  Cash Games
                </Typography>
                </Box>     
              </Button>
              <Button  fullWidth onClick={()=> setValue("2")} sx={value === "2" ? ButtonStyle : {textTransform:"none"}} >
                <Box color="white" >
                <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                  13 - 29 აპრილი
                </Typography>
                <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                  Spring Series
                </Typography>
                </Box>     
              </Button>
              <Button fullWidth onClick={()=> setValue("3")} sx={value === "3" ? ButtonStyle : {textTransform:"none"}}  >
                <Box color="white">
                <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                  30 აპრილი
                </Typography>
                <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                  Final Stage
                </Typography>
                </Box>     
              </Button>
             
            </Stack>
            <TabPanel sx={{ p: 0 }} value="1">
              <CashGames />{" "}
            </TabPanel>
            <TabPanel value="2"><SpringSeries/></TabPanel>
            <TabPanel value="3"><FinalStage/></TabPanel>
          </TabContext>
        </Box>
        <Container
        component={Paper}
        maxWidth="md"
        sx={{
          border: "none",
          borderRadius: 0,
          bgcolor: "#171718",
          position: "fixed",
          bottom: 0,
          borderTop: "4px solid #ff6600",
          zIndex: 200,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 70,
          }}
        >
          <Button size="large" sx={{color:"white",
            bgcolor:"#F05A22"}}>ითამაშე</Button>
        </Stack>
      </Container>
      </Paper>
    </Modal>
  );
}
