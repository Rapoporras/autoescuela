import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";

import { FaIdCardAlt, FaMoneyBillAlt } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";

export default function Features() {
  const Feature = (props) => {
    return (
      <Box shadow="xl" p="25px" border="1px solid #00BAB5" textAlign={"center"} >
        <Box style={{
          display: "flex", justifyContent: "center", flexDirection: "row"
          , width: "100%", marginBottom: "15px"
        }}>
          {props.icon}
        </Box>




        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{ color: "gray.900" }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{ color: "gray.400" }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        px={{ base: 4, lg: 16, xl: 24 }}
        mx="auto"
        bg="white"

      >
        <Feature
          title="Tu carnet de conducir Super Express"
          icon={
            <GoDeviceMobile size={"40px"}></GoDeviceMobile>
          }
        >
          Estudiar desde tu móvil permite un proceso más rápido y sencillo. Desde cualquier parte y en cualquier momento, sin la necesidad de estudiar y pasar horas delante de un libro.
        </Feature>

        <Feature
          title="Aumenta tus probabilidades de aprobar a la primera"
          icon={
            <FaIdCardAlt size={"40px"}></FaIdCardAlt>
          }
        >
          Con la aplicación para smartphone Dribo, dispondrás de feedback personalizado en cada test de conducir sobre tus errores y sobre los temas para los cuales necesitas más refuerzo.
        </Feature>

        <Feature
          title="Sacarse el carnet de conducir a tu manera"
          icon={
            <FaMoneyBillAlt size={"40px"}></FaMoneyBillAlt>
          }
        >
          Invierte menos dinero y prueba nuestro método eficaz online. Nuestra metodología funciona y nuestra principal preocupación es que aprendas de forma entretenida.
        </Feature>
      </SimpleGrid>
    </Flex>
  );
}
