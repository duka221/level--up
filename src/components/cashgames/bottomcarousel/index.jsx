import React from 'react';
import { Box, Typography } from "@mui/material";
import rounded1 from "../../../assets/rounded1.png";
import rounded2 from "../../../assets/rounded2.png";
import rounded3 from "../../../assets/rounded3.png";
import rounded4 from "../../../assets/rounded4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
export const BottomCarousel = () => {
  return (
    <Box mt={2}>
      <Typography fontSize="18px" fontWeight="bold">მსგავსი აქციები</Typography>
      <Box mt={2}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box component="img" width={230} src={rounded1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" width={230} src={rounded2} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" width={230} src={rounded3} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" width={230} src={rounded4} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
