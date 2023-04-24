import { Box, Stack, Typography } from "@mui/material";
import React from "react";
export const CashGames12Side = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        border: "2px",
        color: "white",
        borderRadius: "16px",
        backgroundColor: "#2C3234",
        p: 3,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 250,
          height: 4,
          bgcolor: "#F05A22",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          boxShadow: "0px 2px 6px 0px rgba(240,90,34,0.75)",
          position: "absolute",
          top: 0,
        }}
      />
      <Typography
        fontSize={{ lg: 18, md: 18, sm: 14, xs: 14 }}
        fontWeight="bold"
      >
        ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
        ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
      </Typography>
      <Typography fontSize={{ lg: 15, md: 15, sm: 12, xs: 12 }}>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </Typography>
    </Stack>
  );
};
