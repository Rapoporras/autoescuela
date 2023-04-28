import React, { useState } from "react";
import people from "./data";
import StarRating from "react-star-rating";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Box, Center } from "@chakra-ui/react";
import ReactStarRatingMin from "react-star-rating";
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
              <Box>
                {/* <ReactStarRatingMin
                  rating={person.star}
                  starRatedColor="#00BAB5"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                /> */}
              </Box>
              <Box>{person.text}</Box>
            </Center>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Review;
