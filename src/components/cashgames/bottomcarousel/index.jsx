import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import rounded1 from "../../../assets/rounded1.png";
import rounded2 from "../../../assets/rounded2.png";
import rounded3 from "../../../assets/rounded3.png";
import rounded4 from "../../../assets/rounded4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
export const BottomCarousel = () => {
  const carouselItems = [
    {
      title: "Get 300% Cashback",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded1,
      color:
        "linear-gradient(0deg, rgba(13,100,155,1) 0%, rgba(13,100,155,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Coming Soon",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded2,
      color:
        "linear-gradient(0deg, rgba(239,84,28,1) 0%, rgba(239,84,28,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Win a Jackpot",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded3,
      color:
        "linear-gradient(0deg, rgba(26,23,108,1) 0%, rgba(26,23,108,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Get 300% Cashback",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded4,
      color:
        "linear-gradient(0deg, rgba(13,100,155,1) 0%, rgba(13,100,155,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Coming Soon",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded1,
      color:
        "linear-gradient(0deg, rgba(239,84,28,1) 0%, rgba(239,84,28,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Win a Jackpot",
      description: "retrieve 300% bet amount as real money only here",
      image: rounded3,
      color:
        "linear-gradient(0deg, rgba(26,23,108,1) 0%, rgba(26,23,108,1) 30%, rgba(255,255,255,0) 50%)",
    },
  ];
  const fullText = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box mb={2} mt={4}>
        <Typography fontSize="18px" fontWeight="bold">
          მსგავსი აქციები
        </Typography>
      </Box>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={`carousel-${index}`}>
            <Box sx={{ borderRadius: "5px", position: "relative" }}>
              <Box
                sx={{
                  background: item.color,
                  width: "100%",
                  borderRadius: "inherit",
                  height: "100%",
                  position: "absolute",
                  zIndex: 1,
                }}
              />
              <Stack
                gap={1}
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  bottom: 0,
                  left: 0,
                  p: 2,
                }}
              >
                <Typography
                  textAlign="left"
                  fontSize={{ lg: 14, md: 14, sm: 12, xs: 12 }}
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign="left"
                  fontSize={{ lg: 14, md: 14, sm: 12, xs: 12 }}
                >
                  {fullText
                    ? item.description
                    : `${item.description.slice(0, 25)}...`}
                </Typography>
              </Stack>
              <Box component="img" width={230} src={item.image} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
