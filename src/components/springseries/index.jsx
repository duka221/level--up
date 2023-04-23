import { Box, Button, Stack, Typography } from "@mui/material";
import { BottomCarousel } from "../cashgames/bottomcarousel";
import { BottomInfo } from "../cashgames/bottominfo";
import PromoLeftImg from "../../assets/promo-left-img.png";
import PromoRightImg from "../../assets/promo-right-img.png";

export const SpringSeries = () => {
  return (
    <>
      <Box
        mt={2}
        sx={{
          border: "2px",
          color: "white",
          borderRadius: "20px",
          backgroundColor: "#2C3234",
          width: "100%",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative" }}
        >
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
          borderRadius="10px"
          mt={4}
          mb={2}
        >
            <Box
            component="img"
            src={PromoLeftImg}
            sx={{float:"left"}}
          >
          </Box>
          <Box
            component="img"
            src={PromoRightImg}
            sx={{objectPosition:"left bottom"}}
            
          >
          </Box>
          <Typography>
            {" "}
            სერიის ფარგლებში ყოველდღიურად გაიმართება 3 ივენთი{" "}
          </Typography>
          <Typography> 19:00 20:00 19:30 </Typography>
          <Typography>
            {" "}
            *ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.{" "}
          </Typography>
          <Typography>
            {" "}
            ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში{" "}
          </Typography>
          <Button sx={{ color: "white", bgcolor: "#F05A22" }}>
            {" "}
            პოკერის ლობი{" "}
          </Button>
        </Stack>
      </Box>
      <BottomInfo />
      <BottomCarousel />
    </>
  );
};
