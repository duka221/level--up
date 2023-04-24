import { Box, IconButton, Stack, Typography } from "@mui/material";
import { BottomCarousel } from "../cashgames/bottomcarousel";
import { BottomInfo } from "../cashgames/bottominfo";
import FinalImg from "../../assets/final-info-img.jpg";
import TicketImg from "../../assets/final-item-ticket-icon.png"
import FinalImg2 from "../../assets/final-item-event-icon.png"
import FinalImg3 from "../../assets/final-item-hotel-icon.png"
import FinalImg4 from "../../assets/final-item-money-icon.png"


export const FinalStage = () => {
    const arr = [
        {
            icon:`${TicketImg}`,
            item:"ორმხრივი ავიაბილეთი"
        },
        {
            icon:`${FinalImg2}`,
            item:"The Festival in Malta -ს მეინ ივენთის ბაი-ინი"
        },
        {
            icon:`${FinalImg3}`,
            item:"Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
        },
        {
            icon:`${FinalImg4}`,
            item:"ორმხრივი €500 სახარჯი ფული"
        },
        {
            icon:`${FinalImg3}`,
            item:"სასტუმრო Golden Tulip Vivaldi Hote"
        },
    ]
  return (
    <>
      <Box
        mt={3}
        p={2}
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
        <Box
          component="img"
          src={FinalImg}
          width="100%"
          borderRadius="12px"
        ></Box>
        <Stack justifyContent="center" alignItems="center" textAlign="center" mt={2}>
          <Typography fontSize="14px" fontWeight="bold">
            ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
          </Typography>
          <Typography fontSize="14px">
            {" "}
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.{" "}
          </Typography>
        </Stack>

        <Stack>
          <Stack
            mt={2}
            direction={{lg:"row",md:"column",sm:"column",xs:"column"}}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              px={2}
              sx={{
                border: "2px",
                color: "white",
                borderRadius: "16px",
                backgroundColor: "#2C3234",
                textAlign: "center",
                position: "relative",
              }}
            >
                <Typography fontSize={{ lg: 15, md: 15, sm: 12, xs: 12 }} mt={2} mb={2}>
              A კატეგორიის საგზურში შედის
              </Typography>
                {arr.map((item)=>{
                    return(
                        <>
                        <Box
                sx={{
                  width: 100,
                  height: 4,
                  bgcolor: "#F05A22",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "0px 2px 6px 0px rgba(240,90,34,0.75)",
                  position: "absolute",
                  top: 0,
                }}
              />
              
              <Stack bgcolor="#25292B" mb={2}>
                <Stack bgcolor="#1C1D1E"  borderRadius="10px" p={1} direction="row" alignItems="center" gap={2}>
                <Box component="img" src={item.icon}/>
                <Typography>
                    {item.item}
                </Typography>
                </Stack>
              </Stack>
                        </>
                    )
                })}
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              px={2}
              sx={{
                border: "2px",
                color: "white",
                borderRadius: "16px",
                backgroundColor: "#2C3234",
                textAlign: "center",
                position: "relative",
              }}
            >
                <Typography fontSize={{ lg: 15, md: 15, sm: 12, xs: 12 }} mt={2} mb={2}>
              A კატეგორიის საგზურში შედის
              </Typography>
                {arr.map((item)=>{
                    return(
                        <>
                        <Box
                sx={{
                  width: 100,
                  height: 4,
                  bgcolor: "#F05A22",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "0px 2px 6px 0px rgba(240,90,34,0.75)",
                  position: "absolute",
                  top: 0,
                }}
              />
              
              <Stack bgcolor="#25292B" mb={2}>
                <Stack bgcolor="#1C1D1E"  borderRadius="10px" p={1} direction="row" alignItems="center" gap={2}>
                <Box component="img" src={item.icon}/>
                <Typography>
                    {item.item}
                </Typography>
                </Stack>
              </Stack>
                        </>
                    )
                })}
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              px={2}
              sx={{
                border: "2px",
                color: "white",
                borderRadius: "16px",
                backgroundColor: "#2C3234",
                textAlign: "center",
                position: "relative",
              }}
            >
                <Typography fontSize={{ lg: 15, md: 15, sm: 12, xs: 12 }} mt={2} mb={2}>
              A კატეგორიის საგზურში შედის
              </Typography>
                {arr.map((item)=>{
                    return(
                        <>
                        <Box
                sx={{
                  width: 100,
                  height: 4,
                  bgcolor: "#F05A22",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  boxShadow: "0px 2px 6px 0px rgba(240,90,34,0.75)",
                  position: "absolute",
                  top: 0,
                }}
              />
              
              <Stack bgcolor="#25292B" mb={2}>
                <Stack bgcolor="#1C1D1E"  borderRadius="10px" p={1} direction="row" alignItems="center" gap={2}>
                <Box component="img" src={item.icon}/>
                <Typography>
                    {item.item}
                </Typography>
                </Stack>
              </Stack>
                        </>
                    )
                })}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <BottomInfo />
      <BottomCarousel />
    </>
  );
};
