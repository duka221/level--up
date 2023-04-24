import { Box, Stack, Typography } from "@mui/material";
import PokerImg from "../../../assets/poker-item-1-ticket-icon.png";
import PokerImg2 from "../../../assets/poker-item-2-ticket-icon.png";
export const FinalTournaments = () => {
  return (
    <Box
      mt={2}
      sx={{
        border: "2px",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "#2C3234",
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

        <Typography textAlign="center" fontSize="18px" mt={2} fontWeight="bold">
          ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ
        </Typography>
        <Stack
          border="4px solid #25292B"
          alignItems="center"
          justifyContent="center"
          bgcolor="#171718"
          borderRadius="16px"
          mt={2}
        >
          <Stack
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Stack width="100%" mb={{ lg: 11, md: 11, sm: 0, xs: 0 }}>
              <Stack mt={2}>
                <Stack
                  bgcolor="#1C1D1E"
                  borderRadius="10px"
                  p={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Box px={2}>
                    <Typography>“Cashgame Highrollers” -</Typography>
                    <Typography>1 საგზური</Typography>
                  </Box>
                  <Box
                    component="img"
                    src={PokerImg}
                    position="absolute"
                    top={0}
                    right={0}
                  />
                </Stack>
              </Stack>

              <Stack mb={2} mt={2}>
                <Stack
                  bgcolor="#1C1D1E"
                  borderRadius="10px"
                  p={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Box px={2}>
                    <Typography>„Tournament Sharks“ -</Typography>
                    <Typography>1 საგზური</Typography>
                  </Box>
                  <Box
                    component="img"
                    src={PokerImg2}
                    position="absolute"
                    top={0}
                    right={0}
                  />
                </Stack>
              </Stack>

              <Stack mb={2}>
                <Stack
                  bgcolor="#1C1D1E"
                  borderRadius="10px"
                  p={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Box px={2}>
                    <Typography>“Cashgame Highrollers” -</Typography>
                    <Typography>1 საგზური</Typography>
                  </Box>
                  <Box
                    component="img"
                    src={PokerImg}
                    position="absolute"
                    top={0}
                    right={0}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack mb={2} mt={{ lg: 2, md: 2, sm: 0, xs: 0 }}>
                <Stack
                  bgcolor="#1C1D1E"
                  borderRadius="10px"
                  p={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Box px={2}>
                    <Typography>„The Festival in Malta, GTD“</Typography>
                    <Typography>A კატეგორიის 1 საგზური</Typography>
                    <Typography>B კატეგორიის 1 საგზური</Typography>
                    <Typography>
                      ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს
                      165₾ ბაი-ინის გადახდით.
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={PokerImg2}
                    position="absolute"
                    top={0}
                    right={0}
                  />
                </Stack>
              </Stack>

              <Stack mb={2}>
                <Stack
                  bgcolor="#1C1D1E"
                  borderRadius="10px"
                  p={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Box px={2}>
                    <Typography>„The Festival in Malta, GTD“</Typography>
                    <Typography>A კატეგორიის 1 საგზური</Typography>
                    <Typography>B კატეგორიის 1 საგზური</Typography>
                    <Typography>
                      ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს
                      165₾ ბაი-ინის გადახდით.
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={PokerImg}
                    position="absolute"
                    top={0}
                    right={0}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Typography textAlign="center" mb={2}>
            {" "}
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </Typography>
          <Typography textAlign="center" mb={2}>
            {" "}
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
