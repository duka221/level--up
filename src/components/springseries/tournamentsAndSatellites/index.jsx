import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import TournametImg from "../../../assets/tournament-bg2.png";
import MainbgImg from "../../../assets/main-bg.png";
import MainImgRes from "../../../assets/main-bg-sm.png";
export const TournSatellities = () => {
  const isLgScreen = useMediaQuery("(min-width: 600px)");
  return (
    <Stack
      mt={2}
      mb={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        border: "4px solid #25292B",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "#171718",
      }}
    >
      <Typography
        fontWeight="bold"
        fontSize="18px"
        mt={2}
        mb={2}
        textAlign="center"
      >
        ყოველდღიური ტურნირები და სატელიტები
      </Typography>
      <Grid container spacing={2} px={2}>
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <Box component="img" src={TournametImg} width="100%"></Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box
              sx={{
                position: "absolute",
                left: { lg: 20, md: 20, sm: 15, xs: 15 },
                bottom: 10,
              }}
            >
              <Typography fontSize="15px" fontWeight="bold">
                {" "}
                Holdem Highrollers{" "}
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                {" "}
                50 000 ₾
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { lg: 70, md: 70, sm: 30, xs: 30 },
                bottom: 18,
              }}
            >
              <Typography fontSize="15px" fontWeight="bold">
                {" "}
                ბაი-ინი - 550₾
              </Typography>
              <Box
                sx={{ bgcolor: "#B78648", borderRadius: "15px 15px 0px 15px" }}
              >
                <Typography fontSize="15px" textAlign="center">
                  {" "}
                  27 აპრილი
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <Box component="img" src={TournametImg} width="100%"></Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box
              sx={{
                position: "absolute",
                left: { lg: 20, md: 20, sm: 15, xs: 15 },
                bottom: 10,
              }}
            >
              <Typography fontSize="15px" fontWeight="bold">
                {" "}
                Omaha Highrollers{" "}
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                {" "}
                50 000 ₾
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { lg: 70, md: 70, sm: 30, xs: 30 },
                bottom: 18,
              }}
            >
              <Typography fontSize="15px" fontWeight="bold">
                {" "}
                ბაი-ინი - 550₾
              </Typography>
              <Box
                sx={{ bgcolor: "#B78648", borderRadius: "15px 15px 0px 15px" }}
              >
                <Typography fontSize="15px" textAlign="center">
                  {" "}
                  28 აპრილი
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Box
            component="img"
            src={isLgScreen ? MainbgImg : MainImgRes}
            width="100%"
          ></Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box
              sx={{
                position: "absolute",
                left: { lg: 220, md: 220, sm: 0, xs: 0 },
                bottom: { lg: 18, md: 18, sm: 5, xs: 5 },
              }}
            >
              <Typography fontSize="22px" fontWeight="bold">
                {" "}
                Main Events{" "}
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                {" "}
                150 000₾
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { lg: 240, md: 240, sm: 25, xs: 25 },
                bottom: { lg: 26, md: 26, sm: 15, xs: 15 },
              }}
            >
              <Typography fontSize="16px" fontWeight="bold">
                {" "}
                ბაი-ინი - 550₾
              </Typography>
              <Box
                sx={{ bgcolor: "#D7C860", borderRadius: "15px 15px 0px 15px" }}
              >
                <Typography fontSize="16px" textAlign="center" color="#094B3D">
                  {" "}
                  29 აპრილი
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Typography textAlign="center" mt={2} mb={2}>
        {" "}
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </Typography>
    </Stack>
  );
};
