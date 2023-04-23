import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from 'react';
import exampleicon from "../../../assets/example-icon.png";
import ticketicon from "../../../assets/ticket-icon-sm.png";
import travelicon from "../../../assets/travel-icon-sm.png";
export const CashGamesTop20v2 = () => {
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
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap={2}
        mt={2}
      >
        <Typography fontSize="16px">ჰოლდემის TOP20 ლიდერბორდი</Typography>
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

                    <Typography fontSize="13px" ml={{lg:15.5, md:15.5, sm:15.5, xs:5}}>
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
              <Typography fontSize={{ lg: 15, md: 15, sm: 10, xs: 10 }}>The Festival in Malta-ს საგზური</Typography>
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
              <Typography fontSize={{ lg: 15, md: 15, sm: 10, xs: 10 }}>
                სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება
                The Festival in Malta-ს საგზური
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
              <Typography fontSize={{ lg: 15, md: 15, sm: 10, xs: 10 }}>ტექნიკის მაღაზიის ვაუჩერი</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
