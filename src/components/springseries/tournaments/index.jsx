import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import PromoLeftImg from "../../../assets/promo-left-img.png";
import PromoRightImg from "../../../assets/promo-right-img.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Tournaments = () => {
  return (
    <>
      <Box
        mt={3}
        sx={{
          border: "2px",
          color: "white",
          borderRadius: "20px",
          backgroundColor: "#2C3234",
          position: "relative",
        }}
      >
        <Stack alignItems="center" justifyContent="center">
          <Box
            sx={{
              width: 250,
              height: 4,
              bgcolor: "#F05A22",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              boxShadow: "0px 2px 6px 0px rgba(240,90,34,0.75)",
            }}
          />

          <Typography
            textAlign="center"
            fontSize="18px"
            mt={2}
            fontWeight="bold"
          >
            ტურნირები და სატელიტები
          </Typography>
        </Stack>

        <Stack
          border="4px solid #25292B"
          alignItems="center"
          justifyContent="center"
          bgcolor="#171718"
          borderRadius="16px"
          mt={2}
          mb={2}
          gap={3}
          py={4}
        >
          <Typography
            fontWeight="bold"
            fontSize={{ lg: 18, md: 18, sm: 10, xs: 10 }}
            textAlign="center"
          >
            {" "}
            სერიის ფარგლებში ყოველდღიურად გაიმართება 3 ივენთი{" "}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            borderRadius="50px"
            border="2px solid #F05A22"
            gap={3}
            boxShadow=" 0px 0px 10px 1px rgba(214,105,0,0.75), inset 0px 0px 10px 1px rgba(214,105,0,0.75)"
          >
            <IconButton sx={{ color: "white", bgcolor: "#F05A22" }}>
              {" "}
              <AccessTimeIcon />{" "}
            </IconButton>
            <Box mr={2}>
              <Typography textAlign="center">
                {" "}
                19:00 / 20:00 / 19:30{" "}
              </Typography>
            </Box>
          </Stack>
          <Typography sx={{ opacity: 0.9 }} textAlign="center">
            {" "}
            *ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.{" "}
          </Typography>
          <Typography sx={{ opacity: 0.9 }} textAlign="center">
            {" "}
            ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში{" "}
          </Typography>
          <Button
            sx={{
              color: "white",
              bgcolor: "#F05A22",
              "&:hover": {
                backgroundColor: "#ff6600",
              },
            }}
          >
            {" "}
            პოკერის ლობი{" "}
          </Button>
        </Stack>
        <Box
          component="img"
          width={{ lg: 203, md: 203, sm: 100, xs: 100 }}
          src={PromoLeftImg}
          sx={{ position: "absolute", left: 4, bottom: 4 }}
        ></Box>
        <Box
          width={{ lg: 220, md: 220, sm: 110, xs: 110 }}
          component="img"
          src={PromoRightImg}
          sx={{ position: "absolute", right: 4, bottom: 4 }}
        ></Box>
      </Box>
    </>
  );
};
