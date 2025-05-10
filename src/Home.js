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
import FrequentQuestionsAccordion from "./components/FrequentQuestionsAccordion";
import { FaInstagram } from "react-icons/fa";
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
          <Center mt={["75px", "0"]}>
            <Box maxW={"660px"}>
              <Heading as="h1" size="2xl">
                Tu Autoescuela online en Marbella
              </Heading>
              <Text fontSize={["md"]} mt="15px">
                ¿Quieres conseguir tu carnet de conducir de forma práctica y
                rápida? En Autoescuela Click & Drive, te lo ponemos fácil. Con
                nuestra aplicación, podrás acceder a todo lo que necesitas para
                prepararte para el teórico y el práctico desde cualquier lugar y
                a cualquier hora.
              </Text>
              <Text fontSize={["md"]} mt="15px">
                Encontrarás clases teóricas en vídeo, tests oficiales de la DGT,
                material de apoyo y tutorías online con profesores cualificados.
                Además, podrás reservar tus clases prácticas con solo unos
                clics.
              </Text>
              <Text fontSize={["md"]} mt="15px" mb="10px">
                ¿Qué esperas para certificarte? Olvídate de las clases teóricas
                aburridas y las interminables horas de práctica al volante.
                ¡Descarga la aplicación ahora y empieza a prepararte para tu
                carnet de conducir!
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

          <Center>
            <Image
              w="100%"
              objectFit="cover"
              shadow={"sm"}
              borderRadius="1em"
              src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/1.jpg?alt=media&token=30373a44-59e7-4ebb-a0dd-c3f256ccdddb"
              alt="Dan Abramov"
            />
          </Center>
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
      <Center
        w="100%"
        bg="#E9F0F6"
        color="#002327"
        px="15px"
        pt={["30px", "10px"]}
        pb="60px"
        as="section"
      >
        <Box maxW={["100vw", "80vw", "70vw", "65vw"]}>
          <Heading as="h2" size="xl" textAlign="center" mb="40px">
            Ahorra tiempo en el trámite de tu carnet de conducir con Autoescuela
            Click & Drive
          </Heading>
          <Text fontSize={["md"]} mt="15px" textAlign="center">
            El proceso de obtención del carnet de conducir puede ser largo y
            tedioso, especialmente si no se cuenta con el tiempo o la
            flexibilidad necesarios para desplazarse a una autoescuela
            tradicional.
          </Text>
          <Text fontSize={["md"]} mt="15px" textAlign="center">
            Con Autoescuela Click & Drive, puedes ahorrar tiempo en el trámite
            de tu carnet de conducir realizando todo el proceso desde cualquier
            lugar y a cualquier hora, sin necesidad de acudir a una autoescuela
            física.
          </Text>
          <Text fontSize={["md"]} mt="15px" textAlign="center">
            ¿Cómo funciona? Para empezar, solo tienes que descargar la
            aplicación de Autoescuela Click & Drive en tu dispositivo móvil. Una
            vez que la hayas instalado, podrás registrarte y realizar tu
            matrícula online.
          </Text>
          <Text fontSize={["md"]} mt="15px" textAlign="center">
            A continuación, tendrás acceso a clases teóricas en vídeo, tests
            oficiales de la DGT, material de apoyo y tutorías online con
            profesores cualificados. Podrás ver las clases y realizar los tests
            a tu propio ritmo, y tendrás la oportunidad de resolver tus dudas
            con los profesores en cualquier momento.
          </Text>
          <Text fontSize={["md"]} mt="15px" textAlign="center">
            Cuando estés preparado para empezar las clases prácticas, podrás
            reservarlas con solo unos clics. Los profesores de Autoescuela Click
            & Drive se adaptarán a tu horario y tus necesidades, para que puedas
            obtener tu carnet de conducir lo antes posible.
          </Text>
        </Box>
      </Center>
      <Center w="100%" my="150x" height="400px" id="fondo">
        <p>Completamente digital</p>
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
          style={{ alignSelf: "center", justifySelf: "center" }}
        >
          <Center flexDirection="column" as="section">
            <Heading as="h2" size="xl" maxW={[null, null, "600px"]}>
              Tu carnet de conducir en la palma de tu mano
            </Heading>
            <Box mt="20px">
              <Text
                fontSize={["md"]}
                mt="15px"
                mb="10px"
                maxW={[null, null, "600px"]}
              >
                Con Autoescuela Click & Drive, tu carnet de conducir está a tu
                alcance. Gestiona todo el proceso de obtención de tu carnet de
                conducir desde cualquier lugar y a cualquier hora, con la
                comodidad y flexibilidad que te ofrece una autoescuela online.
              </Text>
              <Text
                fontSize={["md"]}
                mt="15px"
                mb="10px"
                maxW={[null, null, "600px"]}
              >
                Consigue tu matrícula online, accede a clases teóricas en vídeo,
                realiza tests oficiales de la DGT, descarga material de apoyo y
                solicita tutorías online con profesores cualificados. También
                puedes reservar tus clases prácticas con solo unos clics.
              </Text>
              <Text
                fontSize={["md"]}
                mt="15px"
                mb="10px"
                maxW={[null, null, "600px"]}
              >
                ¡Gestiona tu tiempo, del resto nos encargamos nosotros!
              </Text>
            </Box>
          </Center>
          <Features></Features>
          <Center
            w="100%"
            color="#002327"
            px="15px"
            pt={["30px", "10px"]}
            pb="60px"
            as="section"
          >
            <Box maxW={["100vw", "80vw", "70vw", "65vw"]}>
              <Heading as="h2" size="xl" textAlign="center" mb="40px" mt="30px">
                Aprende a conducir 100% online de forma rápida y económica
              </Heading>
              <Text fontSize={["md"]} mt="15px" textAlign="center">
                ¿Buscas sacar tu carnet de conducir de forma cómoda, práctica y
                adaptada a tu ritmo? Nuestra autoescuela online es la solución
                perfecta para ti.
              </Text>
              <Text fontSize={["md"]} mt="15px" textAlign="center">
                Mediante nuestra innovadora plataforma 100% digital, obtendrás
                tu licencia de manejo en tiempo récord y sin moverte de casa.
                Así que no esperes más y matricúlate ahora.
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Center>

      <Center p="15px" mb={"15px"}>
        <Heading as="h2" size="2xl" style={{ textAlign: "center" }}>
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
        flexDirection="column"
        minHeight="100vh"
        color="#002327"
      >
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mt="40px"
          mb="10px"
          maxW={["100vw", "80vw", "70vw", "65vw"]}
        >
          Consigue tu carnet de conducir sin moverte de casa
        </Heading>
        <Pricing></Pricing>
        <Box
          bg="#E9F0F6"
          columns={[1]}
          width={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FrequentQuestionsAccordion />
        </Box>
      </Center>

      <Center w="100%" bg="#E9F0F6" p="15px" color="#002327"></Center>
    </>
  );
}

export default Home;
