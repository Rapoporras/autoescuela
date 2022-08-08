import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  Icon,
  UnorderedList,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";

import { AiFillCar } from "react-icons/ai";
import { FaIdCardAlt, FaMoneyBillAlt } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";

export default function Features() {
  const Feature = (props) => {
    return (
      <Box shadow="xl" p="25px" border="1px solid #00BAB5" textAlign={"center"}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            marginBottom: "15px",
          }}
        >
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
    <Flex w="auto" justifyContent="center" alignItems="center">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        px={{ base: 4, lg: 16, xl: 24 }}
        mx="auto"
        bg="white"
      >
        <Feature
          title="¿Por qué elegir Click&Drive?"
          icon={<GoDeviceMobile size={"40px"}></GoDeviceMobile>}
        > <List spacing={15} mt="15px">
        <ListItem style={{width:"100%", textAlign:"left"}}>
          <ListIcon as={AiFillCar} color="#00BAB5" />Gestiona y controla tu carnet a través de la app
        </ListItem>
        <ListItem style={{width:"100%", textAlign:"left"}}>
          <ListIcon as={AiFillCar} color="#00BAB5" />100% personalizada
        </ListItem>
        <ListItem style={{width:"100%", textAlign:"left"}}>
          <ListIcon as={AiFillCar} color="#00BAB5" />
          Todo sin salir de casa y a cualquiera hora
        </ListItem>

       
      </List>
    
        
        </Feature>

        <Feature
          title="Información del teórico y práctica"
          icon={<FaIdCardAlt size={"40px"}></FaIdCardAlt>}
        >
          <List spacing={15} mt="15px">
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />+ 2500 preguntas Oficiales DGT
            </ListItem>
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />Recomendaciones personalizadas
            </ListItem>
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />
              Todo sin salir de casa y a cualquiera hora
            </ListItem>

            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />
              Clases a tu medida
            </ListItem> <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />Recorridos de examen
            </ListItem>
          </List>
        
        </Feature>

        <Feature
          title="¿Cómo me inscribo en Click&Drive "
          icon={<FaMoneyBillAlt size={"40px"}></FaMoneyBillAlt>}
        >
          {" "}
          <List spacing={15} mt="15px">
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />Elige y paga la tarifa que mejor se adapte a ti
            </ListItem>
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />Recibe tu mensaje de
              confirmación
            </ListItem>
            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />
              Descárgate la app desde el link que te enviamos
            </ListItem>

            <ListItem style={{width:"100%", textAlign:"left"}}>
              <ListIcon as={AiFillCar} color="#00BAB5" />
              Aprueba el teórico y empiezas con las prácticas
            </ListItem>
          </List>
        </Feature>
      </SimpleGrid>
    </Flex>
  );
}
