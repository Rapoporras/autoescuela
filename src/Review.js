import React, { useState } from "react";
import people from "./data";
import { MdGrade } from "react-icons/md";
import "./Review.css";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Review = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
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
              alignItems={"center"}
              justifyContent={"flex-start"}
              borderRadius={"1em"}
            >
              <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box>{person.name}</Box>
                <Flex justifyContent={"flex-end"} alignItems={"center"}>
                  <Flex
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    width={"100px"}
                  >
                    {" "}
                    <Text fontSize="4xl">{person.star}</Text>
                  </Flex>
                  <MdGrade size={"30px"}></MdGrade>
                </Flex>
              </Flex>

              <Box fontSize={"14px"}>{person.text}</Box>
            </Center>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Review;
