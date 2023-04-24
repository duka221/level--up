import { Box,  Stack,  Typography } from "@mui/material";
import React from "react";

export const MystKey = () => {
  const arr = [
    {
      id: 1,
      prize: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    },
    {
      id: 2,
      prize: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    },
    {
      id: 3,
      prize: "სპეციალური ტურნირი Tournament Sharks II ადგილი",
    },
    {
      id: 4,
      prize: "სპეც. ტურნირი Tournament Sharks III ადგილი",
    },
    {
      id: 5,
      prize: "Holdem Grinders ლიდერბორდის გამარჯვებული",
    },
    {
      id: 6,
      prize: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
    },
    {
      id: 7,
      prize: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
    },
    {
      id: 8,
      prize: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
    },
  ];
  return (
    <>
      <Box
        mt={3}
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
            fontSize="26px"
            mt={2}
            fontWeight="bold"
          >
            მისტიური გასაღები
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
          <Typography fontSize="16px" textAlign="center">
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </Typography>

          <Box
            my={2}
            sx={{
              border: "2px",
              color: "white",
              borderRadius: "10px",
              backgroundColor: "#25292B",
              width: "95%",
              p: 1.5,
            }}
          >
            <Box
              sx={{
                overflowY: "scroll",
                overflowX: "hidden",
                pr: 1,
                height: 300,
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#25292B",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#EF5A21",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#b0390e",
                },
              }}
            >
              {arr &&
                arr.map((item) => {
                  return (
                    <Box
                      sx={{
                        border: "2px solid #2C3234",
                        color: "white",
                        borderRadius: "50px",
                        backgroundColor: "#1E2122",
                        width: "95%",
                        p: 1.5,
                        my: 2,
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap={3}
                      >
                        <Box
                          ml={2}
                          sx={{
                            color: "white",
                            borderRadius: "50px",
                            backgroundColor: "#2C3234",
                            width: "28px",
                            height: "28px",
                            textAlign: "center",
                          }}
                        >
                          <Typography fontSize="13px" px={1} mt={0.5}>
                            {item.id}
                          </Typography>
                        </Box>

                        <Typography fontSize="13px">{item.prize}</Typography>
                      </Stack>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
