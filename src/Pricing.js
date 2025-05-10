import React, { useState } from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  HStack,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { IoCheckmark, IoWarning } from "react-icons/io5";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default function Pricing() {
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "green.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p fontSize="lg" color="#002327" {...props} />
      </Flex>
    );
  };
  const FeatureBad = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "yellow.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoWarning}
        />
        <chakra.p fontSize="lg" color="#002327" {...props} />
      </Flex>
    );
  };
  const [inputNombre, setInputNombre] = useState("");
  const [inputTelefono, setInputTelefono] = useState("");
  const [linkstipe, setLinkstipe] = useState("");
  const [isError, setError] = useState(false);
  const handleinputNombreChange = (e) => setInputNombre(e.target.value);

  const handleinputTelefonoChange = (e) => setInputTelefono(e.target.value);

  const guardar_datos = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    if (inputTelefono != "" && inputNombre != "") {
      setError(false);
      try {
        const docRef = addDoc(collection(db, "Users"), {
          nombre: inputNombre,
          telefono: inputTelefono,
          fecha: hoy.toISOString(),
        });

        console.log("Document written with ID: ", docRef.id);
        window.open(linkstipe, "_blank");
        setInputNombre("");
        setInputTelefono("");
        onClose();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setError(true);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg="#E9F0F6"
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" textAlign="center">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="#002327"
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
              color="white"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matrícula
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  50€
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#fff"
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+ 2500 preguntas Oficiales DGT</Feature>
                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Soporte de profesores</Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="#fff"
                  bg="#002327"
                  _hover={{
                    bg: "brand.50",
                    _dark: { bg: "gray.700" },
                  }}
                  cursor="pointer"
                  onClick={() => {
                    setLinkstipe("https://buy.stripe.com/8wMfZe7fJfZn49yfZ1");
                    onOpen();
                  }}
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg="#00BAB5"
            _dark={{ bg: "gray.700" }}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matrícula + Bono 10 Clases Prácticas
              </chakra.span>
              <VStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  340€
                </chakra.span>
                <chakra.span alignSelf="center" fontSize="3xl" color="#002327">
                  (Recomendado)
                </chakra.span>
              </VStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg="#fff"
              _dark={{ bg: "gray.800" }}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+ 2500 preguntas Oficiales DGT</Feature>

                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Clases Prácticas de 45 min</Feature>
                <Feature>Prácticas en zona de examen</Feature>
                <Feature>Contacto directo con tu profesor/a</Feature>
                <FeatureBad>No incluye Tasas DGT ni examen Practico</FeatureBad>
              </VStack>
              <Box display="inline-flex" rounded="md" shadow="md" w="full">
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  _light={{ color: "white" }}
                  bg="#00BAB5"
                  _dark={{ bg: "brand.500" }}
                  _hover={{
                    bg: "brand.700",
                    _dark: { bg: "brand.600" },
                  }}
                  cursor="pointer"
                  onClick={() => {
                    setLinkstipe("https://buy.stripe.com/4gwaEUcA35kJ9tSaEK");
                    onOpen();
                  }}
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg="#002327"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
              color="white"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matrícula + Bono 20 Clases Prácticas
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  620€
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#fff"
              _dark={{ bg: "gray.800" }}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+ 2500 preguntas Oficiales DGT</Feature>
                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Clases Prácticas de 45 min</Feature>
                <Feature>Prácticas en zona de examen</Feature>
                <Feature>Contacto directo con tu profesor/a</Feature>
                <FeatureBad>No incluye Tasas DGT ni examen Practico</FeatureBad>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="#fff"
                  bg="#002327"
                  _hover={{
                    bg: "brand.50",
                    _dark: { bg: "gray.700" },
                  }}
                  cursor="pointer"
                  onClick={() => {
                    setLinkstipe("https://buy.stripe.com/bIYcN243x6oN9tSdQU");
                    onOpen();
                  }}
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
        </Flex>
        <Button
          mt="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/3cs8wM1VpfZndK8cMT");
            onOpen();
          }}
        >
          Pagar Tasas DGT
        </Button>
        <Button
          mt="15px"
          mx="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/28obIYbvZfZndK828d");
            onOpen();
          }}
        >
          Pagar Examen
        </Button>
        <Button
          mt="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/dR68wMgQj7sR0Xm7su");
            onOpen();
          }}
        >
          Pagar Examen + Tasas DGT
        </Button>
        <Button
          mt="15px"
          mx="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/00g14k1Vp3cB49ydQR");
            onOpen();
          }}
        >
          Bono 10 Clases Prácticas
        </Button>
        <Button
          mt="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/3cs8wM1VpfZndK8cMT");
            onOpen();
          }}
        >
          Bono 20 Clases Prácticas
        </Button>{" "}
        <Button
          mt="15px"
          backgroundColor="#002327"
          color="#fff"
          _hover={{
            bg: "#fff",
            border: "1px solid #002327",
            color: "#00BAB5",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          onClick={() => {
            setLinkstipe("https://buy.stripe.com/eVacN29nR9AZ35u6ow");
            onOpen();
          }}
        >
          Comprar Clases Prácticas
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setInputNombre("");
            setInputTelefono("");
            onClose();
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Introduce tus datos de contacto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Nombre Completo</FormLabel>
                <Input value={inputNombre} onChange={handleinputNombreChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Teléfono de contacto</FormLabel>
                <Input
                  value={inputTelefono}
                  onChange={handleinputTelefonoChange}
                />
              </FormControl>
              {!isError ? (
                ""
              ) : (
                <Text fontSize="12px" color="tomato">
                  Todos los campos son requeridos
                </Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                mr={3}
                onClick={() => {
                  setInputNombre("");
                  setInputTelefono("");
                  onClose();
                }}
              >
                Cerrar
              </Button>
              <Button
                backgroundColor="#002327"
                color="#fff"
                _hover={{
                  bg: "#fff",
                  border: "1px solid #002327",
                  color: "#00BAB5",
                }}
                onClick={() => {
                  guardar_datos();
                }}
              >
                Continuar con el pago
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}
