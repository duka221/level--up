import { Box, Link, Stack, Tooltip, Typography } from "@mui/material";
import React from 'react';
import exampleicon from "../../../assets/example-icon.png";
import ticketicon from "../../../assets/ticket-icon-sm.png";
import travelicon from "../../../assets/travel-icon-sm.png";
import { CashGamesTop20v2 } from "./cashGamesTop20v2";
export const CashGamesTop20 = () => {
  const arr = [
    {
      id: 1,
      voucher: "—",
      prize: "B კატეგორიის საგზური",
    },
    {
      id: 2,
      voucher: "—",
      prize: "B კატეგორიის საგზური",
    },
    {
      id: 3,
      voucher: "1300₾",
      prize: "სპეც. ტურნირის ბილეთი",
    },
    {
      id: 4,
      voucher: "1500₾",
      prize: "სპეც. ტურნირის ბილეთი",
    },
    {
      id: 5,
      voucher: "800₾",
      prize: "სპეც. ტურნირის ბილეთი",
    },
  ];
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
        <Typography textAlign="center" fontSize="18px" mt={2}>
          1 ₾ რეიკი = 1 ქულას
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
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          gap={2}
          mt={2}
        >
          <Typography fontSize="16px">TOP20 ლიდერბორდი ჰოლდემში</Typography>
          <Tooltip title="დამატებითი ინფორმაცია">
            <Box component="img" src={exampleicon} />
          </Tooltip>
        </Stack>

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={4}
          >
            <Typography fontSize="14px" color="#7D7D7D">
              ადგილი
            </Typography>
            <Typography fontSize="14px" color="#7D7D7D">
              ვაუჩერი
            </Typography>
            <Typography fontSize="14px" color="#7D7D7D">
              პრიზი
            </Typography>
          </Stack>
          <Box sx={{ height: 300, overflowY: "scroll" }}>
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
                      justifyContent="space-between"
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

                      <Typography fontSize="13px" ml={15.5}>
                        {item.voucher}
                      </Typography>
                      <Typography fontSize="13px">{item.prize}</Typography>
                    </Stack>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box
          my={2}
          sx={{
            border: "2px",
            color: "white",
            borderRadius: "10px",
            backgroundColor: "#25292B",
            width: "95%",
            p: 1.3,
          }}
        >
          <Stack>
            <Box
              sx={{
                border: "2px solid #2C3234",
                color: "white",
                borderRadius: "10px",
                backgroundColor: "#1E2122",
                mt: 1.5,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 40,
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translate(0%, -50%)",
                  bgcolor: "#F05A22",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "2px 0px 6px 0px rgba(240,90,34,0.75)",
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                gap={2}
                height={75}
                px={2}
              >
                <Box component="img" src={travelicon} />
                <Typography>The Festival in Malta-ს საგზური</Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                border: "2px solid #2C3234",
                color: "white",
                borderRadius: "10px",
                backgroundColor: "#1E2122",
                mt: 1.5,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 40,
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translate(0%, -50%)",
                  bgcolor: "#F05A22",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "2px 0px 6px 0px rgba(240,90,34,0.75)",
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                gap={2}
                height={75}
                px={2}
              >
                <Box component="img" src={ticketicon} />
                <Typography>
                  სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც
                  გათამაშდება The Festival in Malta-ს საგზური
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                border: "2px solid #2C3234",
                color: "white",
                borderRadius: "15px",
                backgroundColor: "#1E2122",
                my: 1.5,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 40,
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translate(0%, -50%)",
                  bgcolor: "#F05A22",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "2px 0px 6px 0px rgba(240,90,34,0.75)",
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                gap={2}
                height={75}
                px={2}
              >
                <Box component="img" src={ticketicon} />
                <Typography>ტექნიკის მაღაზიის ვაუჩერი</Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <CashGamesTop20v2 />
        <Typography textAlign="center" mb={2}>
          {" "}
          * ლიდერბორდის შედეგები განახლდება <Link>პოკერის ლობიში</Link>{" "}
        </Typography>
      </Stack>
      </Box>
    </>
  );
};
