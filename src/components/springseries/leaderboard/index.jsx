import { Box, Link, Stack, Typography } from "@mui/material"
import { CashGamesTop20v2 } from "../../cashgames/cashgamestop20/cashGamesTop20v2"

export const Leaderboard = () => {
    return(
        <Box
        mt={2}
        sx={{
          border: "2px",
          color: "white",
          borderRadius: "20px",
          backgroundColor: "#2C3234",
        }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
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
              მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
            </Typography>
            <Stack border="4px solid #25292B"
            alignItems="center"
            justifyContent="center"
            bgcolor="#171718"
            borderRadius="16px" 
            mt={2}
            >
              <CashGamesTop20v2 />
              <Typography textAlign="center" mb={2}>
            {" "}
            * ლიდერბორდის შედეგები განახლდება <Link color="#EF5A21">პოკერის ლობიში</Link>{" "}
          </Typography>
          <Typography textAlign="center" mb={2}>
            {" "}
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები
          </Typography>
            </Stack>
          </Stack>
        </Box>
    )
}