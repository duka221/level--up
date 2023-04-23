import { Box, Stack, Typography } from "@mui/material"
import React from 'react';
export const CashGames12Side = () => {
    return(
        <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          border: "2px",
          color: "white",
          borderRadius: "10px",
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
        <Typography fontSize="18px">
          ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
          ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
        </Typography>
        <Typography fontSize="15px">
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
          ლობიში.
        </Typography>
      </Stack>
    )
}