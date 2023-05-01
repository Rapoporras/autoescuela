import { Flex, Icon, Image, chakra } from "@chakra-ui/react";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { FaInstagram } from "react-icons/fa";
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
        justifyContent="center"
      >
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

          <Flex mx="-2" alignItems={"center"}>
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
              Siguenos en instagram:
            </chakra.p>
            <chakra.a
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
            >
              <FaInstagram></FaInstagram>
            </chakra.a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
