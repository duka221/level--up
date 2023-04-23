import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import banner from "../../assets/banner.jpg";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Container, IconButton, Paper, Stack,  } from "@mui/material";
import { CashGames } from "../cashgames";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



export default function BasicModal() {
  const [value, setValue] = React.useState("1");
  
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
          position: "absolute",
          width: { lg: 900, md: 900, sm: 500, xs: 400 },
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
          sx={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            height: "35vh",
            width: "100%",
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
                p: "30px",
                backgroundColor: "#2C3234",
              }}
            >
              
              <Button onClick={()=> setValue("1")} sx={{textTransform:"none"}} >
                <Box color="white">
                <Typography fontSize="14px">
                  1 - 29 აპრილი
                </Typography>
                <Typography fontSize="18px">
                  Cash Games
                </Typography>
                </Box>     
              </Button>
              <Button onClick={()=> setValue("2")} sx={{textTransform:"none"}} >
                <Box color="white" >
                <Typography fontSize="14px">
                  13 - 29 აპრილი
                </Typography>
                <Typography fontSize="18px">
                  Spring Series
                </Typography>
                </Box>     
              </Button>
              <Button onClick={()=> setValue("3")} sx={{textTransform:"none"}}>
                <Box color="white">
                <Typography fontSize="14px">
                  30 აპრილი
                </Typography>
                <Typography fontSize="18px">
                  Final Stage
                </Typography>
                </Box>     
              </Button>
             
            </Stack>
            <TabPanel sx={{ p: 0 }} value="1">
              <CashGames />{" "}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
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
