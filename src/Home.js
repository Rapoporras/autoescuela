import logo from "./logo.svg";
import "./Home.css";
import Header from "./Header";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
  chakra,
  LinkBox,
  LinkOverlay,
  Link,
} from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import Features from "./Feature";
import React, { useRef } from "react";
import Pricing from "./Pricing";
import "animate.css";
import Review from "./Review";
import SwipperPhotos from "./SwipperPhotos";
function Home(props) {
  // A custom scroll container

  return (
    <>
      <Center
        w="100%"
        bg="#E9F0F6"
        minHeight="100vh"
        color="#002327"
        p="15px"
        id="inicio"
        // position="relative"
      >
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Center>
            <Box maxW={"500px"}>
              <Heading as="h2" size="2xl">
                Tu Autoescuela online en Marbella
              </Heading>
              <Text fontSize="xl" mt="15px">
                ¿ Aún no tienes el carnet ?
              </Text>
              <Button
                mt="15px"
                backgroundColor="#00BAB5"
                color="#fff"
                onClick={() => props.scrollTo("matriculate")}
                _hover={{
                  bg: "#fff",
                  border: "1px solid #00BAB5",
                  color: "#00BAB5",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                Matricúlate ahora
              </Button>
            </Box>
          </Center>

          <Image
            w="100%"
            objectFit="cover"
            shadow={"sm"}
            borderRadius="1em"
            src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/1.jpg?alt=media&token=30373a44-59e7-4ebb-a0dd-c3f256ccdddb"
            alt="Dan Abramov"
          />
        </SimpleGrid>
        {/* <div className="wave"></div> */}
      </Center>
      {/* <Center
        w="100%"
        bg="#fff"
        p="15px"
        minHeight="100vh"
        height="auto"
        color="#002327"
        id="sobre_nosotros"
      >
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Center>
            <Box maxW={"500px"}>
              <Heading as="h2" size="2xl">
                Sacarse el carnet nunca fue tan sencillo
              </Heading>
              <Text fontSize="xl" mt="15px">
                Si estás pensando en sacarte el carnet de conducir B nosotros te
                lo ponemos fácil
              </Text>
              <List spacing={15} mt="15px">
                <ListItem>
                  <ListIcon as={AiFillCar} color="#00BAB5" />
                  Completamente digital
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCar} color="#00BAB5" />A cualquier hora y
                  sitio .
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCar} color="#00BAB5" />
                  Fácil y eficaz .
                </ListItem>
              
                <ListItem>
                  <ListIcon as={AiFillCar} color="#00BAB5" />
                  Aprueba el teórico y queda con tu profesora
                </ListItem>
              </List>
            </Box>
          </Center>

          <Image
            objectFit="cover"
            src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/Sin-t%C3%ADtulo-12.png?alt=media&token=90924b8b-77b7-4a29-a4ff-d91c2c4ff288"
            alt="Dan Abramov"
          />
        </SimpleGrid>
      </Center> */}
      <Center w="100%" my="150x" height="400px" id="fondo">
        <h1>Completamente digital</h1>
      </Center>
      <Center
        w="100%"
        bg="#fff"
        p="15px"
        minHeight="100vh"
        color="#002327"
        mt="15px"
        textAlign="center"
        id="servicios"
      >
        <SimpleGrid
          columns={[1, null, 1]}
          spacing="40px"
          style={{ alignSelf: "center" }}
        >
          <Heading as="h2" size="2xl">
            Tu carnet a un click
          </Heading>
          <Text fontSize="xl" mt="15px">
            Gestiona tu tiempo, del resto nos encargamos nosotros
          </Text>
          <Features></Features>
        </SimpleGrid>
      </Center>
      <Center p="15px" mb={"15px"}>
        <Heading as="h2" size="2xl" style={{textAlign: "center"}}>
          Feedback de nuestros alumnos de Autoescuela Marbella Click&Drive
        </Heading>
      </Center>
      <Center p="15px">
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            {" "}
            <Review></Review>
          </Box>
          <Center>
            <SwipperPhotos></SwipperPhotos>
          </Center>
        </SimpleGrid>
      </Center>
      <Center>
        <Link
          mt={"15px"}
          mb={"35px"}
          href="https://g.page/r/CRE1zk9jDa9HEB0/review"
          target="_blank"
        >
          <Center
            height={"50px"}
            w={"250px"}
            color={"#fff"}
            backgroundColor={"#00BAB5"}
            borderRadius={"1em"}
          >
            Cuentanos tu experiencia
          </Center>
        </Link>
      </Center>
      <Center
        id="matriculate"
        key="matriculate"
        w="100%"
        bg="#E9F0F6"
        p="15px"
        minHeight="100vh"
        color="#002327"
      >
        <Pricing></Pricing>
      </Center>
      <Center w="100%" bg="#E9F0F6" p="15px" color="#002327"></Center>
    </>
  );
}

export default Home;
