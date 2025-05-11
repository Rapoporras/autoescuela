import { Flex, Icon, Image, chakra } from "@chakra-ui/react";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdAlternateEmail, MdPermPhoneMsg } from "react-icons/md";
export default function App() {
  const scrollTo = (id) => {
    var idbuscado = document.getElementById(id);

    idbuscado.scrollIntoView();
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo}></Header>
      <Routes>
        <Route path="/" element={<Home scrollTo={scrollTo} />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        alignItems="center"
        flexDirection={"column"}
        justifyContent="center"
      >
        <Flex w="full" bg="#fff"
          alignItems="center"
          flexDirection="column"
          justifyContent="center" p="20px">

          <chakra.p fontSize="xl"
            fontWeight="bold"
            color="gray.600" textAlign={"center"}>¿Quieres ponerte en contacto con nosotros?</chakra.p>
          <Flex mt={"15px"} alignItems="center"
            flexDirection={{
              base: "column",
              lg: "row"
            }}

            justifyContent="center"
            gap={"20px"}>
            <Flex alignItems="center"
              flexDirection="column"
              justifyContent="center">
              <chakra.p fontSize="xl"
                fontWeight="bold" display={"flex"}
                color="gray.600">  <MdPermPhoneMsg size="28px" style={{ marginRight: "15px" }} /> Teléfono / Whatsapp</chakra.p>
              <chakra.a
                href="tel:+34655757546"
                target="_blank"> <chakra.p fontSize="lg"
                  fontWeight="light"
                  color="gray.500">655 75 75 46</chakra.p></chakra.a>
            </Flex>
            <Flex alignItems="center"
              flexDirection="column"
              justifyContent="center">

              <chakra.p fontSize="xl"
                fontWeight="bold"
                display={"flex"}
                color="gray.600">  <MdAlternateEmail size="28px" style={{ marginRight: "15px" }} /> Email</chakra.p>
              <chakra.a
                href="mailto:autoescuelaclickydrive@gmail.com"
                target="_blank">  <chakra.p fontSize="lg"
                  fontWeight="light"
                  color="gray.500">autoescuelaclickydrive@gmail.com</chakra.p></chakra.a>
            </Flex>
            <Flex>  <chakra.a
              href="https://www.instagram.com/autoescuelaclickandrive/"
              target="_blank"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Github"
            >    <Flex mx="-2" flexDirection={"row"} alignItems={"center"} gap={"15px"}>
                <FaInstagram size={"32px"}></FaInstagram>
                <chakra.p
                  py={{
                    base: "2",
                    sm: "0",
                  }}
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.600"
                >
                  Siguenos en instagram
                </chakra.p>
              </Flex>

            </chakra.a></Flex>
              <Flex>  <chakra.a
              href="https://www.tiktok.com/@autoescuelaclickanddrive?_t=8qP7KvSVMZd&_r=1"
              target="_blank"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: {
                  color: "gray.400",
                },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Github"
            >    <Flex mx="-2" flexDirection={"row"} alignItems={"center"} gap={"15px"}>
                <FaTiktok size={"32px"}></FaTiktok>
                <chakra.p
                  py={{
                    base: "2",
                    sm: "0",
                  }}
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.600"
                >
                  Siguenos en TikTok
                </chakra.p>
              </Flex>

            </chakra.a></Flex>
          </Flex>

        </Flex>
        <Flex
          w="full"
          as="footer"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align="center"
          justify="space-between"
          px="6"
          py="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
        >
          <chakra.a
            href="#"
            fontSize="xl"
            fontWeight="bold"
            color="gray.600"
            _dark={{
              color: "white",
              _hover: {
                color: "gray.300",
              },
            }}
            _hover={{
              color: "gray.700",
            }}
          >
            <Image
              height="40px"
              src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/Click%20%26%20Drive_Logo.png?alt=media&token=698c89b0-4bfc-4de1-a835-8b33cab11147"
            />
          </chakra.a>

          <chakra.p
            py={{
              base: "2",
              sm: "0",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            All rights reserved
          </chakra.p>




        </Flex>
      </Flex>
      <div id="whatsapp" >

        <a href="https://api.whatsapp.com/send/?phone=655757546" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill="#25d366" viewBox="0 0 50 50">
            <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
