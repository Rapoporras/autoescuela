import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Box, Center } from "@chakra-ui/react";
import { Rating } from 'react-simple-star-rating'
const Review = () => {


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {people.map((person) => {
        return (
          <SwiperSlide>
            <Center
              h={"250px"}
              p={"15px"}
              color={"#fff"}
              flexDirection={"column"}
              backgroundColor={"#002327"}
              borderRadius={"1em"}
            >
              <Box>{person.name}</Box>
              <Center    >
                <Rating allowHover={false} initialValue={person.star} />

              </Center>
              <Box>{person.text}</Box>
            </Center>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Review;
