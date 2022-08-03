import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon, UnorderedList, ListItem } from "@chakra-ui/react";

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
          title="¿Por qué elegir Click&Drive?"
          icon={
            <GoDeviceMobile size={"40px"}></GoDeviceMobile>
          }
        >
          <UnorderedList>
            <ListItem>Gestiona y controla tu carnet a través de la app</ListItem>
            <ListItem> 100% personalizada</ListItem>
            <ListItem> Todo sin salir de casa y a cualquiera hora</ListItem>

          </UnorderedList>


        </Feature>

        <Feature
          title="Información del teórico y práctica"
          icon={
            <FaIdCardAlt size={"40px"}></FaIdCardAlt>
          }
        >
          <UnorderedList>
            <ListItem>  + 2500 preguntas Oficiales DGT</ListItem>
            <ListItem> Recomendaciones personalizadas</ListItem>
            <ListItem> Todo sin salir de casa y a cualquiera hora</ListItem>


            <ListItem>   Clases a tu medida</ListItem>
            <ListItem>  Recorridos de examen   </ListItem>

          </UnorderedList>
        </Feature>

        <Feature
          title="Inscribirme en Click & Drive "
          icon={
            <FaMoneyBillAlt size={"40px"}></FaMoneyBillAlt>
          }
        > <UnorderedList>
            <ListItem>   Matricúlate </ListItem>
            <ListItem>   Te invitamos a la app ( Firma el contrato )   </ListItem>
            <ListItem>  Aprueba el teórico</ListItem>
            <ListItem>    Empieza con la prácticas </ListItem>

          </UnorderedList>



        </Feature>
      </SimpleGrid>
    </Flex>
  );
}
