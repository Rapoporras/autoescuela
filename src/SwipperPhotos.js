import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Center, Image } from "@chakra-ui/react";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/IMG_0136(3).jpg?alt=media&token=7b5e1c66-c307-47ba-a713-907a3fac54a9",
    alt: "Autoescuela Marbella Online Click&Drive",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/IMG_0133(3).jpg?alt=media&token=51af2cba-936b-4630-91bc-0535c1f935c8",
    alt: "Autoescuela Marbella Online Click&Drive",
  },
];
const SwipperPhotos = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {images.map((img) => {
        return (
          <SwiperSlide>
            <Center>
              <Image
                boxSize="300px"
                objectFit="cover"
                src={img.src}
                alt={img.alt}
              />
            </Center>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwipperPhotos;
